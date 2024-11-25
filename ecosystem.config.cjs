module.exports = {
  apps: [
    {
      name: "ips-node-ts-boiler-plate",
      script: "./dist/server.js", // Use the built file
      watch: false, // Watching should be disabled for built files in production
      env: {
        NODE_ENV: "development",
        PORT: 5020,
        DB_HOST: "localhost",
        DB_USERNAME: "root",
        DB_PASSWORD: "ips12345",
        DB_NAME: "digital_platform",
        JWT_SECRET: "your-local-jwt-secret-key",
        ADMINEMAIL: "admin@example.com",
        ADMINPASS: "your-password",
        FRONTEND_URL: "http://localhost:3000",
        LOG_LEVEL: "debug",
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 5020,
        DB_HOST: "192.168.1.23",
        DB_USERNAME: "maceratauniversity",
        DB_PASSWORD: "production-password",
        DB_NAME: "maceratauniversity",
        JWT_SECRET: "your-production-jwt-secret-key",
        ADMINEMAIL: "admin@example.com",
        ADMINPASS: "your-production-password",
        FRONTEND_URL: "http://production-frontend.com",
        LOG_LEVEL: "error",
      },
      error_file: "./logs/err.log", // Path for error logs
      out_file: "./logs/out.log", // Path for output logs
      log_date_format: "YYYY-MM-DD HH:mm:ss", // Format for log timestamps
      merge_logs: true, // Combine logs from multiple instances
      max_memory_restart: "1G", // Restart if memory exceeds 1GB
      instances: 1, // Number of instances (use 0 for all available CPUs)
      exec_mode: "fork", // Use fork mode (change to "cluster" for multiple instances)
    },
  ],
};
