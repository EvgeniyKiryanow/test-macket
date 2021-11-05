#!//usr/bin/env/ sh

set -e 

yarn build

cd dist
git init 
git add .
git commit -m "new deployment"
git push -f git@github.com:EvgeniyKiryanow/test-macket.git gh-pages:deploy

cd -