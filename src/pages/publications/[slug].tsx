import Head from "next/head";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { getCustomComponents } from "@/components/CustomComponents"
import { PublicationData, getAllPublications, getPublication } from '@/helpers/PublicationHelper';


// Individual publication page component
export default function Publication({ data, content, mdxPath }: PublicationData) {
	return (
		<>
			<Head>
				<title>{`${data.title} - ImmVis`}</title>
			</Head>

			<main className=''>
				<h1>{data.title}</h1>

				<ul className="m-5 p-5 bg-blue-100">
					<u>Title</u> <ul>{data.title}</ul>
					<u>Authors</u> <ul>{data.authors}</ul>
					<u>Liu_authors</u> <ul>{data.liu_authors}</ul>
					<u>Venue</u> <ul>{data.venue}</ul>
					<u>Year</u> <ul>{data.year}</ul>
					<u>Date</u> <ul>{data.date}</ul>
					<u>Doi</u> <ul>{data.doi}</ul>
					<u>Pdf</u> <ul>{data.pdf}</ul>
					<u>Bib</u> <ul>{data.bib}</ul>
					<u>Thumbnail</u> <ul>{data.thumbnail}</ul>
					<u>Tags</u> <ul>{data.tags}</ul>
				</ul>

				<div className="m-5 p-5 bg-red-100">
					<MDXRemote {...content} components={getCustomComponents(mdxPath)} />
				</div>

				<hr />
				<Link href="/publications">Back</Link>
			</main>
		</>
	);
}


// List of paths to be statically generated
export async function getStaticPaths() {
	const publications = await getAllPublications();
	return {
		paths: publications.map(matter => ({
			params: {
				slug: matter.slug
			}
		})),
		fallback: false
	};
}

// Static props used in the pre-render of this page
export async function getStaticProps({ params }: { params: { slug: string; } }) {
	return {
		props: await getPublication(params.slug)
	};
}
