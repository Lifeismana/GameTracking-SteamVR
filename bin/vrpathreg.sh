    ;;
    VRPATHREG=$STEAMVR_TOOLSDIR/bin/linux64/vrpathreg
    VRPATHREG=$STEAMVR_TOOLSDIR/bin/osx32/vrpathreg
    echo set QT_DIR
    exit 1
  Darwin)
  Linux)
  default)
#!/bin/bash -x
VRBINDIR=$(cd $(dirname $0)/; pwd)
[[ -n $STEAMVR_VRENV ]] || exec "$VRBINDIR/vrenv.sh" "$0" "$@"
case $(uname) in
exec $DEBUGGER "$VRPATHREG" "$@"
