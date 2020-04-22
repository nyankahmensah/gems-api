module.exports = {
  apps: [
    {
      name: "gmes-api",
      script: "src/index.js",
      args: "one two",
      instances: "max",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production",
        DATABASE_URI: "mongodb://localhost:27017/gmes",
        PORT: 5000,
        JWT_SECRET_KEY:
          "908u9y7gf382fho3487hf98o28l3igydeihof32uyugklhf3iogy2fuh2398o87gy3fi2up9h8ogy3f2p",
        FILE_DIRECTORY: "/home/pfz_user/.gmes"
      }
    }
  ],

  deploy: {
    production: {
      user: "node",
      host: "212.83.163.1",
      ref: "origin/master",
      repo: "git@github.com:repo.git",
      path: "/var/www/production",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production"
    }
  }
};
