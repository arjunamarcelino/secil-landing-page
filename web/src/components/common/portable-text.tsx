import {
  PortableText,
  type PortableTextComponents,
  type PortableTextMarkComponentProps,
  type PortableTextTypeComponentProps,
} from "@portabletext/react";
import type { PortableTextImageBlock, RichText } from "@/content/types";
import { safeHref, isExternalHref } from "@/lib/url";
import { ResponsiveImage } from "./responsive-image";

type LinkMark = { _type: "link"; href?: string };

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-lg leading-relaxed text-foreground/90">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 font-heading text-2xl font-semibold text-foreground sm:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-heading text-xl font-semibold text-foreground">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-primary pl-5 text-lg italic text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 list-disc space-y-2 pl-6 text-lg text-foreground/90">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 list-decimal space-y-2 pl-6 text-lg text-foreground/90">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ value, children }: PortableTextMarkComponentProps<LinkMark>) => {
      const safe = safeHref(value?.href);
      if (!safe) return <>{children}</>;
      const external = isExternalHref(safe);
      return (
        <a
          href={safe}
          className="text-teal underline underline-offset-4"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: PortableTextTypeComponentProps<PortableTextImageBlock>) => (
      <figure className="my-8">
        <ResponsiveImage image={value.image} ratio="16 / 9" sizes="(min-width: 768px) 42rem, 100vw" />
      </figure>
    ),
  },
};

/** Renders Portable Text; unknown blocks/marks degrade gracefully to nothing. */
export function PortableTextRenderer({ value }: { value: RichText }) {
  if (!value || value.length === 0) return null;
  return (
    <div className="flex flex-col gap-5">
      <PortableText value={[...value]} components={components} onMissingComponent={false} />
    </div>
  );
}
