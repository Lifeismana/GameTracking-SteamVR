			${STEAM_ZENITY} --no-wrap --info --text="SteamVR setup is incomplete, some features might be missing. See $SETUP_LOG for details.";
		SteamVRLauncherSetup
		VRSTARTUP=$STEAMVR_TOOLSDIR/bin/linux64/vrstartup
		VRSTARTUP=$STEAMVR_TOOLSDIR/bin/osx32/vrstartup
		echo set QT_DIR
		exit 1
		if [ "$?" != "0" ]; then
		pErr 'Error: getcap is required to complete the SteamVR setup.'
		pErr 'Error: setcap is required to complete the SteamVR setup.'
		pErr 'Error: setcap of vrcompositor-launcher failed.'
		pErr 'Error: user declined superuser request.'
		return 0
		return 1
	Darwin)
	Linux)
	default)
	echo "$(date) - $@" >> $SETUP_LOG
	export STEAM_ZENITY="zenity"
	if ! ${STEAM_ZENITY} --no-wrap --question --text="SteamVR requires superuser access to finish setup. Proceed?"; then
	if ! [ -x "$(command -v getcap)" ]; then
	if ! [ -x "$(command -v setcap)" ]; then
	if ! [[ "$(getcap $STEAMVR_TOOLSDIR/bin/linux64/vrcompositor-launcher)" == *"cap_sys_nice"* ]]; then
	if [[ "$(getcap $STEAMVR_TOOLSDIR/bin/linux64/vrcompositor-launcher)" == *"cap_sys_nice"* ]]; then
	pkexec setcap CAP_SYS_NICE=eip $STEAMVR_TOOLSDIR/bin/linux64/vrcompositor-launcher
	return 0
# Just a safety fallback, STEAM_ZENITY should be already setup via the vrenv.sh path above
#!/bin/bash -x
SETUP_LOG=/tmp/SteamVRLauncherSetup.log
VRBINDIR=$(cd $(dirname $0)/; pwd)
[[ -n $STEAMVR_VRENV ]] || exec "$VRBINDIR/vrenv.sh" "$0" "$@"
case $(uname) in
exec $DEBUGGER "$VRSTARTUP" "$@"
function SteamVRLauncherSetup()
function pErr()
if [ -z ${STEAM_ZENITY} ]; then
