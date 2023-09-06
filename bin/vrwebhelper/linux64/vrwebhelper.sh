        "$DIR/steam-runtime-heavy.sh" \
        "$STEAM_RUNTIME_HEAVY/scripts/switch-runtime.sh" \
        -- \
        --runtime="$STEAM_RUNTIME_HEAVY" \
        --runtime=steam-runtime-heavy \
        --unpack-dir="$DIR" \
    # We might need to bootstrap from the archive
    )
    STEAM_RUNTIME_HEAVY=$(readlink -f "$STEAM_RUNTIME_HEAVY")
    echo "${SCRIPT}[$$]: $*" >&2 || :
    export LD_LIBRARY_PATH="${DIR}${SYSTEM_LIBRARY_PATH:+":$SYSTEM_LIBRARY_PATH"}"
    export STEAM_RUNTIME_HEAVY
    export STEAM_RUNTIME_HEAVY="${DIR}/steam-runtime-heavy"
    in_runtime=( \
    in_runtime=()
    log "Runtime defaulting to $STEAM_RUNTIME_HEAVY"
    log "Runtime disabled by environment (this is unsupported)"
    log "Runtime overridden to $STEAM_RUNTIME_HEAVY"
    unset STEAM_RUNTIME_HEAVY
# Make it an absolute path
# No proxies required for localhost access
# Re-exec through vrenv.sh first if necessary, which sets up scout LD_* and additional VR environment
# STEAM_RUNTIME_HEAVY is a debug tool that can be used in the same way as STEAM_RUNTIME in steam.sh,
# See http://repo.steampowered.com/steamrt/steamrt-heavy/ for details
# Steam runtime 'heavy' is a newer runtime than the default Steam runtime (scout)
# Tell run.sh to add the current working directory to the search path
# steamwebhelper and libcef.so are built for this newer environment,
# to override the location of the heavy runtime libraries
#!/bin/bash
DIR="$(dirname "$0")"
DIR="$(pwd)"
SCRIPT="$(basename "$0")"
VRBINDIR=$(cd $(dirname $0)/../../../bin; pwd)
[[ -n $STEAMVR_VRENV ]] || ( log "re-exec through vrenv.sh" ; exec "$VRBINDIR/vrenv.sh" "$0" "$@" )
cd "${DIR}"
elif [ -z "${STEAM_RUNTIME_HEAVY-}" ]; then
exec "${in_runtime[@]}" ./vrwebhelper "$@"
export STEAM_COMPAT_FLAGS=search-cwd,search-cwd-first
export STEAM_COMPAT_INSTALL_PATH="${DIR}"
if [ "${STEAM_RUNTIME-}" = "0" ]; then
log () {
set -eu
unset http_proxy
unset https_proxy
