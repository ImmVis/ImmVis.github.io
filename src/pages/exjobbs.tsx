import Head from "next/head"
import Link from "next/link";
import { ExjobbData, getAllExjobbs } from "@/helpers/ExjobbHelper";
import SkillList from "@/components/SkillList";


export default function ExjobbList({ exjobbs }: { exjobbs: ExjobbData[] }) {
	return (
		<>
			<Head>
				<title>Exjobbs - ImmVis</title>
			</Head>

			<main className="exjobb-list">
				<h1>Latest exjobbs</h1>
				<hr />

				<div className="exjobb-listing">
					{exjobbs.map((post) => (
						<ExjobbItem key={post.slug} post={post} />
					))}
				</div>
			</main>
		</>
	);
}


function ExjobbItem({ post }: { post: ExjobbData }) {
	const { slug, data } = post;

	return (
		<Link href={`exjobbs/${slug}`} className="exjobb-box">
			<p role="name">{data.name}</p>
			<p role="description">Adipisicing nisi nisi velit exercitation aute excepteur consequat aliqua velit. Sint excepteur ad elit Lorem velit irure laborum ad reprehenderit anim eiusmod exercitation proident nulla. Excepteur commodo Lorem eu incididunt.</p>
			<p role="skills">Required skills</p>
			<SkillList skills={data.skills} />
		</Link>
	);
}


export async function getStaticProps() {
	return {
		props: {
			exjobbs: await getAllExjobbs()
		}
	};
}
