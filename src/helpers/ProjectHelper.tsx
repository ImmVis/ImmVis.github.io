import z from "zod";
import path from "path";
import { MatterData, fetchAllFiles, parseFrontmatter } from "./MdxLoader";
import { convertRelativeImagePath } from "./ImageUtils";


/** Content folder for project files */
export const folderPath = "/content/projects/";


/** Zod schema for frontmatter */
const ProjectMeta = z.object({
	id: z.string(),
	name: z.string(),
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
	return matterList.map(matterData =>
		validateData(matterData as ProjectData)
	);
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
	matter.data.image = convertRelativeImagePath(matter.mdxPath, matter.data.image, "/dummy_image.gif");

	return matter;
}
