import z from "zod";
import path from "path";
import { MatterData, fetchAllFiles, parseFrontmatter } from "./MdxLoader";
import { convertRelativeImagePath } from "./ImageUtils";


// Content folder for funding files
export const folderPath = "/content/fundings/";


// Zod schema for frontmatter
const FundingMeta = z.object({
	id: z.string(),
	name: z.string(),
	icon: z.string(),
	grants: z.optional(z.array(z.string())),
	link: z.string(),
});

// Frontmatter variables at the top of the .mdx file
export type FundingMeta = z.infer<typeof FundingMeta>;

// Contains frontmatter data for an funding .mdx file
export interface FundingData extends MatterData {
	data: FundingMeta;
};


// Returns matter data for all fundings
export async function getAllFundings(): Promise<MatterData[]> {
	const matterList = await fetchAllFiles(path.join(".", folderPath));
	let list = matterList.map(matterData => validateData(matterData as FundingData));
	return list;
};

// Returns matter data for one funding
export async function getFunding(slug: string): Promise<MatterData> {
	const funding = await getAllFundings();
	const matterData = funding.find(p => p.slug == slug);
	if (!matterData) {
		throw new Error(`Funding not found: ${slug}`);
	}
	return validateData(matterData as FundingData);
};


// Final adjustments to mdx data
function validateData(matter: FundingData): FundingData {
	matter.data = parseFrontmatter<FundingMeta>(FundingMeta, matter.data, matter.mdxPath);

	// Fix pathing for local images
	matter.data.icon = convertRelativeImagePath(matter.mdxPath, matter.data.icon, "/dummy_image.png");

	return matter;
}
