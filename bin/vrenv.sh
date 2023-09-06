			exec ~/.steam/root/ubuntu12_32/steam-runtime/run.sh "$0" "$@"
		*) break;; 
		--quiet) QUIET=1; shift ;; 
		QT_DIR="$STEAMVR_TOOLSDIR/bin/linux64/qt"
		QT_DIR=$(cd "$STEAMVR_TOOLSDIR/../../src/do_not_distribute/qt/5.5.0/osx32"; pwd)
		VRSTARTUP="$STEAMVR_TOOLSDIR/bin/linux64/vrstartup"
		echo set QT_DIR
		exit 1
		export DYLD_FRAMEWORK_PATH="$QT_DIR/lib"
		export DYLD_LIBRARY_PATH="$RUNTIMEDIR/bin:$RUNTIMEDIR/bin/osx32"
		export LD_LIBRARY_PATH="$(pwd):$RUNTIMEDIR/bin/linux64:$SDKDIR/bin/linux64:$QT_DIR/lib:$STEAMVR_TOOLSDIR/bin/linux64${LD_LIBRARY_PATH+:$LD_LIBRARY_PATH}"
		export QT_PLUGIN_PATH="$QT_DIR/plugins"
		export VRCOMPOSITOR_LD_LIBRARY_PATH="$LD_LIBRARY_PATH"
		if [ -z "$STEAM_RUNTIME" ]; then
	Darwin)
	Linux)
	case "$1" in 
	default)
	esac 
	set -x
#!/bin/bash
QUIET=0
RUNTIMEDIR=$(cd "$STEAMVR_TOOLSDIR/../runtime"; pwd)
SDKDIR=$(cd "$STEAMVR_TOOLSDIR/../sdk"; pwd)
case $(uname) in
exec "$@"
export STEAMVR_TOOLSDIR=$(cd "$(dirname $STEAMVR_VRENV)/.."; pwd)
export STEAMVR_VRENV="$(readlink -f $0)"
if [[ "$QUIET" == "0" ]]; then
while [[ $# -gt 0 ]]; do 
