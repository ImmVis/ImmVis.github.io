import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { PersonnelData, getAllPersonnels } from "@/helpers/PersonnelHelper";

function PersonnelItem({ post }: { post: PersonnelData }) {
  const { slug, data } = post;

  return (
    <Link href={`personnel/${slug}`} className="personnel-box">
      <Image width={512} height={512} alt={data.name} src={data.image!} />
      <span role="name">{data.name}</span>
      <span role="position">{data.position.join(", ")}</span>
    </Link>
  );
}

export default function PersonnelList({
  personnel,
}: {
  personnel: PersonnelData[];
}) {
  personnel = personnel.filter((person) => !person.data.external);

  return (
    <>
      <Head>
        <title>People - ImmVis</title>
      </Head>

      <main className="personnel-list">
        <h1>People</h1>
        <p>
          Here is a list of the researchers, developers, and technical staff
          that make up the Immersive and Applied Visualization team. Each
          profile provides contact information and links to research projects
          and academic publications that the team member is currently affiliated
          with.
        </p>
        <hr />

        <div className="personnel-listing">
          {personnel.map((post) => (
            <PersonnelItem key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      personnel: await getAllPersonnels(),
    },
  };
}
