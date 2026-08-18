import type { PortableTextBlock } from "@portabletext/types";

let keySeed = 0;
function key(prefix: string): string {
  keySeed += 1;
  return `${prefix}-${keySeed}`;
}

type BlockStyle = "normal" | "h2" | "h3" | "blockquote";

/** Build a single Portable Text block (paragraph/heading/quote). */
export function block(text: string, style: BlockStyle = "normal"): PortableTextBlock {
  return {
    _type: "block",
    _key: key("b"),
    style,
    markDefs: [],
    children: [{ _type: "span", _key: key("s"), text, marks: [] }],
  };
}

type Segment = string | { readonly text: string; readonly href: string };

/**
 * Build a paragraph block that may contain inline links.
 * Pass strings for plain text and `{ text, href }` for links.
 */
export function para(...segments: readonly Segment[]): PortableTextBlock {
  const markDefs: { _type: "link"; _key: string; href: string }[] = [];
  const children = segments.map((seg) => {
    if (typeof seg === "string") {
      return { _type: "span", _key: key("s"), text: seg, marks: [] };
    }
    const markKey = key("link");
    markDefs.push({ _type: "link", _key: markKey, href: seg.href });
    return { _type: "span", _key: key("s"), text: seg.text, marks: [markKey] };
  });
  return { _type: "block", _key: key("b"), style: "normal", markDefs, children };
}

/** Build a bulleted list from plain strings. */
export function bulletList(items: readonly string[]): PortableTextBlock[] {
  return items.map((text) => ({
    _type: "block",
    _key: key("b"),
    style: "normal",
    level: 1,
    listItem: "bullet",
    markDefs: [],
    children: [{ _type: "span", _key: key("s"), text, marks: [] }],
  }));
}
