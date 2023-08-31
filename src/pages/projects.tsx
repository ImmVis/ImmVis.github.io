import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import { ProjectData, getAllProjects } from '@/helpers/ProjectHelper';
// import { PersonnelData, getAllPersonnels } from '@/helpers/PersonnelHelper';
// import MiniPersonnelList from '@/components/MiniPersonnelList';


export default function ProjectPage({ projects }: { projects: ProjectData[] }) {
	return (
		<>
			<Head>
				<title>Projects - ImmVis</title>
			</Head>

			<main className="project-page">
				<h1>Projects</h1>
				<p>Here is a list of projects and activities that the group are undertaking. These can involved larger software development projects or small, contained, research projects and everything in between. Each project on this webpage contains more information to show who worked on it, who funded the project, and additionally provides supplemental material that explains what that project is about, links to software archives, etc.</p>

				<hr />

				<ProjectList projects={projects} />
			</main>
		</>
	);
}


export function ProjectList({ projects }: { projects: ProjectData[] }) {
	return (
		<div className="project-list">
			{projects.map(post =>
				<ProjectItem key={post.slug} post={post} />
			)}
		</div>
	);
}


export function ProjectItem({ post }: { post: ProjectData }) {
	const { slug, data } = post;

	return (
		<Link href={`/projects/${post.slug}`} className="flex">
			<div className="project-box">
				<Image width={512} height={256} alt={data.image} src={data.image} />
				<p role="name">{data.name}</p>
				<p role="brief">{data.start_date} &mdash; {data.end_date ? data.end_date : "ongoing"}</p>
				<p role="description">{data.description}</p>

				{/* <Link role="read-more" href={`/projects/${slug}`}>Read more</Link> */}
				{/* <p role="read-more">Read more</p> */}
			</div>
		</Link>
	);
}


export async function getStaticProps() {
	return {
		props: {
			projects: await getAllProjects(),
			// personnel: await getAllPersonnels(),
		}
	};
}
