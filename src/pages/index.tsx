import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>ImmVis</title>
			</Head>

			<main className="home">
				<div className="home-vision">
					<div className="home-vision-grid">
						<div className="col-span-1">
							<h3 className="text-xl font-thin my-0">Immersive Visualization</h3>
							<h1 className="text-6xl mt-4 mb-8">Insert catchphrase</h1>
							<p className="text-lg leading-8">Welcome to the immersive visualizations team at Linköping University , where we take your ... to a whole new level! (Here to show the key message / unique selling point of our work as a team)</p>
						</div>
						<div className="col-span-1">
							<Image width="500" height="2000" alt="image" src="https://picsum.photos/500/2000" />
						</div>
					</div>
				</div>

				<div className="home-highlight">
					<h2 className="mt-0">Highlighted project</h2>
					<div className="home-highlight-grid">
						<div className="col-span-1">
							<Image width="600" height="1300" alt="image" src="https://picsum.photos/600/1300" />
						</div>
						<div className="col-span-1">
							<h4>Project title</h4>
							<p>Project authors/participants name</p>
							<p>Project Summary (text place holder: With the CUAS project (Collaborative Unmanned Aircraft Systems) members of the group work with augmented reality to create efficient interaction methods for collaboration and navigation of unmanned aircrafts and drone)</p>
							<Link href="/projects" className="home-read-more">Read more</Link>
						</div>
					</div>
				</div>

				<div className="home-about">
					<h2 className="mt-0">About ImmVis</h2>
					<div className="columns-1 sm:columns-2">
						<p className="mt-0">The Immersive Visualization group is conducting research and development in a range of technologies to create an immersive and engaging visualization of data.</p>
						<p>The visualization of data is created with the help of large scale display systems, such as domes and stereoscopic viewing (3D), also including technologies such as Augmented and Virtual Reality (AR/VR).</p>
						<p>Part of the group is also C-tech, with technical director Erik Sundén, providing technical support and maintenance of the dome and related equipment and systems at Norrköping Visualization Center C.</p>
						<p>Our vision is to create systems and software that enable the user to feel immersed and deeply engaged with their content regardless of the type of devices or display system and interaction techniques being used.</p>
						<p>The goal is to make the technology as transparent as possible such that the user maintains focused on and work with their content and to minimize distracting factors of the technologies, hardware as well as software. It should feel as natural as possible to continue to work with the data and content even though the user change devices or systems for visualization.</p>
					</div>
				</div>
			</main>
		</>
	);
}
