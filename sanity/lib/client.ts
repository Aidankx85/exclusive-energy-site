import { createClient, type SanityClient } from "next-sanity";

import { apiVersion, dataset, isSanityConfigured, projectId } from "../env";

// Wrap createClient in a try/catch so any invalid env value (e.g. a bad
// apiVersion or a malformed projectId/dataset) degrades to a null client
// instead of throwing at module-load time and killing the build.
function makeClient(): SanityClient | null {
  if (!isSanityConfigured) return null;
  try {
    return createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    });
  } catch (err) {
    console.warn("[sanity] createClient failed; running without CMS.", err);
    return null;
  }
}

export const client: SanityClient | null = makeClient();
