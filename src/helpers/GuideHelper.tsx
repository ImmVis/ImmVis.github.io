import z from "zod";
import path from "path";
import { MatterData, fetchAllFiles, parseFrontmatter } from "./MdxLoader";
import { convertRelativePath } from "./PathUtils";


// Content folder for project files
export const folderPath = "/content/guides/";


// Zod schema for frontmatter
const GuideMeta = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
  homepage: z.optional(z.string()),
  people: z.array(z.string()),
  funding: z.array(z.string()),
  hidden: z.optional(z.boolean()),
});

// Frontmatter variables at the top of the .mdx file
export type GuideMeta = z.infer<typeof GuideMeta>;

// Contains frontmatter data for an guide .mdx file
export interface GuideData extends MatterData {
  data: GuideMeta;
};


// Returns matter data for all guides
export async function getAllGuides(): Promise<MatterData[]> {
  const matterList = await fetchAllFiles(path.join(".", folderPath));
  let list = matterList.map(data => validateData(data as GuideData));
  return list;
};

// Returns matter data for one guides
export async function getGuide(slug: string): Promise<MatterData> {
  const guide = await getAllGuides();
  const matterData = guide.find(p => p.slug == slug);
  if (!matterData) {
    throw new Error(`Guide not found: ${slug}`);
  }
  return validateData(matterData as GuideData);
};


// Final adjustments to mdx data
function validateData(matter: GuideData): GuideData {
  matter.data = parseFrontmatter<GuideMeta>(GuideMeta, matter.data, matter.mdxPath);

  // Fix pathing for local images
  matter.data.image = convertRelativePath(matter.mdxPath, matter.data.image, "/dummy_image.png");

  return matter;
}
