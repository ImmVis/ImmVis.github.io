import path from "path";
import fs from "fs";


// Convert relative image path to static (/public/content/.../)
export function convertRelativeImagePath(mdxPath: string, imagePath?: string, defaultImage: string = ""): string {
  const folderPath = path.dirname(mdxPath);
  if (imagePath) {
    // Allow outsourced images
    if (imagePath.startsWith("http")) {
      return imagePath;
    }

    // Convert relative to static
    if (!imagePath.includes("/content")) {
      const staticPath = path.join("/", folderPath, imagePath);
      if (fs.existsSync(path.join("public/", staticPath))) {
        return staticPath;
      }
    }

    // Check if image is valid
    if (fs.existsSync(path.join("public/", imagePath))) {
      return imagePath;
    }
  }

  // Default image
  return defaultImage;
}
