import sql from 'mssql';
import { getPool } from '@/utils/database/dbPool';
import { IRecordSet } from '@/utils/database/types';

/**
 * @summary Expected return types for database operations
 */
export enum ExpectedReturn {
  Single = 'single',
  Multi = 'multi',
  None = 'none',
}

/**
 * @summary Execute database stored procedure
 * @description Executes stored procedure with parameters and returns results
 *
 * @param routine Stored procedure name
 * @param parameters Procedure parameters
 * @param expectedReturn Expected return type
 * @param transaction Optional transaction
 * @param resultSetNames Optional result set names for multi-result queries
 * @returns Query results
 */
export async function dbRequest(
  routine: string,
  parameters: any,
  expectedReturn: ExpectedReturn,
  transaction?: sql.Transaction,
  resultSetNames?: string[]
): Promise<any> {
  const pool = await getPool();
  const request = transaction ? new sql.Request(transaction) : pool.request();

  /**
   * @rule {db-parameter-binding} Bind parameters to request
   */
  for (const [key, value] of Object.entries(parameters)) {
    request.input(key, value);
  }

  const result = await request.execute(routine);

  /**
   * @rule {db-result-processing} Process results based on expected return type
   */
  switch (expectedReturn) {
    case ExpectedReturn.Single:
      return result.recordset;
    case ExpectedReturn.Multi:
      if (resultSetNames && resultSetNames.length > 0) {
        const namedResults: { [key: string]: IRecordSet<any> } = {};
        resultSetNames.forEach((name, index) => {
          namedResults[name] = result.recordsets[index];
        });
        return namedResults;
      }
      return result.recordsets;
    case ExpectedReturn.None:
      return null;
    default:
      return result.recordset;
  }
}
