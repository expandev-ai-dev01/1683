/**
 * @summary Database record set interface
 * @description Generic interface for database query results
 */
export interface IRecordSet<T = any> extends Array<T> {
  columns?: any;
  recordset?: T[];
}
