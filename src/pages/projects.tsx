import Head from 'next/head'
import Link from "next/link";
import { ProjectData, getAllProjects } from '@/helpers/ProjectHelper';


export default function ProjectList({ projects }: { projects: ProjectData[] }) {
	return (
		<>
			<Head>
				<title>Projects - ImmVis</title>
			</Head>

			<main className=''>
				<h1>Latest projects</h1>
				<hr/>

				{projects.map((post) => (
					<ProjectItem key={post.slug} post={post} />
				))}
			</main>
		</>
	);
}


function ProjectItem({ post }: { post: ProjectData }) {
	const { slug, data } = post;

	return (
		<Link href={`projects/${slug}`} className="block border-solid p-4">
			<p>{data.name}</p>
		</Link>
	);
}


export async function getStaticProps() {
	return {
		props: {
			projects: await getAllProjects()
		}
	};
}
