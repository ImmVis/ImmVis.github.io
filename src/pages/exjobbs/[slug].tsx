import Head from "next/head";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { getCustomComponents } from "@/components/CustomComponents"
import { ExjobbData, getAllExjobbs, getExjobb } from '@/helpers/ExjobbHelper';


// Individual exjobb page component
export default function Exjobb({ data, content, mdxPath }: ExjobbData) {
	return (
		<>
			<Head>
				<title>{`${data.name} - ImmVis`}</title>
			</Head>

			<main className=''>
				<h1>{data.name}</h1>

				<ul className="m-5 p-5 bg-blue-100">
					<u>Name</u> <ul>{data.name}</ul>
					<u>Location</u> <ul>{data.location}</ul>
					<u>Number_of_students</u> <ul>{data.number_of_students}</ul>
					<u>Contact</u> <ul>{data.contact.join(', ')}</ul>
				</ul>

				<div className="m-5 p-5 bg-red-100">
					<MDXRemote {...content} components={getCustomComponents(mdxPath)} />
				</div>

				<hr />
				<Link href="/exjobbs">Back</Link>
			</main>
		</>
	);
}


// List of paths to be statically generated
export async function getStaticPaths() {
	const exjobbs = await getAllExjobbs();
	return {
		paths: exjobbs.map(matter => ({
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
		props: await getExjobb(params.slug)
	};
}
