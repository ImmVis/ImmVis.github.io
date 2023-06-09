import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import { PublicationData, getAllPublications } from '@/helpers/PublicationHelper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";


export default function PublicationPage({ publications }: { publications: PublicationData[] }) {
	return (
		<>
			<Head>
				<title>Publications - ImmVis</title>
			</Head>

			<main className="publication-page">
				<h1>Publications</h1>
				<p>Nostrud nisi consequat elit ex laborum culpa ipsum. Est sit amet voluptate et aute amet consectetur nulla occaecat do reprehenderit et consequat. Velit nisi id fugiat veniam exercitation fugiat est mollit sunt cillum eu. Consectetur pariatur pariatur fugiat laborum id magna sit laborum. Elit aute ullamco commodo nisi veniam laborum quis veniam ex mollit duis qui culpa. Sit minim ut minim ut commodo adipisicing fugiat cupidatat commodo eu adipisicing ad elit. Ex occaecat sunt elit id do occaecat excepteur nisi.</p>

				<PublicationList publications={publications} />
			</main>
		</>
	);
}


export function PublicationList({ publications }: { publications: PublicationData[] }) {
	return (
		<div className="publication-list">
			{publications.map((post) => (
				<PublicationItem key={post.slug} post={post} />
			))}
		</div>
	);
}


export function PublicationItem({ post }: { post: PublicationData }) {
	const { slug, data } = post;

	return (
		<div className="publication-box">
			<Image width={512} height={512} alt={data.thumbnail} src={data.thumbnail} />
			<div>
				<p role="title">{data.title}</p>
				<p><i>{data.venue}, {data.year}</i></p>
				<p><a href={data.doi}>doi:{data.doi}</a></p>
				<div className="publication-box-links">
					<a href={data.pdf} target="_blank">
						<FontAwesomeIcon icon={solidIcons.faArchive} />
						<span>Paper (PDF)</span>
					</a>
					<a href={data.bib} target="_blank">
						<FontAwesomeIcon icon={solidIcons.faFeather} />
						<span>BibTex</span>
					</a>
					<a href={data.code} target="_blank">
						<FontAwesomeIcon icon={solidIcons.faCode} />
						<span>Source</span>
					</a>
					<a href={data.video} target="_blank">
						<FontAwesomeIcon icon={solidIcons.faVideo} />
						<span>Video</span>
					</a>
				</div>
			</div>
		</div>
	);
}


export async function getStaticProps() {
	return {
		props: {
			publications: await getAllPublications()
		}
	};
}
