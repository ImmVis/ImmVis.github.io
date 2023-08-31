import z from "zod";
import path from "path";
import { MatterData, fetchAllFiles, parseFrontmatter } from "./MdxLoader";
import { convertRelativePath } from "./PathUtils";


// Content folder for personnel files
export const folderPath = "/content/personnel/";


// Zod schema for frontmatter
const PersonnelMeta = z.object({
  id: z.string(),
  name: z.string(),
  image: z.optional(z.string()),
  position: z.array(z.string()),
  contact_info: z.optional(z.object({
    email: z.optional(z.string()),
    phone: z.optional(z.string()),
    address: z.optional(z.string()),
    orcid: z.optional(z.string()),
  })),
  personal_webpage: z.optional(z.string()),
  social: z.optional(z.any()),
  skills: z.optional(z.array(z.string())),
});

// Frontmatter variables at the top of the .mdx file
export type PersonnelMeta = z.infer<typeof PersonnelMeta>;

// Contains frontmatter data for an personnel .mdx file
export interface PersonnelData extends MatterData {
  data: PersonnelMeta;
};


// Returns matter data for all personnels
export async function getAllPersonnels(): Promise<MatterData[]> {
  const matterList = await fetchAllFiles(path.join(".", folderPath));
  let list = matterList.map(matterData => validateData(matterData as PersonnelData));
  return list;
};

// Returns matter data for one personnel
export async function getPersonnel(slug: string): Promise<MatterData> {
  const personnel = await getAllPersonnels();
  const matterData = personnel.find(p => p.slug == slug);
  if (!matterData) {
    throw new Error(`Personnel not found: ${slug}`);
  }
  return validateData(matterData as PersonnelData);
};


// Final adjustments to mdx data
function validateData(matter: PersonnelData): PersonnelData {
  matter.data = parseFrontmatter<PersonnelMeta>(PersonnelMeta, matter.data, matter.mdxPath);

  // Fix pathing for local images
  matter.data.image = convertRelativePath(matter.mdxPath, matter.data.image, "/dummy_person.png");

  return matter;
}
