import Head from "next/head"
import Link from "next/link";
import { ExjobbData, getAllExjobbs } from "@/helpers/ExjobbHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";


function ExjobbList({ exjobbs }: { exjobbs: ExjobbData[] }) {
	return (
		<div className="exjobb-list">
			{exjobbs.map((post) => (
				<ExjobbItem key={post.slug} post={post} />
			))}
		</div>
	);
}

function ExjobbItem({ post }: { post: ExjobbData }) {
	const { slug, data } = post;

	return (
		<Link href={`exjobbs/${slug}`} className="exjobb-box">
			<p role="name">
				{data.name}
			</p>
			<p role="description">
				{data.description}
			</p>

			{/* <p role="skills">Required skills</p> */}
			<div className="exjobb-box-details">
				<div className="exjobb-box-details-list">
					<div className="exjobb-box-details-info mr-3" title="The number of students for this exjobb">
						<FontAwesomeIcon icon={solidIcons.faUser} />
						{data.number_of_students}
					</div>

					<div className="exjobb-box-details-info" title="The date when the exjobb is to be carried out">
						<FontAwesomeIcon icon={solidIcons.faCalendarDays} />
						{data.period}
					</div>
				</div>

				<div className="exjobb-box-details-list">
					{data.skills?.map(skill =>
						<span key={skill} className="exjobb-box-details-tag">
							{skill}
						</span>
					)}
				</div>
			</div>
		</Link>
	);
}

export default function ExjobbPage({ exjobbs }: { exjobbs: ExjobbData[] }) {
	return (
		<>
			<Head>
				<title>Exjobbs - ImmVis</title>
			</Head>

			<main className="exjobb-page">
				<h1>Exjobb projects</h1>
				<p>
					Exjobb projects are 20-week final year projects for Master students of the Media Technology program that are research projects in which indiviudual students or a pair of students can work on concrete problems while being immersed in a specific problem domain. In addition to providing the ability to improve technical skills, they also require application of a solid research methodology and in many cases can be an opportunity for an exchange semester abroad.
				</p>

				<hr />

				<ExjobbList exjobbs={exjobbs} />
			</main>
		</>
	);
}

export async function getStaticProps() {
	return {
		props: {
			exjobbs: await getAllExjobbs()
		}
	};
}
