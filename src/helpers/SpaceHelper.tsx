import z from "zod";
import path from "path";
import { MatterData, fetchAllFiles, parseFrontmatter } from "./MdxLoader";
import { convertRelativePath } from "./PathUtils";

// Content folder for space files
export const folderPath = "/content/spaces/";

// Zod schema for frontmatter
const SpaceMeta = z.object({
  id: z.string(),
  name: z.string(),
  start_date: z.number().int(),
  description: z.string(),
  image: z.string(),
  homepage: z.optional(z.string()),
  people: z.array(z.string()),
  funding: z.array(z.string()),
  hidden: z.optional(z.boolean()),
});

// Frontmatter variables at the top of the .mdx file
export type SpaceMeta = z.infer<typeof SpaceMeta>;

// Contains frontmatter data for an space .mdx file
export interface SpaceData extends MatterData {
  data: SpaceMeta;
}

// Returns matter data for all spaces
export async function getAllSpaces(): Promise<MatterData[]> {
  const matterList = await fetchAllFiles(path.join(".", folderPath));
  let list = matterList.map((data) => validateData(data as SpaceData));

  list.sort((a: SpaceData, b: SpaceData) => {
    // Ensure start_date exists
    if (a.data.start_date === undefined || b.data.start_date === undefined) {
      throw new Error("start_date is required");
    }

    // Sort by start_date descending
    const startDiff = b.data.start_date - a.data.start_date;
    if (startDiff !== 0) {
      return startDiff;
    }

    // Sort by name ascending
    return a.data.name.localeCompare(b.data.name);
  });

  return list;
}

// Returns matter data for one space
export async function getSpace(slug: string): Promise<MatterData> {
  const space = await getAllSpaces();
  const matterData = space.find((p) => p.slug == slug);
  if (!matterData) {
    throw new Error(`Space not found: ${slug}`);
  }
  return validateData(matterData as SpaceData);
}

// Final adjustments to mdx data
function validateData(matter: SpaceData): SpaceData {
  matter.data = parseFrontmatter<SpaceMeta>(
    SpaceMeta,
    matter.data,
    matter.mdxPath,
  );

  // Fix pathing for local images
  matter.data.image = convertRelativePath(
    matter.mdxPath,
    matter.data.image,
    "/dummy_image.png",
  );

  return matter;
}
