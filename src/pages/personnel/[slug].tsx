import Head from "next/head";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { PersonnelData, getAllPersonnels, getPersonnel } from "@/helpers/PersonnelHelper";
import { PublicationData, getAllPublications } from "@/helpers/PublicationHelper";
import { getCustomComponents } from "@/components/CustomComponents";
import SkillList from "@/components/SkillList";
import SocialList from "@/components/SocialList";
import PublicationList from "../publications";


// Individual personnel page component
export default function Personnel({ personnel, publications }: { personnel: PersonnelData, publications: PublicationData[] }) {
	const { data, content, mdxPath } = personnel;
	const { email, phone, address, orcid } = data.contact_info || {};
	const webpage = data.personal_webpage;

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

						{/* <p>
							Id ad eiusmod qui non deserunt aliqua et ipsum voluptate reprehenderit dolor enim excepteur. Sint eiusmod dolor adipisicing ullamco qui commodo in laborum mollit.
						</p> */}

						<div className="flex flex-row items-center mb-3">
							<span className="text-lg font-bold mr-4">Contact</span>
						</div>

						{email && <p className="my-1">Email: <a href={`mailto:${email}`}>{email}</a></p>}
						{phone && <p className="my-1">Phone: <a href={`tel:${phone}`}>{phone}</a></p>}
						{address && <p className="my-1">Address: {address}</p>}
						{orcid && <p className="my-1">Orcid: <a href={`https://orcid.org/${orcid}`}>{orcid}</a></p>}
						{webpage && <p className="my-1">Webpage: <a href={data.personal_webpage}>{webpage}</a></p>}

						{/* Socials */}
						<div className="mt-8">
							<SocialList social={data.social} />
						</div>

						{/* <div className="">
							<p className="text-xl my-2">Skills</p>
							<SkillList skills={data.skills} />
						</div> */}

						{/* <p>Click the skill tags to find others with similar skills in the team</p> */}
					</div>
				</div>

				{/* Markdown content */}
				<div className="personnel-single-markdown mdx-content">
					{/* {JSON.stringify(content)} */}
					<MDXRemote {...content} components={getCustomComponents(mdxPath)} />
				</div>

				{/* Publications */}
				{myPublications.length > 0 &&
					<PublicationList publications={myPublications} />
				}
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
			publications: await getAllPublications(),
		}
	};
}
