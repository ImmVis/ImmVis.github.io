import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import { PublicationData, getAllPublications } from '@/helpers/PublicationHelper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";


function PublicationItem({ post }: { post: PublicationData }) {
	const { slug, data } = post;

	return (
		<div className="publication-box">
			<Image width={512} height={512} alt={data.thumbnail} src={data.thumbnail} />
			<div className="flex-1">
				<p role="title">{data.title}</p>
				<p>{data.authors}</p>
				<p><i>{data.venue}, {data.year}</i></p>
				<p>
					{data.doi && (
						<a href={data.doi}>doi:{data.doi}</a>
					)}
				</p>
				<div className="publication-box-links">
					{data.pdf && (
						<a href={data.pdf} target="_blank">
							<FontAwesomeIcon icon={solidIcons.faArchive} />
							<span>Paper (PDF)</span>
						</a>
					)}
					{data.bib && (
						<a href={data.bib} target="_blank">
							<FontAwesomeIcon icon={solidIcons.faFeather} />
							<span>BibTex</span>
						</a>
					)}
					{data.code && (
						<a href={data.code} target="_blank">
							<FontAwesomeIcon icon={solidIcons.faCode} />
							<span>Source</span>
						</a>
					)}
					{data.video && (
						<a href={data.video} target="_blank">
							<FontAwesomeIcon icon={solidIcons.faVideo} />
							<span>Video</span>
						</a>
					)}
					{data.annotation && (
						<div>
							<FontAwesomeIcon icon={solidIcons.faTag} />
							<span>{data.annotation}</span>
						</div>
					)}
				</div>
			</div>
		</div>
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

export default function PublicationPage({ publications }: { publications: PublicationData[] }) {
	return (
		<>
			<Head>
				<title>Publications - ImmVis</title>
			</Head>

			<main className="publication-page">
				<h1>Publications</h1>
				<p>Here is a list of the academic publications that members of our group are involved in as co-authors.</p>

				<hr />

				<PublicationList publications={publications} />
			</main>
		</>
	);
}

export async function getStaticProps() {
	return {
		props: {
			publications: await getAllPublications()
		}
	};
}
