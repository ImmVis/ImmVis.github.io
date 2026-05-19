import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import { InitiativeData, getAllInitiatives } from '@/helpers/InitiativeHelper';


function InitiativeItem({ post }: { post: InitiativeData }) {
  const { slug, data } = post;

  return (
    <Link href={`/initiatives/${post.slug}`} className="flex">
      <div className="project-box">
        <Image width={512} height={256} alt={data.image} src={data.image} />
        <p role="name">{data.name}</p>
        <p role="brief">{data.start_date}</p>
        <p role="description" className='line-clamp-5'>{data.description}</p>
      </div>
    </Link>
  );
}

export function InitiativeList({ initiatives }: { initiatives: InitiativeData[] }) {
  // Remove hidden pages
  initiatives = initiatives.filter(page => !page.data.hidden);

  return (
    <div className="project-list">
      {initiatives.map(post =>
        <InitiativeItem key={post.slug} post={post} />
      )}
    </div>
  );
}

export default function InitiativePage({ initiatives }: { initiatives: InitiativeData[] }) {
  return (
    <>
      <Head>
        <title>Initiatives - ImmVis</title>
      </Head>

      <main className="project-page">
        <h1>Initiatives</h1>
        <p>Here is a list of initiatives and activities that the group are undertaking. These can involved larger software development initiatives or small, contained, research initiatives and everything in between. Each initiative on this webpage contains more information to show who worked on it, who funded the initiative, and additionally provides supplemental material that explains what that initiative is about, links to software archives, etc.</p>

        <hr />

        <InitiativeList initiatives={initiatives} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      initiatives: await getAllInitiatives()
    }
  };
}
