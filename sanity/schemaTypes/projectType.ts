import {CaseIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Project title',
      type: 'string',
      description: 'e.g. "Amazon FFC EV Charging Buildout"',
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      description: 'Used in the URL — auto-generated from the title. Click "Generate" if blank.',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Project status',
      type: 'string',
      description: 'Splits portfolio into "Recently Completed" vs "In the Works"',
      options: {
        list: [
          {title: 'Recently Completed', value: 'completed'},
          {title: 'In the Works', value: 'inProgress'},
        ],
        layout: 'radio',
      },
      initialValue: 'completed',
    }),
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'string',
      description: 'Drives which portfolio category this project appears under',
      options: {
        list: [
          {title: 'Warehouse', value: 'warehouse'},
          {title: 'Retail', value: 'retail'},
          {title: 'EV Charging', value: 'evcharge'},
          {title: 'Government', value: 'goverment'},
          {title: 'Hospitality', value: 'hospitality'},
          {title: 'Offices', value: 'offices'},
          {title: 'Miscellaneous', value: 'miscellaneous'},
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      description: 'e.g. "Amazon", "Toyo Tires" — leave blank if confidential',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'City + state, e.g. "Riverside, CA"',
    }),
    defineField({
      name: 'year',
      title: 'Year completed',
      type: 'number',
      validation: (rule) => rule.min(2000).max(2100).integer(),
    }),
    defineField({
      name: 'squareFeet',
      title: 'Square footage',
      type: 'number',
      description: 'Optional — e.g. 250000',
    }),
    defineField({
      name: 'summary',
      title: 'One-line summary',
      type: 'string',
      description:
        'Shown on portfolio cards. Keep it short. e.g. "Ground-up 240 kW EV charging build for Amazon FFC."',
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      description: 'Primary photo — used on portfolio cards and the project page hero',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'Describe the photo for screen readers and SEO',
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      description: 'Additional photos shown on the project detail page. Drag to reorder.',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'highlights',
      title: 'Project highlights',
      type: 'array',
      description: 'Bullet metrics, e.g. "240 kW installed", "8 weeks ahead of schedule"',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'scopeOfWork',
      title: 'Scope of work',
      type: 'blockContent',
      description: 'Full case-study body — supports headings, bullets, and inline images',
    }),
    defineField({
      name: 'featured',
      title: 'Feature on homepage',
      type: 'boolean',
      description: 'Show this project in the homepage trust strip',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'Used for ordering on the portfolio page — defaults to now',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      sector: 'sector',
      media: 'coverImage',
    },
    prepare({title, client, sector, media}) {
      const subtitleParts = [client, sector].filter(Boolean)
      return {
        title,
        subtitle: subtitleParts.length ? subtitleParts.join(' · ') : undefined,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Newest first',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
    {
      title: 'Year completed (newest)',
      name: 'yearDesc',
      by: [{field: 'year', direction: 'desc'}],
    },
  ],
})
