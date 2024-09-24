import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { ProjectData, getAllProjects } from "@/helpers/ProjectHelper";
import { PersonnelData, getAllPersonnels } from "@/helpers/PersonnelHelper";


export default function Home({ projects, personnel }: { projects: ProjectData[], personnel: PersonnelData[] }) {
  const highlightedProjectId = "openspace";
  const project = projects.find(project => project.data.id == highlightedProjectId)!;

  const contributors = personnel
    .filter((person) => project.data.people.includes(person.data.id))
    .map((person) => person.data.name);

  return (
    <>
      <Head>
        <title>ImmVis</title>
      </Head>

      <main className="home">
        <div className="home-vision">
          <div className="home-vision-grid">
            <div className="col-span-1">
              <h1 className="text-6xl mt-4 mb-8">Immersive Visualization</h1>
              <p className="text-lg leading-8">
                Welcome to the immersive visualization team at Linköping
                University!
              </p>
            </div>
            <div className="col-span-1">
              <Image width="1000" height="1000" alt="image" src="https://visualiseringscenter.se/wp-content/uploads/2024/04/wadstromslabb_hero.webp"/>
            </div>
          </div>
        </div>

        <div className="home-highlight">
          <h2 className="mt-0">Highlighted project</h2>
          <div className="home-highlight-grid">
            <div className="col-span-1">
              <Image width="800" height="800" alt={project.data.image} src={project.data.image}/>
            </div>
            <div className="col-span-1">
              <h3>{project.data.name}</h3>
              <p>{contributors.join(", ")}</p>
              <p>{project.data.description}</p>
              <Link href={`/projects/${project.slug}`} className="home-read-more">
                Read more
              </Link>
            </div>
          </div>
        </div>

        <div className="home-about">
          <h2 className="mt-0">About ImmVis</h2>
          <div className="columns-1 sm:columns-2">
            <p className="mt-0">
              The Immersive Visualization group is conducting research and
              development in a range of technologies to create an immersive and
              engaging visualization of data.
            </p>
            <p>
              The visualization of data is created with the help of large scale
              display systems, such as domes and stereoscopic viewing (3D), also
              including technologies such as Augmented and Virtual Reality
              (AR/VR).
            </p>
            <p>
              Part of the group is also C-tech, with technical director Erik
              Sundén, providing technical support and maintenance of the dome
              and related equipment and systems at Norrköping Visualization
              Center C.
            </p>
            <p>
              Our vision is to create systems and software that enable the user
              to feel immersed and deeply engaged with their content regardless
              of the type of devices or display system and interaction
              techniques being used.
            </p>
            <p>
              The goal is to make the technology as transparent as possible such
              that the user maintains focused on and work with their content and
              to minimize distracting factors of the technologies, hardware as
              well as software. It should feel as natural as possible to
              continue to work with the data and content even though the user
              change devices or systems for visualization.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

// Static props used in the pre-render of this page
export async function getStaticProps({ params }: { params: { slug: string } }) {
  return {
    props: {
      projects: await getAllProjects(),
      personnel: await getAllPersonnels(),
    },
  };
}
