import Head from "next/head";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { FundingData, getAllFundings, getFunding } from '@/helpers/FundingHelper';


// Individual funding page component
export default function Funding({ data, content, mdxPath }: FundingData) {
	return (
		<>
			<Head>
				<title>{`${data.name} - ImmVis`}</title>
			</Head>

			<main className=''>
				<h1>{data.name}</h1>

				<ul className="m-5 p-5 bg-blue-100">
					<u>Name</u> <ul>{data.name}</ul>
					<u>Id</u> <ul>{data.id}</ul>
					<u>Grants</u> <ul>{data.grants?.join(", ")}</ul>
					<u>Image</u> <ul>{data.icon}</ul>
					<u>Link</u> <ul>{data.link}</ul>
				</ul>

				<div className="m-5 p-5 bg-red-100">
					<MDXRemote {...content} />
				</div>

				<hr />
				<Link href="/funding">Back</Link>
			</main>
		</>
	);
}


// List of paths to be statically generated
export async function getStaticPaths() {
	const fundings = await getAllFundings();
	return {
		paths: fundings.map(matter => ({
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
		props: await getFunding(params.slug)
	};
}
