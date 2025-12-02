#!/usr/bin/env bash
msg="$1"
if [ -z "$msg" ]
then
echo "Error:Commit message required"
exit 1
fi

git add .
git commit -m "$msg"
git push origin main