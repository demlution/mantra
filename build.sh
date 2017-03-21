grunt build
rm -rf ../mantra_dist
cp -R dist ../mantra_dist
mkdir -p ../mantra_dist/node_modules/stylie/app/img
cp app/scripts/stylie/img/circle.png ../mantra_dist/node_modules/stylie/app/img/
