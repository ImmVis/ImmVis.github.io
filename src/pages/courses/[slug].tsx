import Head from "next/head";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { CourseData, getAllCourses, getCourse } from '@/helpers/CourseHelper';


// Individual course page component
export default function Course({ data, content, mdxPath }: CourseData) {
	return (
		<>
			<Head>
				<title>{`${data.name} - ImmVis`}</title>
			</Head>

			<main className=''>
				<h1>{data.name}</h1>

				<ul className="m-5 p-5 bg-blue-100">
					<u>Name</u> <ul>{data.name}</ul>
					<u>Course_code</u> <ul>{data.course_code}</ul>
					<u>Contact</u> <ul>{data.contact.join(', ')}</ul>
					<u>Link</u> <ul>{data.link}</ul>
				</ul>

				<div className="m-5 p-5 bg-red-100">
					<MDXRemote {...content} />
				</div>

				<hr />
				<Link href="/courses">Back</Link>
			</main>
		</>
	);
}


// List of paths to be statically generated
export async function getStaticPaths() {
	const courses = await getAllCourses();
	return {
		paths: courses.map(matter => ({
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
		props: await getCourse(params.slug)
	};
}
