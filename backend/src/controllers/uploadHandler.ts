import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { uploadCloudianry } from "../utils/cloudinary";
// handler code
export const uploadResume = async (req: Request, res: Response) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ Error: "File not found " });
  }
  // Save  the uploaded file tempororarly
  const filePath = path.join("/public", "tmp", file.originalname);
  // upload  file to cloudinary
  const cloudinaryResponse = await uploadCloudianry(filePath);
  if (!cloudinaryResponse) {
    return res.status(500).json({ error: "failed  to upload to cloudianry" });
  }
  // call python script to process the file
};
