# https://stackoverflow.com/questions/43267413/shell-how-to-set-environment-variables-from-env-file
set -a 
source .env
set +a

# memo: add $1 to specify dir
npx apollo schema:download --header "Authorization: Bearer $REACT_APP_CONTENTFUL_ACCESS_TOKEN" \
--endpoint https://graphql.contentful.com/content/v1/spaces/$REACT_APP_CONTENTFUL_SPACE_ID/environments/master $1