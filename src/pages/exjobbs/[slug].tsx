import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { ExjobbData, getAllExjobbs, getExjobb } from '@/helpers/ExjobbHelper';
import { PersonnelData, getAllPersonnels } from "@/helpers/PersonnelHelper";
import MiniPersonnelList from "@/components/MiniPersonnelList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";


// Individual exjobb page component
export default function Exjobb({ exjobb, personnel }: { exjobb: ExjobbData, personnel: PersonnelData[] }) {
  const { data, content, mdxPath } = exjobb;

  return (
    <>
      <Head>
        <title>{`${data.name} - ImmVis`}</title>
      </Head>

      <main className="exjobb-single">

        <div className="exjobb-single-profile">

          <div className="panel">
            <p role="name">{data.name}</p>

            <div className="content">
              <div>
                <h3>Info</h3>
                <div className="info">
                  <div title="The number of students for this exjobb">
                    <FontAwesomeIcon icon={solidIcons.faUser} />
                    {data.number_of_students}
                  </div>

                  <div title="The date when the exjobb is to be carried out">
                    <FontAwesomeIcon icon={solidIcons.faCalendarDays} />
                    {data.period}
                  </div>

                  <div title="The physical location where the exjobb is to be carried out">
                    <FontAwesomeIcon icon={solidIcons.faLocationDot} />
                    {data.location}
                  </div>
                </div>
              </div>

              <div>
                <h3>Contact</h3>
                <MiniPersonnelList personnel={personnel} liuidList={data.contact} />
              </div>
            </div>
          </div>
        </div>

        {/* Markdown content */}
        <div className="exjobb-single-markdown mdx-content">
          <MDXRemote {...content} />
        </div>
      </main>
    </>
  );
}


// List of paths to be statically generated
export async function getStaticPaths() {
  const exjobbs = await getAllExjobbs();
  return {
    paths: exjobbs.map(matter => ({
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
      exjobb: await getExjobb(params.slug),
      personnel: await getAllPersonnels(),
    }
  };
}
