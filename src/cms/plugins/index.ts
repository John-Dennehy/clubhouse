import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { Plugin } from 'payload'

// local imports
import { formBuilder } from './formBuilder'
import { nestedDocs } from './nestedDocs'
import { redirects } from './redirects'
import { search } from './search'
import { seo } from './seo'
import { storage } from './storage'

export const plugins: Plugin[] = [
  formBuilder,
  nestedDocs,
  redirects,
  search,
  seo,
  storage,
  payloadCloudPlugin(),
]
