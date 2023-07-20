import { Pool } from "pg";

const pool = new Pool({
  host: process.env.PG_DB_HOST,
  database: process.env.PG_DB_NAME,
  port: 5432,
  user: process.env.PG_DB_USER,
  password: process.env.PG_DB_PASSWORD,
});
