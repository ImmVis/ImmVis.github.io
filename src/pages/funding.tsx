import Head from "next/head";
import Image from "next/image";
import { FundingData, getAllFundings } from "@/helpers/FundingHelper";

function FundingItem({ post }: { post: FundingData }) {
  const { data } = post;

  return (
    <a href={data.link} className="funding-box" target="_blank" title={data.name}>
      <Image width={512} height={512} alt={data.name} src={data.icon} />
      {/* <span role="name">{data.name}</span> */}
    </a>
  );
}

export default function FundingList({ fundings }: { fundings: FundingData[] }) {
  // Remove hidden pages
  fundings = fundings.filter((page) => !page.data.hidden);
  const featuredFundings = fundings.filter((page) => page.data.featured);
  const otherFundings = fundings.filter((page) => !page.data.featured);

  return (
    <>
      <Head>
        <title>Funding - ImmVis</title>
      </Head>

      <main className="funding-list">
        <h1>Main funding partners</h1>
        <p>
          Much of our foundational research, long-term initiatives, and core
          infrastructure are made possible through the generous, sustained
          support of our main funding partners.
        </p>

        <hr />

        <div className="funding-listing">
          {featuredFundings.map((post) => (
            <FundingItem key={post.slug} post={post} />
          ))}
        </div>

        <h1>Project Partners & Co-Funders</h1>
        <p>
          In addition to our core supporters, we collaborate with a diverse
          network of organizations, regional authorities, and industry partners
          who fund and co-create specific projects, exhibitions, and community
          initiatives.
        </p>

        <hr />

        <div className="funding-listing">
          {otherFundings.map((post) => (
            <FundingItem key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      fundings: await getAllFundings(),
    },
  };
}
