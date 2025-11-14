/**
 * @summary Success response formatter
 * @description Creates standardized success response
 *
 * @param data Response data
 * @param metadata Optional metadata
 * @returns Formatted success response
 */
export function successResponse<T>(data: T, metadata?: any) {
  return {
    success: true,
    data,
    ...(metadata && { metadata: { ...metadata, timestamp: new Date().toISOString() } }),
  };
}

/**
 * @summary Error response formatter
 * @description Creates standardized error response
 *
 * @param message Error message
 * @param code Error code
 * @returns Formatted error response
 */
export function errorResponse(message: string, code: string = 'ERROR') {
  return {
    success: false,
    error: {
      code,
      message,
    },
    timestamp: new Date().toISOString(),
  };
}
