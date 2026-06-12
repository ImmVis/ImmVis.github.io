import Head from "next/head";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import MiniFundingList from "@/components/MiniFundingList";
import MiniPersonnelList from "@/components/MiniPersonnelList";
import { mdxComponents } from "@/components/mdxComponents";
import { getAllPersonnels, PersonnelData } from "@/helpers/PersonnelHelper";
import { FundingData, getAllFundings } from "@/helpers/FundingHelper";
import { ProjectData, getAllProjects } from "@/helpers/ProjectHelper";
import { getAllSpaces, SpaceData } from "@/helpers/SpaceHelper";
import { getAllInitiatives, getInitiative, InitiativeData } from "@/helpers/InitiativeHelper";
import { ProjectList } from "../projects";
import { SpaceList } from "../spaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

// Individual initiative page component
export default function Initiative({
  initiative,
  personnel,
  fundings,
  projects,
  spaces,
}: {
  initiative: InitiativeData;
  personnel: PersonnelData[];
  fundings: FundingData[];
  projects: ProjectData[];
  spaces: SpaceData[];
}) {
  const { data, content } = initiative;

  const myProjects = projects.filter((project) =>
    project.data.initiatives?.includes(data.id),
  );

  const mySpaces = spaces.filter((space) =>
    space.data.initiatives?.includes(data.id),
  );

  return (
    <>
      <Head>
        <title>{`${data.name} - ImmVis`}</title>
      </Head>

      <main className="initiative-single">
        <div className="initiative-single-profile">
          {/* Left initiative info */}
          <div className="left">
            <Image
              width={512}
              height={512}
              quality={100}
              alt={data.image!}
              src={data.image!}
            />
          </div>

          {/* Right initiative info */}
          <div className="right">
            <p role="name">{data.name}</p>

            {/* Links */}
            <div className="contributors">
              {data.people.length > 0 && (
                <div>
                  <h3>Contributors</h3>
                  <MiniPersonnelList
                    personnel={personnel}
                    liuidList={data.people}
                  />
                </div>
              )}
              {data.funding.length > 0 && (
                <div>
                  <h3>Funding</h3>
                  <MiniFundingList
                    fundings={fundings}
                    fundingIdList={data.funding}
                  />
                </div>
              )}
              {data.homepage && (
                <div>
                  <h3>Homepage</h3>
                  <div className="homepage">
                    <FontAwesomeIcon icon={faLink} fixedWidth />
                    <a href={data.homepage}>{data.homepage}</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Markdown content */}
        <div className="initiative-single-markdown mdx-content">
          <MDXRemote {...content} components={mdxComponents} />

          {/* Projects */}
          {/* {myProjects.length > 0 && (
            <>
              <hr />
              <h1>Projects</h1>
              <ProjectList projects={myProjects} />
            </>
          )} */}

          {/* Spaces */}
          {mySpaces.length > 0 && (
            <>
              <hr />
              <h1>Spaces</h1>
              <SpaceList spaces={mySpaces} />
            </>
          )}
        </div>
      </main>
    </>
  );
}

// List of paths to be statically generated
export async function getStaticPaths() {
  const initiatives = await getAllInitiatives();
  return {
    paths: initiatives.map((matter) => ({
      params: {
        slug: matter.slug,
      },
    })),
    fallback: false,
  };
}

// Static props used in the pre-render of this page
export async function getStaticProps({ params }: { params: { slug: string } }) {
  return {
    props: {
      initiative: await getInitiative(params.slug),
      personnel: await getAllPersonnels(),
      fundings: await getAllFundings(),
      projects: await getAllProjects(),
      spaces: await getAllSpaces(),
    },
  };
}
