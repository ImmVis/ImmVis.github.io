import z from "zod";
import path from "path";
import { MatterData, fetchAllFiles, parseFrontmatter } from "./MdxLoader";
import { convertRelativeImagePath } from "./ImageUtils";


// Content folder for publication files
export const folderPath = "/content/publications/";


// Zod schema for frontmatter
const PublicationMeta = z.object({
  title: z.string(),
  authors: z.string(),
  liu_authors: z.array(z.string()),
  projects: z.optional(z.array(z.string())),
  venue: z.string(),
  year: z.number(),
  date: z.string(),
  doi: z.optional(z.string()),
  pdf: z.optional(z.string()),
  bib: z.optional(z.string()),
  code: z.optional(z.string()),
  video: z.optional(z.string()),
  thumbnail: z.string(),
  annotation: z.optional(z.string()),
});

// Frontmatter variables at the top of the .mdx file
export type PublicationMeta = z.infer<typeof PublicationMeta>;

// Contains frontmatter data for an publication .mdx file
export interface PublicationData extends MatterData {
  data: PublicationMeta;
};


// Returns matter data for all publications
export async function getAllPublications(): Promise<PublicationData[]> {
  const matterList = await fetchAllFiles(path.join(".", folderPath));
  let list = matterList.map(matterData => validateData(matterData as PublicationData));
  list.sort((a,b) => a.data.date > b.data.date ? -1 : 1);
  return list;
};

// Returns matter data for one publication
export async function getPublication(slug: string): Promise<MatterData> {
  const publication = await getAllPublications();
  const matterData = publication.find(p => p.slug == slug);
  if (!matterData) {
    throw new Error(`Publication not found: ${slug}`);
  }
  return validateData(matterData as PublicationData);
};


// Final adjustments to mdx data
function validateData(matter: PublicationData): PublicationData {
  matter.data = parseFrontmatter<PublicationMeta>(PublicationMeta, matter.data, matter.mdxPath);

  // Fix pathing for local images
  matter.data.thumbnail = convertRelativeImagePath(matter.mdxPath, matter.data.thumbnail, "/dummy_image.png");

  return matter;
}
