import Head from "next/head";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import MiniFundingList from "@/components/MiniFundingList";
import { mdxComponents } from "@/components/mdxComponents";
import { FundingData, getAllFundings } from "@/helpers/FundingHelper";
import { ProjectData, getAllProjects } from "@/helpers/ProjectHelper";
import { getAllSpaces, getSpace, SpaceData } from "@/helpers/SpaceHelper";
import { getAllGuides, GuideData } from "@/helpers/GuideHelper";
import { GuideList } from "../guides";
import { ProjectList } from "../projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

// Individual space page component
export default function Space({
  space,
  fundings,
  projects,
  guides,
}: {
  space: SpaceData;
  fundings: FundingData[];
  projects: ProjectData[];
  guides: GuideData[];
}) {
  const { data, content } = space;

  const myProjects = projects.filter((project) =>
    project.data.spaces?.includes(data.id),
  );

  const myGuides = guides.filter((guide) =>
    guide.data.spaces?.includes(data.id),
  );

  return (
    <>
      <Head>
        <title>{`${data.name} - ImmVis`}</title>
      </Head>

      <main className="project-single">
        <div className="project-single-profile">
          {/* Left space info */}
          <div className="left">
            <Image
              width={512}
              height={512}
              quality={100}
              alt={data.image!}
              src={data.image!}
            />
          </div>

          {/* Right space info */}
          <div className="right">
            <p role="name">{data.name}</p>

            {/* Links */}
            <div className="contributors">
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

          {/* Projects */}
          {myProjects.length > 0 && (
            <>
              <hr />
              <h1>Projects</h1>
              <ProjectList projects={myProjects} />
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
        </div>
      </main>
    </>
  );
}

// List of paths to be statically generated
export async function getStaticPaths() {
  const spaces = await getAllSpaces();
  return {
    paths: spaces.map((matter) => ({
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
      space: await getSpace(params.slug),
      fundings: await getAllFundings(),
      projects: await getAllProjects(),
      guides: await getAllGuides(),
    },
  };
}
