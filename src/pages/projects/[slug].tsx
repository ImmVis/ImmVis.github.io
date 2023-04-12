import Head from "next/head"
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { getCustomComponents } from "@/components/CustomComponents"
import { ProjectData, getAllProjects, getProject } from "@/helpers/ProjectHelper";
import { PersonnelData, getAllPersonnels } from "@/helpers/PersonnelHelper";
import { FundingData, getAllFundings } from "@/helpers/FundingHelper";
import MiniPersonnelList from "@/components/MiniPersonnelList";
import MiniFundingList from "@/components/MiniFundingList";


// Individual project page component
export default function Project({ project, personnel, fundings }: { project: ProjectData, personnel: PersonnelData[], fundings: FundingData[] }) {
	const { data, content, mdxPath } = project;

	return (
		<>
			<Head>
				<title>{`${data.name} - ImmVis`}</title>
			</Head>

			<main className="project-single">

				<div className="project-single-profile">

					{/* Left profile info */}
					<div className="left">
						<Image width={512} height={512} quality={100} alt={data.image!} src={data.image!} />
					</div>

					{/* Right profile info */}
					<div className="right">
						<p role="name">{data.name}</p>

						{/* People */}
						<div className="mt-8">
							<h3>Contributors</h3>
							<MiniPersonnelList personnel={personnel} liuidList={data.people} />
							{data.funding.length > 0 && <>
								<h3>Funding</h3>
								<MiniFundingList fundings={fundings} fundingIdList={data.funding} />
							</>}
							{data.homepage && <>
								<h3>Homepage</h3>
								<a href={data.homepage}>{data.homepage}</a>
							</>}
						</div>
					</div>
				</div>

				{/* Markdown content */}
				<div className="project-single-markdown mdx-content">
					{/* {JSON.stringify(content)} */}
					<MDXRemote {...content} components={getCustomComponents(mdxPath)} />
				</div>
			</main>
		</>
	);
}


// List of paths to be statically generated
export async function getStaticPaths() {
	const projects = await getAllProjects();
	return {
		paths: projects.map(matter => ({
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
		props: {
			project: await getProject(params.slug),
			personnel: await getAllPersonnels(),
			fundings: await getAllFundings(),
		}
	};
}
