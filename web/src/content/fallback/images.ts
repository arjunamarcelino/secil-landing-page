import type { StaticImageData } from "next/image";
import type { DomainImage } from "@/content/types";

import hero from "@/assets/placeholders/hero.png";
import program1 from "@/assets/placeholders/program-1.png";
import program2 from "@/assets/placeholders/program-2.png";
import program3 from "@/assets/placeholders/program-3.png";
import story1 from "@/assets/placeholders/story-1.png";
import story2 from "@/assets/placeholders/story-2.png";
import story3 from "@/assets/placeholders/story-3.png";
import gallery1 from "@/assets/placeholders/gallery-1.png";
import gallery2 from "@/assets/placeholders/gallery-2.png";
import gallery3 from "@/assets/placeholders/gallery-3.png";
import author1 from "@/assets/placeholders/author-1.png";
import author2 from "@/assets/placeholders/author-2.png";
import partner1 from "@/assets/placeholders/partner-1.png";
import partner2 from "@/assets/placeholders/partner-2.png";
import partner3 from "@/assets/placeholders/partner-3.png";
import partner4 from "@/assets/placeholders/partner-4.png";

/** Wrap a bundled asset as a local DomainImage (never an empty `src`). */
export function local(asset: StaticImageData, alt: string): DomainImage {
  return { kind: "local", asset, alt };
}

export const img = {
  hero,
  program1,
  program2,
  program3,
  story1,
  story2,
  story3,
  gallery1,
  gallery2,
  gallery3,
  author1,
  author2,
  partner1,
  partner2,
  partner3,
  partner4,
} as const;
