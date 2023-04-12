import Header from "./Header";
import Footer from "./Footer";
import { Lato } from "next/font/google"


const font = Lato({ subsets: ["latin"], weight: "400" })


function Layout({ children }: any) {
	return (
		<div className={`page-wrapper ${font.className}`}>
			<Header />
			<main className="page-content">
				{children}
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
