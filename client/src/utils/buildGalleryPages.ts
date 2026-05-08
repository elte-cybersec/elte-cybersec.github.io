import { defaultPhoto } from "../data/galleryData";

export type SectionId = "A" | "B" | "C" | "MOBILE";

export interface GalleryPage {
  sectionId: SectionId;
  photos: string[];
}

const DESKTOP_SECTIONS: { id: SectionId; slots: number }[] = [
  { id: "A", slots: 4 },
  { id: "B", slots: 3 },
  { id: "C", slots: 3 },
];

function pickRandomSection(exclude: SectionId | null): { id: SectionId; slots: number } {
  const pool = exclude
    ? DESKTOP_SECTIONS.filter((s) => s.id !== exclude)
    : DESKTOP_SECTIONS;
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

function padPhotos(photos: string[], targetCount: number): string[] {
  const result = [...photos];
  while (result.length < targetCount) {
    result.push(defaultPhoto);
  }
  return result;
}

export function buildGalleryPages(
  photos: string[],
  isMobile: boolean,
): GalleryPage[] {
  if (photos.length === 0) {
    return [];
  }

  if (isMobile) {
    return photos.map((photo) => ({
      sectionId: "MOBILE",
      photos: [photo],
    }));
  }

  const pages: GalleryPage[] = [];
  let cursor = 0;
  let lastSectionId: SectionId | null = null;

  while (cursor < photos.length) {
    const section = pickRandomSection(lastSectionId);
    const slice = photos.slice(cursor, cursor + section.slots);
    pages.push({
      sectionId: section.id,
      photos: padPhotos(slice, section.slots),
    });
    cursor += section.slots;
    lastSectionId = section.id;
  }

  return pages;
}
