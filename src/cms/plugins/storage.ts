import { s3Storage } from '@payloadcms/storage-s3'

export const storage = s3Storage({
  collections: {
    media: true,
  },
  bucket: process.env.S3_BUCKET as string,
  disableLocalStorage: true,
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
    },
    region: process.env.S3_REGION,
    endpoint: process.env.S3_ENDPOINT,
    forcePathStyle: true,

    // ... Other S3 configuration
  },
})
