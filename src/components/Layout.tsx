import Header from "./Header";
import Footer from "./Footer";
import { Ubuntu } from "next/font/google";

const font = Ubuntu({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Layout({ children }: any) {
  return (
    <div className={`page-wrapper ${font.className}`}>
      <Header />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  );
}
