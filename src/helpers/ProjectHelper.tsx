import z from "zod";
import path from "path";
import { MatterData, fetchAllFiles, parseFrontmatter } from "./MdxLoader";
import { convertRelativePath } from "./PathUtils";


// Content folder for project files
export const folderPath = "/content/projects/";


// Zod schema for frontmatter
const Types = [ "research", "exhibition", "software", "other" ] as const;
const ProjectMeta = z.object({
  id: z.string(),
  name: z.string(),
  start_date: z.number().int(),
  end_date: z.optional(z.number().int()),
  type: z.optional(z.enum(Types)),
  description: z.string(),
  image: z.string(),
  homepage: z.optional(z.string()),
  people: z.array(z.string()),
  funding: z.array(z.string()),
  hidden: z.optional(z.boolean()),
});

// Frontmatter variables at the top of the .mdx file
export type ProjectMeta = z.infer<typeof ProjectMeta>;

// Contains frontmatter data for an project .mdx file
export interface ProjectData extends MatterData {
  data: ProjectMeta;
};


// Returns matter data for all projects
export async function getAllProjects(): Promise<MatterData[]> {
  const matterList = await fetchAllFiles(path.join(".", folderPath));
  let list = matterList.map(data => validateData(data as ProjectData));

  list.sort((a: ProjectData, b: ProjectData) => {
    const aEnd = a.data.end_date;
    const bEnd = b.data.end_date;

    // Ensure start_date exists
    if (a.data.start_date === undefined || b.data.start_date === undefined) {
      throw new Error("start_date is required");
    }

    // Missing end_date (ongoing project) takes precedence
    if (aEnd === undefined && bEnd !== undefined) return -1;
    if (aEnd !== undefined && bEnd === undefined) return 1;

    // Sort by end_date descending
    if (aEnd !== undefined && bEnd !== undefined) {
      const endDiff = bEnd - aEnd;
      if (endDiff !== 0) {
        return endDiff;
      }
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
};

// Returns matter data for one project
export async function getProject(slug: string): Promise<MatterData> {
  const project = await getAllProjects();
  const matterData = project.find(p => p.slug == slug);
  if (!matterData) {
    throw new Error(`Project not found: ${slug}`);
  }
  return validateData(matterData as ProjectData);
};


// Final adjustments to mdx data
function validateData(matter: ProjectData): ProjectData {
  matter.data = parseFrontmatter<ProjectMeta>(ProjectMeta, matter.data, matter.mdxPath);

  // Fix pathing for local images
  matter.data.image = convertRelativePath(matter.mdxPath, matter.data.image, "/dummy_image.png");

  return matter;
}
