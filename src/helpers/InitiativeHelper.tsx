import z from "zod";
import path from "path";
import { MatterData, fetchAllFiles, parseFrontmatter } from "./MdxLoader";
import { convertRelativePath } from "./PathUtils";

// Content folder for initiative files
export const folderPath = "/content/initiatives/";

// Zod schema for frontmatter
const InitiativeMeta = z.object({
  id: z.string(),
  name: z.string(),
  start_date: z.number().int(),
  description: z.string(),
  image: z.string(),
  homepage: z.optional(z.string()),
  funding: z.array(z.string()),
  hidden: z.optional(z.boolean()),
});

// Frontmatter variables at the top of the .mdx file
export type InitiativeMeta = z.infer<typeof InitiativeMeta>;

// Contains frontmatter data for an initiative .mdx file
export interface InitiativeData extends MatterData {
  data: InitiativeMeta;
}

// Returns matter data for all initiatives
export async function getAllInitiatives(): Promise<MatterData[]> {
  const matterList = await fetchAllFiles(path.join(".", folderPath));
  let list = matterList.map((data) => validateData(data as InitiativeData));

  list.sort((a: InitiativeData, b: InitiativeData) => {
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

// Returns matter data for one initiative
export async function getInitiative(slug: string): Promise<MatterData> {
  const initiative = await getAllInitiatives();
  const matterData = initiative.find((p) => p.slug == slug);
  if (!matterData) {
    throw new Error(`Initiative not found: ${slug}`);
  }
  return validateData(matterData as InitiativeData);
}

// Final adjustments to mdx data
function validateData(matter: InitiativeData): InitiativeData {
  matter.data = parseFrontmatter<InitiativeMeta>(
    InitiativeMeta,
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
