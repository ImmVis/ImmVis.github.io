import path from "path";
import fs from "fs";


// Convert relative path to static (/public/content/.../)
export function convertRelativePath(mdxPath: string, filePath?: string, defaultPath: string = ""): string {
  const folderPath = path.dirname(mdxPath);
  if (filePath) {
    // Allow outsourced images
    if (filePath.startsWith("http")) {
      return filePath;
    }

    // Convert relative to static
    if (!filePath.includes("/content")) {
      const staticPath = path.join("/", folderPath, filePath);
      if (fs.existsSync(path.join("public/", staticPath))) {
        return staticPath;
      }
    }

    // Check if image is valid
    if (fs.existsSync(path.join("public/", filePath))) {
      return filePath;
    }
  }

  // Default image
  return defaultPath;
}
