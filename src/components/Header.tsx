import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";


function NavLink({ children, href }: { children: any, href: string }) {
	const router = useRouter();
	const ref = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		const anchor = ref.current as HTMLAnchorElement;

		anchor.classList.toggle("active", false);

		if (href == "/") {
			if (router.pathname == href) {
				anchor.classList.toggle("active", true);
			}
		}
		else if (router.pathname.startsWith(href)) {
			anchor.classList.toggle("active", true);
		}
	}, [router, href]);


	return (
		<Link className="header-tab" href={href} ref={ref} >
			<span className="header-tab-text">{children}</span>
		</Link>
	);
}


function Header() {
	return (
		<nav className="header-background">
			{/* <div className="header-content hidden w-full md:flex md:w-auto"> */}
			<div className="header-content flex w-full overflow-x-auto">
				<div className="header-group-brand">
					<NavLink href="/">
						<div className="flex items-center">
							{/* <Image className="invert mr-2" width={16} height={16} alt="ImmVis logo" src="/dummy_image.png" /> */}
							<span>ImmVis</span>
						</div>
					</NavLink>
				</div>

				<div className="header-group-link">
					{/* <NavLink href="/">Home</NavLink> */}
					<NavLink href="/projects">Projects</NavLink>
					<NavLink href="/personnel">Staff</NavLink>
					<NavLink href="/publications">Publications</NavLink>
					<NavLink href="/courses">Courses</NavLink>
					<NavLink href="/exjobbs">Exjobbs</NavLink>
					<NavLink href="/funding">Funding</NavLink>
				</div>

				<div className="header-group-sublink">
					{/* <NavLink href="/sv">SV</NavLink> */}
					<NavLink href="/about">About</NavLink>
					<NavLink href="/contact">Contact</NavLink>
				</div>
			</div>
		</nav>
	);
}

export default Header;
