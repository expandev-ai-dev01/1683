import sql from 'mssql';
import { config } from '@/config';

let pool: sql.ConnectionPool | null = null;

/**
 * @summary Get database connection pool
 * @description Returns singleton database connection pool instance
 *
 * @returns Database connection pool
 */
export async function getPool(): Promise<sql.ConnectionPool> {
  if (!pool) {
    pool = await sql.connect(config.database);
  }
  return pool;
}
