import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import { GuideData, getAllGuides } from '@/helpers/GuideHelper';


function GuideItem({ post }: { post: GuideData }) {
  const { slug, data } = post;

  return (
    <Link href={`/guides/${post.slug}`} className="flex">
      <div className="guide-box">
        <Image width={512} height={256} alt={data.image} src={data.image} />
        <p role="name">{data.name}</p>
        <p role="description">{data.description}</p>
      </div>
    </Link>
  );
}

export function GuideList({ guides }: { guides: GuideData[] }) {
  return (
    <div className="guide-list">
      {guides.map(post =>
        <GuideItem key={post.slug} post={post} />
      )}
    </div>
  );
}

export default function GuidePage({ guides }: { guides: GuideData[] }) {
  return (
    <>
      <Head>
        <title>Guides - ImmVis</title>
      </Head>

      <main className="guide-page">
        <h1>Guides</h1>
        <p>Here is a list of guides that members of the group are working on. We are always been passionate about delving deep into various subjects, with a keen focus on integrating immersive and applied visualization techniques. To aid others in their journey, several members have taken the initiative to create comprehensive guides on a myriad of intriguing topics.</p>

        <hr />

        <GuideList guides={guides} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      guides: await getAllGuides()
    }
  };
}
