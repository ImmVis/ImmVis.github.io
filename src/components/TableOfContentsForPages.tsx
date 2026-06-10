import { MatterData } from "@/helpers/MdxLoader";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import style from "@/styles/TableOfContents.module.scss";

export type TocItem = {
  title: string;
  href: string;
  children: TocItem[];
};

export function TableOfContentsForPages({
  items,
  currentPath,
}: {
  items: TocItem[];
  currentPath: string;
}) {
  const cleanPath = currentPath.split(/[?#]/)[0];
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateLayout = () => {
      const wide = window.innerWidth >= 1536;
      setIsWideScreen(wide);
      if (wide) {
        setIsCollapsed(false);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

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
        <span className="font-bold">Pages</span>
        {showToggle && (
          <FontAwesomeIcon
            icon={solidIcons.faChevronUp}
            className={`${style.chevron} ${shouldShowContent ? "" : style.rotated}`}
          />
        )}
      </div>
      {shouldShowContent && (
        <ul>
          {items.map((item) => (
            <Entry
              key={item.href}
              item={item}
              level={0}
              currentPath={cleanPath}
            />
          ))}
        </ul>
      )}
    </nav>
  );
}

function Entry({
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
  const indentation = isRoot ? 12 : (level - 1) * 16;

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
            <Entry
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
