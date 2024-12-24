import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  try {
    const connection = await mysql.createConnection({
      host: "localhost", // Replace with your host
      user: "root", // Replace with your username
      password: "admin", // Replace with your password
      database: "arischiogatti", // Replace with your database name
    });

    const [rows] = await connection.execute("SELECT * FROM cats");

    connection.end();

    // console.log(rows);

    res.status(200).json({ rows });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
