// TocHelper.ts
import { MatterData } from "@/helpers/MdxLoader";

export type TocItem = {
  title: string;
  href: string;
  children: TocItem[];
};

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

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import style from "@/styles/TableOfContents.module.scss";

export function TableOfContents({
  items,
  currentPath,
}: {
  items: TocItem[];
  currentPath: string;
}) {
  return (
    <nav className={style.toc}>
      <ul>
        {items.map((item) => (
          <TocNode
            key={item.href}
            item={item}
            level={0}
            currentPath={currentPath}
          />
        ))}
      </ul>
    </nav>
  );
}

function TocNode({
  item,
  level,
  currentPath,
}: {
  item: TocItem;
  level: number;
  currentPath: string;
}) {
  const isCurrentPage = currentPath === item.href + "/";
  const isParentOfCurrent = currentPath.startsWith(item.href + "/");
  const isActive = isCurrentPage || isParentOfCurrent;
  const hasChildren = item.children && item.children.length > 0;
  const isRoot = level === 0;
  const indentation = isRoot ? 0 : (level - 1) * 24;

  const [isOpen, setIsOpen] = useState(isActive);

  // Re-sync if path changes (e.g. clicking a link elsewhere)
  useEffect(() => {
    if (isActive && !isRoot) setIsOpen(true);
  }, [isActive, isRoot]);

  return (
    <li className={style.node}>
      <div
        className={`${style.linkWrapper} ${isActive ? style.active : ""} ${isCurrentPage ? style.currentPage : ""}`}
        style={{ paddingLeft: `${indentation}px` }} // Increased indentation
      >
        {!isRoot && (
          <div className={style.iconContainer}>
            {hasChildren ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(!isOpen);
                }}
                className={`${style.toggleBtn} ${isOpen ? style.rotated : ""}`}
              >
                <FontAwesomeIcon icon={solidIcons.faChevronRight} />
              </button>
            ) : (
              <span className={style.leafIcon}>
                {/* <FontAwesomeIcon icon={solidIcons.faDotCircle} /> */}
              </span>
            )}
          </div>
        )}

        <Link href={item.href} className={style.link}>
          {item.title}
        </Link>
      </div>

      {hasChildren && (isRoot || isOpen) && (
        <ul className={style.subTree}>
          {item.children.map((child) => (
            <TocNode
              key={child.href}
              item={child}
              level={level + 1}
              currentPath={currentPath}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
