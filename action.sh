#!/bin/bash

echo "Compilling SASS files"
npm run css:docs
echo "Compilation completed"

echo "Publishing to ${GITHUB_REPOSITORY} on branch ${remote_branch}"
echo 
echo "https://${GITHUB_ACTOR}:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
echo "${GITHUB_ACTOR}"
echo "${GITHUB_ACTOR}@users.noreply.github.com"
echo 

cd docs && \
remote_repo="https://${GITHUB_ACTOR}:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git" && \
remote_branch="gh-pages" && \
git init && \
git config user.name "${GITHUB_ACTOR}" && \
git config user.email "${GITHUB_ACTOR}@users.noreply.github.com" && \
git add . && \
git commit -m 'action build' > /dev/null 2>&1 && \
git push --force $remote_repo master:$remote_branch > /dev/null 2>&1 && \
rm -rf .git && \
cd ../

echo '👍 SUCCESS!'
