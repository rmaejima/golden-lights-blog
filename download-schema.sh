#!/bin/bash
# https://stackoverflow.com/questions/43267413/shell-how-to-set-environment-variables-from-env-file
set -a # 環境変数の読み出しってこれであってますかね?
source .env.local
set +a

# memo: add $1 to specify dir
yarn run apollo schema:download --header "Authorization: Bearer $CONTENTFUL_ACCESS_TOKEN" \
--endpoint https://graphql.contentful.com/content/v1/spaces/$CONTENTFUL_SPACE_ID/environments/master $1