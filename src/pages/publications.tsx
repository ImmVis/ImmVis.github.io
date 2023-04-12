import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import { PublicationData, getAllPublications } from '@/helpers/PublicationHelper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";


export default function PublicationList({ publications }: { publications: PublicationData[] }) {
	return (
		<>
			<Head>
				<title>Publications - ImmVis</title>
			</Head>

			<main className="publication-list">
				<h1>Latest publications</h1>
				<hr />

				<div className="publication-listing">
					{publications.map((post) => (
						<PublicationItem key={post.slug} post={post} />
					))}
				</div>
			</main>
		</>
	);
}


function PublicationItem({ post }: { post: PublicationData }) {
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
