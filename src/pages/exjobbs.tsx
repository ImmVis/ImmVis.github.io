import Head from "next/head"
import Link from "next/link";
import { ExjobbData, getAllExjobbs } from "@/helpers/ExjobbHelper";
import SkillList from "@/components/SkillList";


export default function ExjobbPage({ exjobbs }: { exjobbs: ExjobbData[] }) {
	return (
		<>
			<Head>
				<title>Exjobbs - ImmVis</title>
			</Head>

			<main className="exjobb-page">
				<h1>
					Latest exjobbs
				</h1>
				<p>
					Do eu exercitation ea id ullamco dolor in non pariatur consequat. Ea voluptate aliquip fugiat magna aliquip fugiat incididunt proident esse nulla velit tempor cillum dolor. Qui ad ipsum sint reprehenderit quis esse ipsum. Minim aliquip anim nulla pariatur id ut Lorem do dolor amet nostrud irure. Duis ipsum tempor enim quis consectetur aliqua do in nostrud fugiat nostrud cillum aliqua. Pariatur est aliquip eu sit elit veniam. Aliqua et excepteur eiusmod proident velit excepteur excepteur deserunt magna pariatur.
				</p>

				<ExjobbList exjobbs={exjobbs} />
			</main>
		</>
	);
}


export function ExjobbList({ exjobbs }: { exjobbs: ExjobbData[] }) {
	return (
		<div className="exjobb-list">
			{exjobbs.map((post) => (
				<ExjobbItem key={post.slug} post={post} />
			))}
		</div>
	);
}


export function ExjobbItem({ post }: { post: ExjobbData }) {
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
