#!/bin/bash
set -e

echo "Backend"
cd "${DEPLOY_PATH}/current/backend"
yarn install
yarn build

echo "Frontend"
cd "${DEPLOY_PATH}/current/frontend"
yarn install --production
yarn build

echo "Pm2"
npx pm2 startOrRestart "${DEPLOY_PATH}/current/ecosystem.config.js" --env production
npx pm2 save

echo "Completed"
