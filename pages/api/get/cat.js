import mysql from "mysql2/promise";

export default async function handler(req, res) {
  try {
    // Await the connection creation to ensure it's established before proceeding
    const connection = await mysql.createConnection({
      namedPlaceholders: true,
      host: "localhost", // Replace with your host
      user: "root", // Replace with your username
      password: "admin", // Replace with your password
      database: "arischiogatti", // Replace with your database name
    });

    // Execute the query and fetch a single row
    const [rows] = await connection.execute(
      "SELECT * FROM cats WHERE ID = :id",
      { id: req.query.id },
    );

    connection.end();

    let row = rows[0];

    // console.log(row);

    res.status(200).json({ row });
  } catch (error) {
    res.status(500).json(error);
  }
}
