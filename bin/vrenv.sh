#!/bin/bash

set -o pipefail
shopt -s failglob
set -u

BASENAME="$(basename "$0")"
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

QUIET="${QUIET:-1}"

while [[ $# -gt 0 ]]; do 
	case "$1" in 
		--quiet) QUIET=1; shift ;; 
		*) break;; 
	esac 
done

if [[ "$QUIET" == "0" ]]; then
	set -x
fi

log () {
    ( echo "${BASENAME}[$$]: $*" >&2 ) || :
}

export STEAMVR_VRENV="$(readlink -f $0)"
export STEAMVR_TOOLSDIR=$(cd "$(dirname $STEAMVR_VRENV)/.."; pwd)

if [ -d "$STEAMVR_TOOLSDIR/../sdk" ]; then
	# May only exist in internal Valve tree
	SDKDIR=$(cd "$STEAMVR_TOOLSDIR/../sdk"; pwd)
fi

# linux64-only for now
VRSTARTUP_PLATFORM=linux64
VRSTARTUP="$STEAMVR_TOOLSDIR/bin/${VRSTARTUP_PLATFORM}/vrstartup"
QT_DIR="$STEAMVR_TOOLSDIR/bin/${VRSTARTUP_PLATFORM}/qt"
export LD_LIBRARY_PATH="${SCRIPT_DIR}/${VRSTARTUP_PLATFORM}${SDKDIR+:$SDKDIR/bin/${VRSTARTUP_PLATFORM}}:$QT_DIR/lib:$STEAMVR_TOOLSDIR/bin/${VRSTARTUP_PLATFORM}${LD_LIBRARY_PATH+:$LD_LIBRARY_PATH}"

if [[ -z "${SRT_LAUNCHER_SERVICE_ALONGSIDE_STEAM:-}" ]]; then
	if command -v steam-runtime-launch-client &>/dev/null; then
		log "steam-runtime-launch-client found in PATH, enabling SRT_LAUNCHER_SERVICE_ALONGSIDE_STEAM"
		export SRT_LAUNCHER_SERVICE_ALONGSIDE_STEAM=1
	fi
fi

# vrcompositor-launcher is CAP_SYS_NICE and LD_LIBRARY_PATH gets stripped,
# it pulls from VRCOMPOSITOR_LD_LIBRARY_PATH to re-set LD_LIBRARY_PATH and execute vrcompositor
export VRCOMPOSITOR_LD_LIBRARY_PATH="$LD_LIBRARY_PATH"
log "VRCOMPOSITOR_LD_LIBRARY_PATH=${VRCOMPOSITOR_LD_LIBRARY_PATH}"

log exec "$@"
exec "$@"
