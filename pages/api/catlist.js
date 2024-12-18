import fs from "fs";
import path from "path";
export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "data", "catlist.json");

  try {
    const data = await fs.promises.readFile(filePath, "utf8");
    const jsonData = JSON.parse(data);

    res.status(200).json({ data: jsonData });
  } catch (error) {
    console.error("Error reading JSON file:", error);
    res.status(500).json({ error: "Error reading JSON file" });
  }
}
