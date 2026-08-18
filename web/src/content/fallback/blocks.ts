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
