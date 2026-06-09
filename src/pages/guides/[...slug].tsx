import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { MDXRemote } from "next-mdx-remote";
import { GuideData, getAllGuides, getGuide } from "@/helpers/GuideHelper";
import { FundingData, getAllFundings } from "@/helpers/FundingHelper";
import { PersonnelData, getAllPersonnels } from "@/helpers/PersonnelHelper";
import MiniPersonnelList from "@/components/MiniPersonnelList";
import MiniFundingList from "@/components/MiniFundingList";
import { mdxComponents } from "@/components/mdxComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import TableOfContents from "@/components/TableOfContents";

// Individual guide page component
export default function Guide({
  guides,
  guide,
  fundings,
  personnel,
}: {
  guides: GuideData[];
  guide: GuideData;
  fundings: FundingData[];
  personnel: PersonnelData[];
}) {
  const { data, content, mdxPath } = guide;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${data.name} - ImmVis`}</title>
      </Head>

      <main className="guide-single">
        <div className="guide-single-profile">
          {/* Left guide info */}
          <div className="left">
            <Image
              width={512}
              height={512}
              quality={100}
              alt={data.image!}
              src={data.image!}
            />
          </div>

          {/* Right guide info */}
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
                    <FontAwesomeIcon icon={solidIcons.faLink} fixedWidth />
                    <a href={data.homepage}>{data.homepage}</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table of contents (nested guides and in-page headers) */}
        <TableOfContents guides={guides} guide={guide} />

        {/* Markdown content */}
        <div className="guide-single-markdown mdx-content">
          <MDXRemote {...content} components={mdxComponents} />
        </div>
      </main>
    </>
  );
}

// List of paths to be statically generated
export async function getStaticPaths() {
  const guides = await getAllGuides();
  return {
    paths: guides.map((matter) => ({
      params: {
        slug: matter.slug.split("/"),
      },
    })),
    fallback: false,
  };
}

// Static props used in the pre-render of this page
export async function getStaticProps({
  params,
}: {
  params: { slug: string[] };
}) {
  return {
    props: {
      guides: await getAllGuides(),
      guide: await getGuide(params.slug.join("/")),
      fundings: await getAllFundings(),
      personnel: await getAllPersonnels(),
    },
  };
}
