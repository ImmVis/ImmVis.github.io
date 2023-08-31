import Head from "next/head";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { PersonnelData, getAllPersonnels, getPersonnel } from "@/helpers/PersonnelHelper";
import { PublicationData, getAllPublications } from "@/helpers/PublicationHelper";
import SocialList from "@/components/SocialList";
import { ProjectData, getAllProjects } from "@/helpers/ProjectHelper";
import { ProjectList } from "../projects";
import { PublicationList } from "../publications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import * as brandIcons from "@fortawesome/free-brands-svg-icons";


// Individual personnel page component
export default function Personnel({ personnel, projects, publications }: { personnel: PersonnelData, projects: ProjectData[], publications: PublicationData[] }) {
  const { data, content } = personnel;
  const { email, phone, address, orcid } = data.contact_info || {};
  const webpage = data.personal_webpage;

  const myProjects = projects.filter(project => project.data.people.includes(data.id));

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
                    <FontAwesomeIcon icon={solidIcons.faEnvelope} fixedWidth />
                  </div>
                  <div>
                    <a href={`mailto:${email}`}>{email}</a>
                  </div>
                </>
              )}
              {phone && (
                <>
                  <div title="Phone">
                    <FontAwesomeIcon icon={solidIcons.faPhone} fixedWidth />
                  </div>
                  <div>
                    <a href={`tel:${phone}`}>{phone}</a>
                  </div>
                </>
              )}
              {address && (
                <>
                  <div title="Address">
                    <FontAwesomeIcon icon={solidIcons.faLocationDot} fixedWidth />
                  </div>
                  <div>
                    <span>{address}</span>
                  </div>
                </>
              )}
              {orcid && (
                <>
                  <div title="ORCID">
                    <FontAwesomeIcon icon={brandIcons.faOrcid} fixedWidth />
                  </div>
                  <div>
                    <a href={`https://orcid.org/${orcid}`}>{orcid}</a>
                  </div>
                </>
              )}
              {webpage && (
                <>
                  <div title="Personal webpage">
                    <FontAwesomeIcon icon={solidIcons.faLink} fixedWidth />
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
          <MDXRemote {...content} />

          {/* Projects */}
          {myProjects.length > 0 &&
            <>
              <h1>Projects</h1>
              <ProjectList projects={myProjects} />
            </>
          }

          {/* Publications */}
          {myPublications.length > 0 &&
            <>
              <h1>Publications</h1>
              <PublicationList publications={myPublications} />
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
      publications: await getAllPublications(),
    }
  };
}
