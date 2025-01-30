import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { Plugin } from 'payload'

// local imports
import { redirects } from './redirects'
import { nestedDocs } from './nestedDocs'
import { seo } from './seo'
import { formBuilder } from './formBuilder'
import { search } from './search'

export const plugins: Plugin[] = [
  redirects,
  nestedDocs,
  seo,
  formBuilder,
  search,
  payloadCloudPlugin(),
]
