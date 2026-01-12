#!/bin/bash

# verbose
#set -x

set -o pipefail
shopt -s failglob
set -u

BASENAME="$(basename "$0")"
# the vrstartup executable has it's own logging to vrstartup.txt
# this captures the script launch work and stdout/stderr
LOGFILE=vrstartup-linux.txt

STEAM_BASE_FOLDER="${STEAM_BASE_FOLDER:-$(realpath ~/.steam/steam)}"
mkdir -p "${STEAM_BASE_FOLDER}/${STEAM_CLIENT_LOG_FOLDER:-logs}"

log () {
    ( echo "${BASENAME}[$$]: $*" >&2 ) || :
}

# Pass --valve-skip-runtime-safety or set VALVE_SKIP_RUNTIME_SAFETY=1 to allow running with no runtime
# This is a developer feature!
# If you believe this fixes an issue on a production install, something is wrong and you should report a bug.
VALVE_SKIP_RUNTIME_SAFETY="${VALVE_SKIP_RUNTIME_SAFETY:-0}"
while [[ $# -gt 0 ]]; do
	case "$1" in
		--valve-skip-runtime-safety)
			VALVE_SKIP_RUNTIME_SAFETY=1
			shift
			;;
		*)
			break
			;;
	esac
done
export VALVE_SKIP_RUNTIME_SAFETY

if [ -n "${PRESSURE_VESSEL_RUNTIME-}" ]; then
	log "Steam Linux Runtime: ${PRESSURE_VESSEL_RUNTIME}"
	logger="$(which srt-logger)"
else
	if [ "${VALVE_SKIP_RUNTIME_SAFETY}" != "1" ]; then
		log "ERROR: no steam runtime environment set, please use sniper SLR"
		exit 1
	else
		log "WARNING: Skipping runtime safety check (VALVE_SKIP_RUNTIME_SAFETY enabled)"
	fi
fi

if [ -x "${logger-}" ]; then
	# Prevent multiple opens through vrenv.sh relaunch
	if [ -z "${_STEAMVR_LOGGING_READY-}" ]; then
		# Send stdout to a subprocess that copies its stdin to the log file,
		# maybe the terminal, and maybe the systemd Journal; then send stderr
		# to the same place as stdout
		exec > >( exec "${logger}" --exec-fallback --filename=${LOGFILE} ) 2>&1
		export _STEAMVR_LOGGING_READY=1
	fi
else
	log "WARNING: ${logger-} not found, logging disabled"
fi

VRBINDIR="$(cd "$(dirname "$0")" && echo $PWD)"

# here first avoids doing it twice in vrsetup.sh, then vrstartup-helper.sh
if [ -z "${STEAMVR_VRENV-}" ]; then
	log "Relaunch under vrenv."
	log exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	# unreachable
fi

log call "$VRBINDIR/vrsetup.sh"
"$VRBINDIR/vrsetup.sh"

log exec "$VRBINDIR/vrstartup-helper.sh"
exec "$VRBINDIR/vrstartup-helper.sh"
