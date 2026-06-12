import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

/* <Image> */

interface ImageProps {
  src: string;
  alt?: string;
  width?: string | number;
  float?: "left" | "right";
  className?: string;
}

const Image = ({ src, alt, width, float }: ImageProps) => {
  const floatClasses = {
    left: "clear-left float-left mr-4 mb-4",
    right: "clear-right float-right ml-4 mb-4",
  };

  return (
    <Zoom>
      <img
        src={useResolvedAssetSrc(src)}
        alt={alt || ""}
        title={alt || ""}
        style={
          width ? ({ "--img-width": width } as React.CSSProperties) : undefined
        }
        className={`w-full sm:w-[var(--img-width)] rounded ${float ? floatClasses[float] : "block mx-auto mb-4"}`}
      />
    </Zoom>
  );
};

/* <ImageButton> */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface ImageButtonProps {
  href: string;
  title: string;
  image: string;
  className?: string;
}

const ImageButton = ({
  href,
  title,
  image,
  className = "",
}: ImageButtonProps) => {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-4 border border-solid border-zinc-400 bg-white hover:bg-zinc-200 active:bg-zinc-300 m-2 p-2 pr-4 rounded shadow text-black
         ${className}`}
    >
      <img
        src={useResolvedAssetSrc(image)}
        alt=""
        className="w-8 h-8 object-cover [overflow-clip-margin:unset] rounded"
      />
      <span>{title}</span>
      <FontAwesomeIcon icon={faChevronRight} />
    </Link>
  );
};

/* Export */

const useResolvedAssetSrc = (src: string): string => {
  const router = useRouter();

  // Guard clause for empty paths or server-side rendering safely
  if (!src || !router) return src;

  const isRelative = !src.startsWith("http") && !src.startsWith("/");
  if (!isRelative) return src;

  const currentPath = router.asPath.split(/[?#]/)[0];
  const cleanFilename = src.startsWith("./") ? src.replace("./", "") : src;

  return `/content/${currentPath}/${cleanFilename}`
    .replace(/\/+$/, "") // Remove trailing slashes
    .replace(/\/\/+/g, "/"); // Collapse double slashes
};

export const mdxComponents = {
  Image: (props: any) => <Image {...props} />,
  ImageButton: (props: any) => <ImageButton {...props} />,
};
