import { createClient } from "next-sanity";
import {
  isSanityConfigured,
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
} from "@/lib/env";

/**
 * Lazily construct a tokenless, CDN-backed client. Construction is deferred until
 * the first real fetch — which only happens when `isSanityConfigured` is true — so
 * a placeholder/empty project id never makes `createClient` throw at module scope
 * (that would break the build in fallback mode).
 */
let cachedClient: ReturnType<typeof createClient> | null = null;
function getClient() {
  if (!cachedClient) {
    cachedClient = createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      useCdn: true,
    });
  }
  return cachedClient;
}

/**
 * Thin, typed fetch wrapper. `T` has no default, so callers must name the result
 * type — keeping `any` out even though `client.fetch` only asserts (never
 * validates). Cache tags are inert until on-demand revalidation is wired up with a
 * later `defineLive` migration; passing tags disables time-based revalidation.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, string> = {},
  { tags = [], revalidate = false }: { tags?: readonly string[]; revalidate?: number | false } = {},
): Promise<T> {
  return getClient().fetch<T>(query, params, {
    next: { tags: [...tags], revalidate: tags.length ? false : revalidate },
  });
}

export { isSanityConfigured };
