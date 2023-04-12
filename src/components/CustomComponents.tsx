import path from "path";


// Convert relative image path to static (/public/content/.../)
export function convertRelativeImagePath(mdxPath: string, imagePath: string): string {
	const folderPath = path.dirname(mdxPath);
	if (imagePath) {

		// Allow outsourced images
		if (imagePath.startsWith("http")) {
			return imagePath;
		}

		// Convert relative to static
		if (!imagePath.includes("/content")) {
			const staticPath = path.join("/", folderPath, imagePath);
			return staticPath;
		}
	}

	return imagePath;
}

// export function makeCustomImageComponent(mdxPath: string) {
// 	return function ({ src, ...props }: JSX.IntrinsicElements["img"]) {
// 		// const imagePath = path.join("/", folderPath, src!);
// 		const imagePath = convertRelativeImagePath(mdxPath, src!)
// 		return (
// 			<img src={imagePath} {...props} alt={imagePath}></img>
// 		);
// 	}
// }


function CustomComponent({ title, description }: { title: string; description: string }) {
	return (
		<div className="border-solid bg-red-500">
			<p>Hello world</p>
			<p>Title: {title}</p>
			<p>Description: {description}</p>
		</div>
	);
}


function UserImage({ liuId }: { liuId: string }) {
	return (
		<p>IMAGE!!! {liuId}</p>
	);
}


export function getCustomComponents(mdxPath: string) {
	return {
		// img: makeCustomImageComponent(mdxPath),
	};
}