#!//usr/bin/env/ sh

set -e 

yarn build

cd dist
git init
git add -A
git commit -m "new deployment"
git push -f git@github.com:EvgeniyKiryanow/test-macket.git main:gh-pages

cd -