import { copy } from "../content/copy";

const CHAPTERS = [
  { id: "producto", label: copy.chapterProduct },
  { id: "sistema", label: copy.chapterSystem },
  { id: "problema", label: copy.problemTitle },
  { id: "caso", label: copy.chapterCase },
  { id: "cierre", label: copy.chapterClose },
] as const;

export function ChapterRail() {
  return (
    <nav className="torns-chapter-rail" aria-label={copy.tornsName}>
      {CHAPTERS.map((chapter) => (
        <a key={chapter.id} href={`#${chapter.id}`}>
          {chapter.label}
        </a>
      ))}
    </nav>
  );
}
