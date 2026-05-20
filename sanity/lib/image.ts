import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, isSanityConfigured, projectId } from "../env";

function makeBuilder() {
  if (!isSanityConfigured) return null;
  try {
    return createImageUrlBuilder({ projectId, dataset });
  } catch (err) {
    console.warn("[sanity] image URL builder unavailable.", err);
    return null;
  }
}

const builder = makeBuilder();

export const urlFor = (source: SanityImageSource) => {
  if (!builder) {
    const noop: any = new Proxy(() => noop, {
      get: (_target, prop) => (prop === "url" ? () => "" : () => noop),
    });
    return noop;
  }
  return builder.image(source);
};
