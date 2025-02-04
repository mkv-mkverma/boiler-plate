# Getting Started with Create React App

## husky install

npx husky init
echo "npm run lint" > .husky/pre-commit
echo "npm test" > .husky/pre-push
echo "echo 'Commit successful! 🚀'" > .husky/post-commit
echo "echo 'JIRA-123: ' >> $1" > .husky/prepare-commit-msg

git commit -m "comments" -n/--no-verify
