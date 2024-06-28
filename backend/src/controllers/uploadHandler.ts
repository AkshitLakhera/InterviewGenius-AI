import { Request, Response } from "express";
import fs from "fs";
import path from "path";
// handler code
export const uploadResume = async (req: Request, res: Response) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ Error: "File not found " });
  }
  // Save  the uploaded file tempororarly
  const filePath = path.join(__dirname, "..", "uploads", file.originalname);
  await fs.promises.writeFile(filePath, file.buffer);
};
