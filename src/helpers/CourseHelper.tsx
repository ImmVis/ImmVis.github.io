import z from "zod";
import path from "path";
import { MatterData, fetchAllFiles, parseFrontmatter } from "./MdxLoader";


// Content folder for course files
export const folderPath = "/content/courses/";


// Zod schema for frontmatter
const CourseMeta = z.object({
	name: z.string(),
	course_code: z.string(),
	contact: z.array(z.string()),
	link: z.string(),
	description: z.optional(z.string())
});

// Frontmatter variables at the top of the .mdx file
export type CourseMeta = z.infer<typeof CourseMeta>;

// Contains frontmatter data for an course .mdx file
export interface CourseData extends MatterData {
	data: CourseMeta;
};


// Returns matter data for all courses
export async function getAllCourses(): Promise<MatterData[]> {
	const matterList = await fetchAllFiles(path.join(".", folderPath));
	let list = matterList.map(matterData => validateData(matterData as CourseData));
	return list;
};

// Returns matter data for one course
export async function getCourse(slug: string): Promise<MatterData> {
	const course = await getAllCourses();
	const matterData = course.find(p => p.slug == slug);
	if (!matterData) {
		throw new Error(`Course not found: ${slug}`);
	}
	return validateData(matterData as CourseData);
};


// Final adjustments to mdx data
function validateData(matter: CourseData): CourseData {
	matter.data = parseFrontmatter<CourseMeta>(CourseMeta, matter.data, matter.mdxPath);
	return matter;
}
