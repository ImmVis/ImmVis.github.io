import { useRouter } from "next/router";
import React from "react";

interface ImageProps {
	src: string;
	alt?: string;
	width?: string | number;
	float?: "left" | "right";
	className?: string;
}

const Image = ({ src, alt, width, float }: ImageProps) => {
	const router = useRouter();

	const currentPath = router.asPath.split(/[?#]/)[0];

	const isRelative = !src.startsWith("http") && !src.startsWith("/");
	const cleanFilename = src.startsWith("./") ? src.replace("./", "") : src;

	const finalSrc = isRelative
		? `/content${currentPath}/${cleanFilename}`.replace(/\/+$/, "")
		: src;

	const floatClasses = {
		left: "clear-left float-left mr-4 mb-4",
		right: "clear-right float-right ml-4 mb-4",
	};

	return (
		<img
			src={finalSrc}
			alt={alt || ""}
			title={alt || ""}
			style={
				width ? ({ "--img-width": width } as React.CSSProperties) : undefined
			}
			className={`w-full sm:w-[var(--img-width)] rounded ${float ? floatClasses[float] : "block mx-auto mb-4"}`}
		/>
	);
};

/* Export components */

export const mdxComponents = {
	Image: (props: any) => <Image {...props} />,
};
