import z from "zod";
import path from "path";
import { MatterData, fetchAllFiles, parseFrontmatter } from "./MdxLoader";
import { convertRelativeImagePath } from "./ImageUtils";


// Content folder for exjobb files
export const folderPath = "/content/exjobbs/";


// Zod schema for frontmatter
const ExjobbMeta = z.object({
	name: z.string(),
	description: z.string(),
	location: z.string(),
	period: z.string(),
	number_of_students: z.string(),
	contact: z.array(z.string()),
	finished: z.boolean(),
	skills: z.optional(z.array(z.string())),
});

// Frontmatter variables at the top of the .mdx file
export type ExjobbMeta = z.infer<typeof ExjobbMeta>;

// Contains frontmatter data for an exjobb .mdx file
export interface ExjobbData extends MatterData {
	data: ExjobbMeta;
}


// Returns matter data for all exjobbs
export async function getAllExjobbs(): Promise<MatterData[]> {
	const matterList = await fetchAllFiles(path.join(".", folderPath));
	let list = matterList.map(matterData => validateData(matterData as ExjobbData));
	return list;
};

// Returns matter data for one exjobb
export async function getExjobb(slug: string): Promise<MatterData> {
	const exjobb = await getAllExjobbs();
	const matterData = exjobb.find(p => p.slug == slug);
	if (!matterData) { throw new Error(`Exjobb not found: ${slug}`); }
	return validateData(matterData as ExjobbData);
};


// Final adjustments to mdx data
function validateData(matter: ExjobbData): ExjobbData {
	// Parse frontmatter and perform type checks
	matter.data = parseFrontmatter<ExjobbMeta>(ExjobbMeta, matter.data, matter.mdxPath);

	// Fix pathing for local images
	// matter.data.image = convertRelativeImagePath(matter.mdxPath, matter.data.image, "/dummy_image.png");

	return matter;
}
