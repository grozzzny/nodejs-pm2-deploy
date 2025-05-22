require('dotenv').config({ path: '.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/main', REPO_URL, DEPLOY_PORT
} = process.env;

module.exports = {
  apps: [
    {
      name: "backend",
      script: "dist/app.js",
      cwd: "./backend",
      autorestart: true
    },
    {
      name: "frontend",
      script: "serve -s build -l 3001",
      cwd: "./frontend",
      autorestart: true
    },
  ],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      port: DEPLOY_PORT || 22,
      ref: DEPLOY_REF,
      repo: REPO_URL,
      path: DEPLOY_PATH,
      // pre-deploy
      'pre-setup': `scp -P ${DEPLOY_PORT} ./backend/.env.production ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/current/backend`,
      'post-deploy': `cd ${DEPLOY_PATH}/current && DEPLOY_PATH=${DEPLOY_PATH} ./deploy.sh`
    },
  },
};
