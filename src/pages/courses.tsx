import Head from "next/head"
import Link from "next/link";
import { CourseData, getAllCourses } from "@/helpers/CourseHelper";


export default function CoursePage({ courses }: { courses: CourseData[] }) {
	return (
		<>
			<Head>
				<title>Courses - ImmVis</title>
			</Head>

			<main className="course-page">
				<h1>
					Courses
				</h1>
				<p>
					Our group is involved with a number of courses that are taught at Linköping University.  Many of these are embedded in the Masters program for Media Technology that has components for Scientific, Information, and Immersive Visualization in addition to teaching concepts for virtual reality.
				</p>

				<hr />

				<CourseList courses={courses} />
			</main>
		</>
	);
}


export function CourseList({ courses }: { courses: CourseData[] }) {
	return (
		<div className="course-list">
			{courses.map((post) => (
				<CourseItem key={post.slug} post={post} />
			))}
		</div>
	);
}


export function CourseItem({ post }: { post: CourseData }) {
	const { slug, data } = post;

	return (
		// <Link href={`courses/${slug}`} className="course-box">
		<a href={data.link} className="course-box">
			<p role="course-code">{data.course_code}</p>
			<p role="name">{data.name}</p>
			<p role="description">{data.description}</p>
		</a>
	);
}


export async function getStaticProps() {
	return {
		props: {
			courses: await getAllCourses()
		}
	};
}
