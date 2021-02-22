# 确保脚本抛出遇到的错误
set -e
npm run docs:build && cd docs/.vuepress/dist
# github && 码云
git init
git add -A
date=`date +%Y-%m-%d_%H:%M:%S`
git commit -m "deploy ${date}"
git push -f git@gitee.com:sanshui-studio/saas-vuepress.git master
rm -rf docs/.vuepress/dist
cd -


