import Head from "next/head";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import SocialList from "@/components/SocialList";
import { mdxComponents } from "@/components/mdxComponents";
import { PersonnelData, getAllPersonnels, getPersonnel } from "@/helpers/PersonnelHelper";
import { PublicationData, getAllPublications } from "@/helpers/PublicationHelper";
import { ProjectData, getAllProjects } from "@/helpers/ProjectHelper";
import { getAllGuides, GuideData } from "@/helpers/GuideHelper";
import { ProjectList } from "../projects";
import { PublicationList } from "../publications";
import { GuideList } from "../guides";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLink, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faOrcid } from "@fortawesome/free-brands-svg-icons";
import { SpaceList } from "../spaces";
import { InitiativeList } from "../initiatives";
import { getAllInitiatives, InitiativeData } from "@/helpers/InitiativeHelper";
import { getAllSpaces, SpaceData } from "@/helpers/SpaceHelper";


// Individual personnel page component
export default function Personnel({
  personnel,
  projects,
  guides,
  publications,
  spaces,
  initiatives,
}: {
  personnel: PersonnelData,
  projects: ProjectData[],
  guides: GuideData[],
  publications: PublicationData[]
  spaces: SpaceData[]
  initiatives: InitiativeData[]
}) {
  const { data, content } = personnel;
  const { email, phone, address, orcid } = data.contact_info || {};
  const webpage = data.personal_webpage;

  const myProjects = projects.filter(project => project.data.people.includes(data.id));

  const myGuides = guides.filter(guide => guide.data.people.includes(data.id));

  const mySpaces = spaces.filter(space => space.data.people.includes(data.id));

  const myInitiatives = initiatives.filter(initiative => initiative.data.people.includes(data.id));

  const myPublications = publications.filter(publication =>
    publication.data.liu_authors.includes(data.id)
  );

  return (
    <>
      <Head>
        <title>{`${data.name} - ImmVis`}</title>
      </Head>

      <main className="personnel-single">
        <div className="personnel-single-profile">

          {/* Left profile info */}
          <div className="left">
            <Image width={512} height={512} quality={100} alt={data.image!} src={data.image!} />
          </div>

          {/* Right profile info */}
          <div className="right">
            <p role="position">{data.position.join(", ")}</p>
            <p role="name">{data.name}</p>

            <div className="contact">
              {email && (
                <>
                  <div title="Email">
                    <FontAwesomeIcon icon={faEnvelope} fixedWidth />
                  </div>
                  <div>
                    <a href={`mailto:${email}`}>{email}</a>
                  </div>
                </>
              )}
              {phone && (
                <>
                  <div title="Phone">
                    <FontAwesomeIcon icon={faPhone} fixedWidth />
                  </div>
                  <div>
                    <a href={`tel:${phone}`}>{phone}</a>
                  </div>
                </>
              )}
              {address && (
                <>
                  <div title="Address">
                    <FontAwesomeIcon icon={faLocationDot} fixedWidth />
                  </div>
                  <div>
                    <span>{address}</span>
                  </div>
                </>
              )}
              {orcid && (
                <>
                  <div title="ORCID">
                    <FontAwesomeIcon icon={faOrcid} fixedWidth />
                  </div>
                  <div>
                    <a href={`https://orcid.org/${orcid}`}>{orcid}</a>
                  </div>
                </>
              )}
              {webpage && (
                <>
                  <div title="Personal webpage">
                    <FontAwesomeIcon icon={faLink} fixedWidth />
                  </div>
                  <div>
                    <a href={data.personal_webpage}>{webpage}</a>
                  </div>
                </>
              )}
            </div>

            {/* Socials */}
            <div className="mt-8">
              <SocialList social={data.social} />
            </div>
          </div>
        </div>

        {/* Markdown content */}
        <div className="personnel-single-markdown mdx-content">
          <MDXRemote {...content} components={mdxComponents} />

          {/* Projects */}
          {myProjects.length > 0 &&
            <>
              <hr />
              <h1>Projects</h1>
              <ProjectList projects={myProjects} />
            </>
          }

          {/* Guides */}
          {myGuides.length > 0 &&
            <>
              <hr />
              <h1>Guides</h1>
              <GuideList guides={myGuides} />
            </>
          }

          {/* Publications */}
          {myPublications.length > 0 &&
            <>
              <hr />
              <h1>Publications</h1>
              <PublicationList publications={myPublications} />
            </>
          }

          {/* Spaces */}
          {mySpaces.length > 0 &&
            <>
              <hr />
              <h1>Spaces</h1>
              <SpaceList spaces={mySpaces} />
            </>
          }

          {/* Initiatives */}
          {myInitiatives.length > 0 &&
            <>
              <hr />
              <h1>Initiatives</h1>
              <InitiativeList initiatives={myInitiatives} />
            </>
          }
        </div>
      </main>
    </>
  );
}


// List of paths to be statically generated
export async function getStaticPaths() {
  const personnels = await getAllPersonnels();
  return {
    paths: personnels.map(matter => ({
      params: {
        slug: matter.slug
      }
    })),
    fallback: false
  };
}

// Static props used in the pre-render of this page
export async function getStaticProps({ params }: { params: { slug: string; } }) {
  return {
    props: {
      personnel: await getPersonnel(params.slug),
      projects: await getAllProjects(),
      guides: await getAllGuides(),
      publications: await getAllPublications(),
      spaces: await getAllSpaces(),
      initiatives: await getAllInitiatives(),
    }
  };
}
