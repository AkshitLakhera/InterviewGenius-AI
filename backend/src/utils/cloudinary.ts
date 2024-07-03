import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View Credentials' below to copy your API secret
});

const uploadCloudianry = async (localfilePath: string) => {
  try {
    if (!localfilePath) return null;
    const response = await cloudinary.uploader.upload(localfilePath, {
      resource_type: "auto",
    });
    // File has been uploaded successfully
    console.log("File has been uploaded on cloudinary", response.url);
    // Returning response to url
    return response;
  } catch (error) {
    fs.unlinkSync(localfilePath); //remove the local saved temproary file as upload operation get failed
    return null;
  }
};
export { uploadCloudianry };
