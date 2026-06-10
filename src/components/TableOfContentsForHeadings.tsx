import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import style from "@/styles/TableOfContents.module.scss";

type HeadingItem = {
  id: string;
  text: string;
  level: number;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\x00-\x7F]+/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function getHeadings(minLevel = 1, maxLevel = 2) {
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

export default function TableOfContentsForHeadings({
  minLevel = 1,
  maxLevel = 2,
  currentPath,
  showPageToc = true,
}: {
  minLevel?: number;
  maxLevel?: number;
  currentPath?: string;
  showPageToc?: boolean;
}) {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [selectedHash, setSelectedHash] = useState<string>("");
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateLayout = () => {
      const wide = window.innerWidth >= 1536;
      const sideBySide = window.innerWidth >= 512;
      setIsWideScreen(wide);

      if (showPageToc) {
        setIsCollapsed(!sideBySide);
      } else {
        setIsCollapsed(true);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, [showPageToc]);

  useEffect(() => {
    const items = getHeadings(minLevel, maxLevel);
    setHeadings(items);

    // Rebuild on content mutations
    const observer = new MutationObserver(() => {
      const items2 = getHeadings(minLevel, maxLevel);
      setHeadings(items2);
    });

    const container =
      typeof document !== "undefined"
        ? document.querySelector(".mdx-content")
        : null;
    if (container)
      observer.observe(container, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [minLevel, maxLevel]);

  useEffect(() => {
    // initialize selection from currentPath (router.asPath) or the current URL hash
    if (typeof currentPath === "string" && currentPath.includes("#")) {
      setSelectedHash(`#${currentPath.split("#")[1]}`);
    } else if (typeof window !== "undefined") {
      setSelectedHash(window.location.hash || "");
    }

    const handleHashChange = () => setSelectedHash(window.location.hash || "");
    if (typeof window !== "undefined")
      window.addEventListener("hashchange", handleHashChange);

    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("hashchange", handleHashChange);
    };
  }, [currentPath]);

  if (!headings || headings.length === 0) return null;

  const shouldRender = showPageToc || isWideScreen;
  if (!shouldRender) return null;

  const showToggle = !isWideScreen;
  const shouldShowContent = isWideScreen || !isCollapsed;

  return (
    <nav className={style.toc}>
      <div
        className={`${style.tocHeader} ${showToggle ? style.tocHeaderInteractive : ""}`}
        role={showToggle ? "button" : undefined}
        tabIndex={showToggle ? 0 : undefined}
        aria-expanded={showToggle ? !isCollapsed : undefined}
        onClick={showToggle ? () => setIsCollapsed((prev) => !prev) : undefined}
      >
        <span className="font-bold">Sections</span>
        {showToggle && (
          <FontAwesomeIcon
            icon={solidIcons.faChevronUp}
            className={`${style.chevron} ${shouldShowContent ? "" : style.rotated}`}
          />
        )}
      </div>
      {shouldShowContent && (
        <ul>
          {headings.map((h) => (
            <HeadingNode
              key={h.id}
              heading={h}
              minLevel={minLevel}
              currentHash={selectedHash}
              onSelect={(hash: string) => setSelectedHash(hash)}
            />
          ))}
        </ul>
      )}
    </nav>
  );
}

function HeadingNode({
  heading,
  minLevel,
  currentHash,
  onSelect,
}: {
  heading: HeadingItem;
  minLevel: number;
  currentHash: string;
  onSelect: (hash: string) => void;
}) {
  const isCurrentHeading = currentHash === `#${heading.id}`;
  const isRoot = heading.level === 1;
  const indentation = isRoot ? 12 : (heading.level - minLevel + 1) * 16;

  return (
    <li className={style.node}>
      <div
        className={`${style.linkWrapper} ${isCurrentHeading ? style.currentPage : ""}`}
        style={{ paddingLeft: `${indentation}px` }}
      >
        <a
          href={`#${heading.id}`}
          className={style.link}
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById(heading.id);
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
              history.replaceState(null, "", `#${heading.id}`);
              // update internal selection immediately so highlight reflects click
              onSelect(`#${heading.id}`);
            }
          }}
        >
          {heading.text}
        </a>
      </div>
    </li>
  );
}
