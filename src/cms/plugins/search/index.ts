import { searchPlugin } from '@payloadcms/plugin-search'
import { searchFields } from '@/cms/plugins/search/fieldOverrides'
import { beforeSyncWithSearch } from '@/cms/plugins/search/beforeSync'

export const search = searchPlugin({
  collections: ['posts'],
  beforeSync: beforeSyncWithSearch,
  searchOverrides: {
    fields: ({ defaultFields }) => {
      return [...defaultFields, ...searchFields]
    },
  },
})
