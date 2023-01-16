import { Pool } from "pg";
require("dotenv").config();

const connectionString = process.env.DB_URL;
const db = new Pool({ connectionString });

export default db;
