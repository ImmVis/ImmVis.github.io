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
				<p>Nostrud nisi consequat elit ex laborum culpa ipsum. Est sit amet voluptate et aute amet consectetur nulla occaecat do reprehenderit et consequat. Velit nisi id fugiat veniam exercitation fugiat est mollit sunt cillum eu. Consectetur pariatur pariatur fugiat laborum id magna sit laborum. Elit aute ullamco commodo nisi veniam laborum quis veniam ex mollit duis qui culpa. Sit minim ut minim ut commodo adipisicing fugiat cupidatat commodo eu adipisicing ad elit. Ex occaecat sunt elit id do occaecat excepteur nisi.</p>

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
				<p role="brief">{data.date}</p>
				<p role="description">{data.description}</p>

				{/* <Link role="read-more" href={`/projects/${slug}`}>Read more</Link> */}
				<p role="read-more">Read more</p>
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
