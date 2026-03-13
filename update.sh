#!/bin/bash
set -euo pipefail

cd "${0%/*}"
. ../common.sh


echo "Downloading SteamVR..."

$STEAM_FILE_DOWNLOADER_PATH --username "$STEAM_USERNAME" --password "$STEAM_PASSWORD" --appid 250820 --output . --branch $STEAM_BRANCH --save-manifest

echo "Processing SteamVR..."

set +e
ProcessDepot ".dll"
set -e
ProcessDepot ".exe"
set +e
ProcessDepot ".so"
set -e
ProcessVPK
ProcessToolAssetInfo
FixUCS2

# Prettify js/css
rm --recursive resources/webinterface/dashboard_prettier/ || true
rsync --archive --include="*/" --include="*.js" --include="*.css" --exclude="*" --prune-empty-dirs resources/webinterface/dashboard/ resources/webinterface/dashboard_prettier/
npm run prettier -- --write resources/webinterface/dashboard_prettier/ || true

CreateCommit "$(grep -o '[0-9\.]*' bin/version.txt)" "$(grep -o '[0-9\.]*' steam_buildid.txt)"

echo "Done."
