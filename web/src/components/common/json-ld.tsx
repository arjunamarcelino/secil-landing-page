/**
 * Renders a JSON-LD structured-data script. This is the ONLY sanctioned use of
 * dangerouslySetInnerHTML in the app — the payload is always trusted, machine-built
 * JSON (never CMS HTML), and JSON.stringify cannot introduce an executable sink here.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
