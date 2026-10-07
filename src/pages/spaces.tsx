import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { SpaceData, getAllSpaces } from "@/helpers/SpaceHelper";

function SpaceItem({ post }: { post: SpaceData }) {
  const { slug, data } = post;

  return (
    <Link href={`/spaces/${post.slug}`} className="flex">
      <div className="project-box">
        <Image width={512} height={256} alt={data.image} src={data.image} />
        <p role="name">{data.name}</p>
        <p role="brief">{data.start_date}</p>
        <p role="description" className="line-clamp-5">
          {data.description}
        </p>
      </div>
    </Link>
  );
}

export function SpaceList({ spaces }: { spaces: SpaceData[] }) {
  // Remove hidden pages
  spaces = spaces.filter((page) => !page.data.hidden);

  return (
    <div className="project-list">
      {spaces.map((post) => (
        <SpaceItem key={post.slug} post={post} />
      ))}
    </div>
  );
}

export default function SpacePage({ spaces }: { spaces: SpaceData[] }) {
  return (
    <>
      <Head>
        <title>Spaces - ImmVis</title>
      </Head>

      <main className="project-page">
        <h1>Spaces</h1>
        <p>
          This page showcases our state-of-the-art interactive laboratories and
          public exhibition spaces. These environments bridge the gap between
          complex research data and immersive visual exploration.
        </p>

        <hr />

        <SpaceList spaces={spaces.filter((space) => !space.data.external)} />

        <h1>Partnering spaces</h1>
        <p>
          This page showcases our state-of-the-art interactive laboratories and
          public exhibition spaces. These environments bridge the gap between
          complex research data and immersive visual exploration.
        </p>

        <hr />

        <SpaceList spaces={spaces.filter((space) => !!space.data.external)} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      spaces: await getAllSpaces(),
    },
  };
}
