import createImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

import { dataset, isSanityConfigured, projectId } from '../env'

const builder = isSanityConfigured
  ? createImageUrlBuilder({ projectId, dataset })
  : null

export const urlFor = (source: SanityImageSource) => {
  if (!builder) {
    const noop: any = new Proxy(() => noop, {
      get: (_target, prop) => (prop === 'url' ? () => '' : () => noop),
    })
    return noop
  }
  return builder.image(source)
}
