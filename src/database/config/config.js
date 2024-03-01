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
  url: process.env.POSTGRES_URL,
  host: process.env.HOSTNAME || process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT || '3306',
  database: 
    `${process.env.POSTGRES_DATABASE || 'lexartlabs-db'}${suffix[environment] || suffix.test}`,
  username: process.env.POSTGRES_USER || 'root',
  password: process.env.POSTGRES_PASSWORD || 'password',
  dialectModule: pg,
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
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