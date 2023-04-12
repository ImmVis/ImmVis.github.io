import Head from 'next/head'
import Link from "next/link";
import { CourseData, getAllCourses } from '@/helpers/CourseHelper';


export default function CourseList({ courses }: { courses: CourseData[] }) {
	return (
		<>
			<Head>
				<title>Courses - ImmVis</title>
			</Head>

			<main>
				<h1>Latest courses</h1>
				<hr/>

				{courses.map((post) => (
					<CourseItem key={post.slug} post={post} />
				))}

				<hr/>
				<Link href="/">Back</Link>
			</main>
		</>
	);
}


function CourseItem({ post }: { post: CourseData }) {
	const { slug, data } = post;

	return (
		<Link href={`courses/${slug}`} className="block border-solid m-4 p-4">
			<p>{data.name}</p>
		</Link>
	);
}


export async function getStaticProps() {
	return {
		props: {
			courses: await getAllCourses()
		}
	};
}
