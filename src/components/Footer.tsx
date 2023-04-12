import Link from "next/link";
import Image from "next/image"

function Footer() {
	return (
		<div className="footer">
			<div className="footer-content">

				<div className="footer-group-contact">
					<span className="footer-text-title">Contact</span>

					<div className="footer-contact">
						<Image width="64" height="64" alt="Peter Westerdahl" src="https://liu.se/-/media/employeeimages/33/employee_image_petwe33.jpeg" />
						<div className="flex flex-col">
							<span className="footer-text-bold">
								Peter Westerdahl
							</span>
							<span role="position">
								Senior Coordinator
							</span>
						</div>
					</div>
					<span role="phone">Mobile: +46 11 36 33 05</span>
					<span role="email">
						Email: <a href="mailto:peter.westerdahl@liu.se">peter.westerdahl@liu.se</a>
					</span>
					<br />

					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
						Send an email
					</button>
				</div>

				<div className="footer-group-address">
					<span role="empty">
						&nbsp;
					</span>
					<span role="title" className="footer-text-bold">
						Visiting address:
					</span>
					<span role="address">
						Linköpings universitet Campus Norrköping 601 74 Norrköping Sweden
					</span>
				</div>

				<div className="footer-group-jobs">
					<span className="footer-text-title">Jobs</span>
					<span>A list of jobs</span>
					<span>A list of jobs</span>
					<span>A list of jobs</span>
					<span>A list of jobs</span>

					<br />
					<Link href="/exjobbs">View All &gt;</Link>
				</div>

			</div>

			<div className="footer-legal">
				<span className="footer-legal-text">Copyright / Term of Use / Privacy / Integrity policy</span>
				<span className="footer-legal-text">© ImmVis</span>
			</div>
		</div>
	);
}

export default Footer;
