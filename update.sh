#!/bin/bash
set -euo pipefail

cd "${0%/*}"
. ../common.sh

echo "Processing SteamVR..."

ProcessDepot ".dll" ".exe" ".so"
ProcessVPK
ProcessToolAssetInfo
FixUCS2

# Prettify & Clean js/css
rm --recursive --force resources/webinterface/dashboard_prettier/ resources/webinterface/dashboard_cleaned/ || true
rsync --archive --include="*/" --include="*.js" --include="*.css" --exclude="*" --prune-empty-dirs resources/webinterface/dashboard/ resources/webinterface/dashboard_prettier/
find resources/webinterface/dashboard_prettier/ -type f -name "*.js" -exec bash -c 'node .github/tools/generate_clean_js.mjs "$1" "${1/dashboard_prettier/dashboard_cleaned}"' _ {}  \; 
npm run prettier -- --write resources/webinterface/dashboard_prettier/ resources/webinterface/dashboard_cleaned/  || true


rm --recursive --force drivers/lighthouse/resources/webinterface_prettier/ drivers/lighthouse/resources/webinterface_cleaned/ || true
rsync --archive --include="*/" --include="*.js" --include="*.css" --exclude="*" --prune-empty-dirs drivers/lighthouse/resources/webinterface drivers/lighthouse/resources/webinterface_prettier/
find drivers/lighthouse/resources/webinterface_prettier/ -type f -name "*.js" -exec bash -c 'node .github/tools/generate_clean_js.mjs "$1" "${1/webinterface_prettier/webinterface_cleaned}"' _ {}  \; 
npm run prettier -- --write drivers/lighthouse/resources/webinterface_prettier/ drivers/lighthouse/resources/webinterface_cleaned/  || true

# Extract protobufs
mkdir -p Protobufs ProtobufsWebui Structs
node .github/tools/dump_javascript_protobufs.mjs

CreateCommit "$(grep -o '[0-9\.]*' bin/version.txt)" "$(grep -o '[0-9\.]*' steam_buildid.txt)"

echo "Done."
