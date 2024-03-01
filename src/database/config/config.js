require('dotenv').config();
const pg = require('pg');

const environment = process.env.NODE_ENV || "test";

const suffix = {
  prod: "",
  production: "",
  dev: "-dev",
  development: "-dev",
  test: "-test",
};

const options = {
  url: process.env.POSTGRES_URL_NO_SSL,
  host: process.env.HOSTNAME || process.env.POSTGRES_HOST || 'localhost',
  database: 
    `${process.env.POSTGRES_DATABASE || 'lexartlabs-db'}${suffix[environment] || suffix.test}`,
  username: process.env.POSTGRES_USER || 'root',
  password: process.env.POSTGRES_PASSWORD || 'password',
  dialectModule: pg,
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
    ssl: true,
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};