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
					Latest courses
				</h1>
				<p>
					Do eu exercitation ea id ullamco dolor in non pariatur consequat. Ea voluptate aliquip fugiat magna aliquip fugiat incididunt proident esse nulla velit tempor cillum dolor. Qui ad ipsum sint reprehenderit quis esse ipsum. Minim aliquip anim nulla pariatur id ut Lorem do dolor amet nostrud irure. Duis ipsum tempor enim quis consectetur aliqua do in nostrud fugiat nostrud cillum aliqua. Pariatur est aliquip eu sit elit veniam. Aliqua et excepteur eiusmod proident velit excepteur excepteur deserunt magna pariatur.
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
			<p role="description">Adipisicing nisi nisi velit exercitation aute excepteur consequat aliqua velit. Sint excepteur ad elit Lorem velit irure laborum ad reprehenderit anim eiusmod exercitation proident nulla. Excepteur commodo Lorem eu incididunt.</p>
			{/* <p role="skills">Required skills</p> */}
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
