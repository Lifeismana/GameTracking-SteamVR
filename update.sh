#!/bin/bash
set -euo pipefail

cd "${0%/*}"
. ../common.sh

echo "Processing SteamVR..."

ProcessDepot ".dll" ".exe" ".so"
ProcessVPK
ProcessToolAssetInfo
FixUCS2

# Prettify js/css
rm --recursive resources/webinterface/dashboard_prettier/ || true
rsync --archive --include="*/" --include="*.js" --include="*.css" --exclude="*" --prune-empty-dirs resources/webinterface/dashboard/ resources/webinterface/dashboard_prettier/
npm run prettier -- --write resources/webinterface/dashboard_prettier/ || true
mkdir -p Protobufs ProtobufsWebui Structs
node .github/tools/dump_javascript_protobufs.mjs

CreateCommit "$(grep -o '[0-9\.]*' bin/version.txt)" "$(grep -o '[0-9\.]*' steam_buildid.txt)"

echo "Done."
