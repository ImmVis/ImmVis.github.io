import Head from 'next/head'
// import Link from "next/link";
import Image from "next/image";
import { FundingData, getAllFundings } from '@/helpers/FundingHelper';


export default function FundingList({ fundings }: { fundings: FundingData[] }) {
	return (
		<>
			<Head>
				<title>Funding - ImmVis</title>
			</Head>

			<main className="funding-list">
				<h1>Funding</h1>
				<p>Nisi veniam et nostrud mollit do adipisicing magna id sunt. Ea mollit cupidatat aliquip ipsum velit voluptate veniam. Aliqua non magna consequat exercitation officia duis est et sunt. Duis laborum sint ut velit et sunt consectetur voluptate proident cillum enim labore non.</p>

				<hr />

				<div className="funding-listing">
					{fundings.map((post) => (
						<FundingItem key={post.slug} post={post} />
					))}
				</div>
			</main>
		</>
	);
}


function FundingItem({ post }: { post: FundingData }) {
	const { slug, data } = post;

	return (
		<a href={data.link} className="funding-box" target="_blank">
			<Image width={512} height={512} alt={data.name} src={data.icon} />
			<span role="name">
				{data.name}
			</span>
		</a>
	);
}


export async function getStaticProps() {
	return {
		props: {
			fundings: await getAllFundings()
		}
	};
}
