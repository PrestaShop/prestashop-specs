#!/bin/bash
set -euo pipefail

cd "$( dirname "$0" )/../"

cd themes/hugo-geekdoc && pwd
npm install
npx gulp default
cd - && pwd
npm install
