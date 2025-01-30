import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { searchPlugin } from '@payloadcms/plugin-search'

import { Plugin } from 'payload'
import { searchFields } from '@/cms/search/fieldOverrides'
import { beforeSyncWithSearch } from '@/cms/search/beforeSync'

import { redirects } from './redirects'
import { nestedDocs } from './nestedDocs'
import { seo } from './seo'
import { formBuilder } from './formBuilder'

export const plugins: Plugin[] = [
  redirects,
  nestedDocs,
  seo,
  formBuilder,
  searchPlugin({
    collections: ['posts'],
    beforeSync: beforeSyncWithSearch,
    searchOverrides: {
      fields: ({ defaultFields }) => {
        return [...defaultFields, ...searchFields]
      },
    },
  }),
  payloadCloudPlugin(),
]
