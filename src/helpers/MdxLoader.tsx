import path from "path";
import fs, { readdirSync } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import { MDXRemoteSerializeResult } from "next-mdx-remote";


/**
 * MDX serialize settings and plugins. Add your favorite markdown plugins here.
 */
const mdxOptions: any = {
	remarkPlugins: [remarkGfm],
	rehypePlugins: [],
	format: "mdx",
};


/**
 * Contains frontmatter data after parsing an .mdx file.
 *
 * @prop {string} `slug` The .mdx file name with ".mdx" stripped, which is used as the url
 * @prop {{[key: string]: any}} `data` List of meta data at the top of the .mdx file, wrapped in "---"
 * @prop {matter.Input} `content` The raw markdown content to be parsed
 * @prop {string} `mdxPath` The relative path to the .mdx file, needed for relative images
 */
export interface MatterData {
	slug: string;
	content: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
	data: { [key: string]: any };
	mdxPath: string;
};

/**
 * Returns a list of all exjobbs .mdx files as frontmatter objects.
 *
 * @param {string} `folderPath` Path to the /content/folder/ with .mdx files
 * @return {MatterData[]}
 */
export async function fetchAllFiles(folderPath: string): Promise<MatterData[]> {
	const fileNames = fetchFilesRecursive(path.join("./public", folderPath))
		.filter((file) => file.endsWith('mdx')) // Filter mdx files
		.map((file) => file.split(folderPath)[1]); // Strip absolute path

	// Read every file and extract frontmatter data and markdown content
	const matterObjects = await Promise.all(
		fileNames.map(async fileName => {
			const slug = path.basename(fileName).replace(".mdx", "");
			const mdxPath = path.join(folderPath, fileName);

			// Read the file and extract frontmatter
			const fileContents = fs.readFileSync(path.join("./public", mdxPath), "utf8");

			const content = await serialize(fileContents, {
				mdxOptions,
				parseFrontmatter: true
			});
			const data = content.frontmatter;

			return {
				slug,
				data,
				content,
				mdxPath,
			};
		})
	);

	return matterObjects;
};

/**
 * Validates frontmatter data using a schema. The .mdx data must match the given interface.
 */
export function parseFrontmatter<Type>(schema: any, data: Type, mdxPath: string): Type {
	const result = schema.safeParse(data);
	if (result.success) {
		return result.data;
	}
	else {
		const issues = result.error.issues.map((issue: any) => {
			return `- ${issue.path} (${issue.message})`;
		})
		const messages = [mdxPath, ...issues];
		throw new Error(messages.join("\n"));
	}
}


/** Searches all subfolders and flattens files */
function fetchFilesRecursive(dir: string): string[] {
	const dirents = readdirSync(dir, { withFileTypes: true });
	const files = dirents.map((dirent: any) => {
		const res = path.resolve(dir, dirent.name);
		return dirent.isDirectory() ? fetchFilesRecursive(res) : res;
	});
	return Array.prototype.concat(...files);
}
