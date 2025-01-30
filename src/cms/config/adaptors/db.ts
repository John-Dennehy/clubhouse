import { postgresAdapter } from '@payloadcms/db-postgres'

export const databaseAdapter = postgresAdapter({
  idType: 'uuid',
  schemaName: 'clubhouse_' + process.env.CLUBHOUSE_NAME || 'clubhouse',
  pool: {
    // max: 20,
    // idleTimeoutMillis: 30000,
    // connectionTimeoutMillis: 2000,
    connectionString: process.env.DATABASE_URI as string,
  },
})
