bootstrapVersion="v3.3.5"

echo "Initializing bootstrap submodule... ($bootstrapVersion)"
git submodule update --init

submodulepath=.git/modules/$(grep -oP "path\s*\=\s*\K(.+)" .gitmodules)

$(cd $submodulepath; git config core.sparsecheckout true)

echo '' > $submodulepath/info/sparse-checkout
echo 'js/*.js' >> $submodulepath/info/sparse-checkout
echo 'less/*.less' >> $submodulepath/info/sparse-checkout
echo 'less/mixins/*.less' >> $submodulepath/info/sparse-checkout
echo 'fonts/*' >> $submodulepath/info/sparse-checkout

$(cd $submodulepath; git checkout $bootstrapVersion)

echo "Generating asset list for package.js..."

bootstrapJsFiles="$(find assets/bootstrap/js -not -path '*/\.*' -name '*.js' -type f -exec echo "'{}'" \; | grep -v '^$' | paste -s -d ',')"
sed '/jsAssets.*=.*/d' -i package.js
echo "var jsAssets = [$bootstrapJsFiles];" >> package.js

bootstrapLessFiles="$(find assets/bootstrap/less -not -path '*/\.*' -name '*.less' -type f -exec echo "'{}'" \; | grep -v '^$' | paste -s -d ',')"
sed '/lessAssets.*=.*/d' -i package.js
echo "var lessAssets = [$bootstrapLessFiles];" >> package.js

bootstrapFontFiles="$(find assets/bootstrap/fonts -not -path '*/\.*' -name '*' -type f -exec echo "'{}'" \; | grep -v '^$' | paste -s -d ',')"
sed '/fontAssets.*=.*/d' -i package.js
echo "var fontAssets = [$bootstrapFontFiles];" >> package.js

echo "Generating js filenames for serve.js..."

bootstrapJsFilenames="$(find assets/bootstrap/js -not -path '*/\.*' -name '*.js' -type f -printf "'%f'\n" | grep -v '^$' | paste -s -d ",")"
sed '/jsAssetNames.*=.*/d' -i serve.js
echo "var jsAssetNames = [$bootstrapJsFilenames];" >> serve.js

echo "Done"
