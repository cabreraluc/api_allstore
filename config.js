const config = {
  appConfig: {
    port: process.env.PORT,
  },
  db: {
    port: process.env.DB_PORT,
    port: process.env.DB_HOST,
    port: process.env.DB_NAME,
  },
};

module.exports = config;
