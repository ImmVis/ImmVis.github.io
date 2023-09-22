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
  funding: z.array(z.string())
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

  list.sort(function (a,b) {
    // Sorts by whether either a or b has an end_date. If both or neither have an end_date
    // the return value is 0, otherwise the one that has an end_date gets the direction
    const sortByEndDate = function (a: ProjectData, b: ProjectData) {
      // If a or b both have a value or both do not, they are considered equal
      if (a.data.end_date === undefined && b.data.end_date === undefined ||
          a.data.end_date !== undefined && b.data.end_date !== undefined)
      {
        return 0;
      }

      if (a.data.end_date === undefined) {
        // a doesn't have a date, there b needs to
        console.assert(b.data.end_date !== undefined);
        return -1;
      }
      else {
        console.assert(b.data.end_date === undefined);
        return 1;
      }
    };

    const sortByStartDate =
      (a: ProjectData, b: ProjectData) => a.data.start_date - b.data.start_date;

    const sortByName =
      (a: ProjectData, b: ProjectData) => a.data.name > b.data.name ? 1 : -1;

    // Try one sorting method after another until we either run out of methods or we find
    // the first that does not return equality
    let res = sortByEndDate(a, b);
    if (res !== 0) {
      return res;
    }

    res = sortByStartDate(a, b);
    if (res !== 0) {
      return res;
    }

    res = sortByName(a, b);
    return res;
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
