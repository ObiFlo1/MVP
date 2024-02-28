import express from "express";
import pg from "pg";
import cors from "cors";

const app = express();
const PORT = 7001;
const { Pool } = pg;
const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "todoapp",
});

app.use(cors());
app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM users`);
    // console.log(result);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
  }
});

// app.get("/users/:id", async (req, res) => {
//   try {
//     const name = req.params;
//     const result = await pool.query(`SELECT * FROM users WHERE id  `)
//   }
// });

// {name} = req.body

app.post("/users", async (req, res) => {
  const { name } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO users (name) VALUES($1) RETURNING *`,
      [name]
    );
    res.json({ name: result.rows });
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});
