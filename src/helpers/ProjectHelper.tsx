import z from "zod";
import path from "path";
import { MatterData, fetchAllFiles, parseFrontmatter } from "./MdxLoader";
import { convertRelativeImagePath } from "./ImageUtils";


/** Content folder for project files */
export const folderPath = "/content/projects/";


/** Zod schema for frontmatter */
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
});

/** Frontmatter variables at the top of the .mdx file */
export type ProjectMeta = z.infer<typeof ProjectMeta>;

/** Contains frontmatter data for an project .mdx file */
export interface ProjectData extends MatterData {
	data: ProjectMeta;
}


/** Returns matter data for all projects */
export async function getAllProjects(): Promise<MatterData[]> {
	const matterList = await fetchAllFiles(path.join(".", folderPath));
	let list = matterList.map(data => validateData(data as ProjectData));

	list.sort(function (a,b) {
		// Sorts by whether either a or b has an end_date. If both or neither have an end_date
		// the return value is 0, otherwise the one that has an end_date gets the direction
		const sortByEndDate = function (a: ProjectData, b: ProjectData) {
			if (a.data.end_date === undefined) {
				if (b.data.end_date === undefined) {
					return 0;
				}
				else {
					return -1;
				}
			}
			else {
				if (b.data.end_date === undefined) {
					return 1;
				}
				else {
					return 0;
				}
			}
		};

		const sortByStartDate =
			(a: ProjectData, b: ProjectData) => a.data.start_date - b.data.start_date;

		const sortByName =
			(a: ProjectData, b: ProjectData) => a.data.name > b.data.name;


		return sortByEndDate(a, b) || sortByStartDate(a, b) || sortByName(a, b);
	});

	return list;
};

/** Returns matter data for one project */
export async function getProject(slug: string): Promise<MatterData> {
	const project = await getAllProjects();
	const matterData = project.find(p => p.slug == slug);
	if (!matterData) { throw new Error(`Project not found: ${slug}`); }
	return validateData(matterData as ProjectData);
};


/** Final adjustments to mdx data */
function validateData(matter: ProjectData): ProjectData {
	// Parse frontmatter and perform type checks
	matter.data = parseFrontmatter<ProjectMeta>(ProjectMeta, matter.data, matter.mdxPath);

	// Fix pathing for local images
	matter.data.image = convertRelativeImagePath(matter.mdxPath, matter.data.image, "/dummy_image.png");

	return matter;
}
