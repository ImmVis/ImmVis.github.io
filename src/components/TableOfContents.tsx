import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { MatterData } from "@/helpers/MdxLoader";
import { TableOfContentsForPages, type TocItem } from "@/components/TableOfContentsForPages";
import TableOfContentsForHeadings from "@/components/TableOfContentsForHeadings";

type HeadingItem = {
  id: string;
  text: string;
  level: number;
};

// ============================================
// Moved from TableOfContents.tsx
// ============================================
export function getTableOfContent(
  allGuides: MatterData[],
  currentGuide: MatterData,
): TocItem[] {
  const tree: TocItem[] = [];
  const map: Record<string, TocItem> = {};

  // 1. Identify the root of the current guide (e.g., "fruits" if slug is "fruits/apple")
  const rootSegment = currentGuide.slug.split("/")[0];

  // 2. Filter guides that belong to the same root
  const relevantGuides = allGuides.filter((g) =>
    g.slug.startsWith(rootSegment),
  );

  // 3. Sort guides by slug length/alphabet so parents are created before children
  relevantGuides.sort((a, b) => a.slug.localeCompare(b.slug));

  relevantGuides.forEach((guide) => {
    const parts = guide.slug.split("/");
    let currentPath = "";

    parts.forEach((part, i) => {
      const isLastPart = i === parts.length - 1;
      const parentPath = currentPath;
      currentPath = currentPath ? `${currentPath}/${part}` : part;

      if (!map[currentPath]) {
        // Create the item
        const item: TocItem = {
          // Use the real name ONLY if this is the actual file for this slug
          // Otherwise, use a formatted version of the folder name as a placeholder
          title: isLastPart
            ? guide.data.name
            : part.charAt(0).toUpperCase() + part.slice(1),
          href: "/guides/" + currentPath,
          children: [],
        };

        map[currentPath] = item;

        if (i === 0) {
          tree.push(item);
        } else if (map[parentPath]) {
          map[parentPath].children.push(item);
        }
      } else if (isLastPart) {
        // If the entry already exists (created as a parent folder placeholder),
        // update it with the actual title from the MDX frontmatter
        map[currentPath].title = guide.data.name;
      }
    });
  });

  return tree;
}

// ============================================
// Moved from PageTableOfContents.tsx
// ============================================
function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\x00-\x7F]+/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function fetchPageHeadings(minLevel = 1, maxLevel = 2) {
  const container =
    typeof document !== "undefined"
      ? document.querySelector(".mdx-content")
      : null;
  if (!container) return [] as HeadingItem[];

  const selector = Array.from({ length: maxLevel - minLevel + 1 })
    .map((_, i) => `h${i + minLevel}`)
    .join(",");

  const els = Array.from(container.querySelectorAll(selector));

  const items: HeadingItem[] = els
    .map((el) => {
      const level = Number(el.tagName.charAt(1));
      let id = (el as HTMLElement).id;
      const text = (el as HTMLElement).innerText || "";

      if (!id) {
        id = slugify(text);
        (el as HTMLElement).id = id;
      }

      return { id, text, level };
    })
    .filter((h) => h.level >= minLevel && h.level <= maxLevel);

  return items;
}

// ============================================
// Super component combining both ToCs
// ============================================
export default function TableOfContents({
  guides,
  guide,
}: {
  guides: MatterData[];
  guide: MatterData;
}) {
  const router = useRouter();
  const [showPageToc, setShowPageToc] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftWrapperRef = useRef<HTMLDivElement>(null);
  const rightWrapperRef = useRef<HTMLDivElement>(null);

  // Compute page headings and manage showPageToc visibility
  useEffect(() => {
    const items = fetchPageHeadings(1, 2);
    setShowPageToc(items.length > 3);

    const onMutate = () => {
      const items2 = fetchPageHeadings(1, 2);
      setShowPageToc(items2.length > 3);
    };

    const container =
      typeof document !== "undefined"
        ? document.querySelector(".mdx-content")
        : null;
    let obs: MutationObserver | null = null;
    if (container) {
      obs = new MutationObserver(onMutate);
      obs.observe(container, { childList: true, subtree: true });
    }

    return () => {
      if (obs) {
        obs.disconnect();
      }
    };
  }, [router.asPath]);

  // Handle sticky positioning on scroll
  useEffect(() => {
    const containerElement = containerRef.current;
    if (!containerElement) return;

    const initialOffsetTop = containerElement.offsetTop - 32;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isSticky = scrollY > initialOffsetTop;

      if (leftWrapperRef.current) {
        if (isSticky) {
          leftWrapperRef.current.classList.add("sticky");
        } else {
          leftWrapperRef.current.classList.remove("sticky");
        }
      }

      if (rightWrapperRef.current) {
        if (isSticky) {
          rightWrapperRef.current.classList.add("sticky");
        } else {
          rightWrapperRef.current.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Build table of contents for nested guides
  const tocData: TocItem[] = getTableOfContent(guides, guide);
  const showToc = tocData[0]?.children.length > 0;

  return (
    <div ref={containerRef} className="guide-toc-container">
      {/* Table of contents for nested guides (left side) */}
      {showToc && (
        <div
          className="guide-toc-wrapper left-0 justify-end"
          ref={leftWrapperRef}
        >
          <TableOfContentsForPages items={tocData} currentPath={router.asPath} />
        </div>
      )}

      {/* In-page headers TOC (right side) */}
      {showPageToc && (
        <div
          className="guide-toc-wrapper right-0 justify-start"
          ref={rightWrapperRef}
        >
          <TableOfContentsForHeadings currentPath={router.asPath} />
        </div>
      )}
    </div>
  );
}
