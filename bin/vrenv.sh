#!/bin/bash

set -o pipefail
shopt -s failglob
set -u

BASENAME="$(basename "$0")"

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

VRSTARTUP="$STEAMVR_TOOLSDIR/bin/linux64/vrstartup"
QT_DIR="$STEAMVR_TOOLSDIR/bin/linux64/qt"
export LD_LIBRARY_PATH="$(pwd)${SDKDIR+:$SDKDIR/bin/linux64}:$QT_DIR/lib:$STEAMVR_TOOLSDIR/bin/linux64${LD_LIBRARY_PATH+:$LD_LIBRARY_PATH}"

# vrcompositor-launcher is CAP_SYS_NICE and LD_LIBRARY_PATH gets stripped,
# it pulls from VRCOMPOSITOR_LD_LIBRARY_PATH to re-set LD_LIBRARY_PATH and execute vrcompositor
export VRCOMPOSITOR_LD_LIBRARY_PATH="$LD_LIBRARY_PATH"
log "VRCOMPOSITOR_LD_LIBRARY_PATH=${VRCOMPOSITOR_LD_LIBRARY_PATH}"

log exec "$@"
exec "$@"
