import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import { PersonnelData, getAllPersonnels } from "@/helpers/PersonnelHelper";


export default function PersonnelList({ personnel }: { personnel: PersonnelData[] }) {
	return (
		<>
			<Head>
				<title>Staff - ImmVis</title>
			</Head>

			<main className="personnel-list">
				<h1>Staff</h1>
				<p>Ullamco laboris mollit quis cupidatat qui exercitation Lorem cupidatat. Consequat minim minim dolor nulla minim pariatur. Eiusmod voluptate duis qui in elit nulla. Amet est labore adipisicing ad.</p>

				<div className="personnel-listing">
					{personnel.map((post) => (
						<PersonnelItem key={post.slug} post={post} />
					))}
				</div>
			</main>
		</>
	);
}


function PersonnelItem({ post }: { post: PersonnelData }) {
	const { slug, data } = post;

	return (
		<Link href={`personnel/${slug}`} className="personnel-box">
			<Image width={512} height={512} alt={data.name} src={data.image!} />
			<span role="name">
				{data.name}
			</span>
			<span role="position">
				{data.position.join(", ")}
			</span>
		</Link>
	);
}


export async function getStaticProps() {
	return {
		props: {
			personnel: await getAllPersonnels()
		}
	};
}
