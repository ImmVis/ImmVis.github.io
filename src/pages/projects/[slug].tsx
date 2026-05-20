import Head from "next/head";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import MiniPersonnelList from "@/components/MiniPersonnelList";
import MiniFundingList from "@/components/MiniFundingList";
import { mdxComponents } from "@/components/mdxComponents";
import { FundingData, getAllFundings } from "@/helpers/FundingHelper";
import { PersonnelData, getAllPersonnels } from "@/helpers/PersonnelHelper";
import { PublicationData, getAllPublications } from "@/helpers/PublicationHelper";
import { ProjectData, getAllProjects, getProject } from "@/helpers/ProjectHelper";
import { getAllSpaces, SpaceData } from "@/helpers/SpaceHelper";
import { getAllGuides, GuideData } from "@/helpers/GuideHelper";
import { getAllInitiatives, InitiativeData } from "@/helpers/InitiativeHelper";
import { PublicationList } from "../publications";
import { SpaceList } from "../spaces";
import { GuideList } from "../guides";
import { InitiativeList } from "../initiatives";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

// Individual project page component
export default function Project({
  project,
  fundings,
  personnel,
  publications,
  guides,
  spaces,
  initiatives,
}: {
  project: ProjectData;
  fundings: FundingData[];
  personnel: PersonnelData[];
  publications: PublicationData[];
  guides: GuideData[];
  spaces: SpaceData[];
  initiatives: InitiativeData[];
}) {
  const { data, content, mdxPath } = project;

  const myPublications = publications.filter((publication) =>
    publication.data.projects?.includes(data.id),
  );

  const myGuides = guides.filter((guide) =>
    guide.data.projects?.includes(data.id),
  );

  const mySpaces = spaces?.filter((space) =>
    data.spaces?.includes(space.data.id),
  );

  const myInitiatives = initiatives?.filter((initiative) =>
    data.initiatives?.includes(initiative.data.id),
  );

  return (
    <>
      <Head>
        <title>{`${data.name} - ImmVis`}</title>
      </Head>

      <main className="project-single">
        <div className="project-single-profile">
          {/* Left project info */}
          <div className="left">
            <Image
              width={512}
              height={512}
              quality={100}
              alt={data.image!}
              src={data.image!}
            />
          </div>

          {/* Right project info */}
          <div className="right">
            <p role="name">{data.name}</p>

            {/* Links */}
            <div className="contributors">
              <div>
                <h3>Contributors</h3>
                <MiniPersonnelList
                  personnel={personnel}
                  liuidList={data.people}
                />
              </div>
              <div>
                {data.funding.length > 0 && (
                  <>
                    <h3>Funding</h3>
                    <MiniFundingList
                      fundings={fundings}
                      fundingIdList={data.funding}
                    />
                  </>
                )}
              </div>
              <div>
                {data.homepage && (
                  <>
                    <h3>Homepage</h3>
                    <div className="homepage">
                      <FontAwesomeIcon icon={faLink} fixedWidth />
                      <a href={data.homepage}>{data.homepage}</a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Markdown content */}
        <div className="project-single-markdown mdx-content">
          <MDXRemote {...content} components={mdxComponents} />

          {/* Publications */}
          {myPublications.length > 0 && (
            <>
              <hr />
              <h1>Publications</h1>
              <PublicationList publications={myPublications} />
            </>
          )}

          {/* Guides */}
          {myGuides.length > 0 && (
            <>
              <hr />
              <h1>Guides</h1>
              <GuideList guides={myGuides} />
            </>
          )}

          {/* Spaces */}
          {data.spaces && data.spaces.length > 0 && (
            <>
              <hr />
              <h1>Spaces</h1>
              <SpaceList spaces={mySpaces} />
            </>
          )}

          {/* Initiatives */}
          {data.initiatives && data.initiatives.length > 0 && (
            <>
              <hr />
              <h1>Initiatives</h1>
              <InitiativeList initiatives={myInitiatives} />
            </>
          )}
        </div>
      </main>
    </>
  );
}

// List of paths to be statically generated
export async function getStaticPaths() {
  const projects = await getAllProjects();
  return {
    paths: projects.map((matter) => ({
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
      project: await getProject(params.slug),
      fundings: await getAllFundings(),
      personnel: await getAllPersonnels(),
      publications: await getAllPublications(),
      guides: await getAllGuides(),
      spaces: await getAllSpaces(),
      initiatives: await getAllInitiatives(),
    },
  };
}
