/**
 * @summary Test helper functions
 * @description Shared utilities for testing
 */

import { Request, Response } from 'express';

/**
 * @summary Create mock Express request
 */
export function createMockRequest(overrides: Partial<Request> = {}): Partial<Request> {
  return {
    body: {},
    params: {},
    query: {},
    headers: {},
    ...overrides,
  };
}

/**
 * @summary Create mock Express response
 */
export function createMockResponse(): Partial<Response> {
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
    send: jest.fn().mockReturnThis(),
  };
  return res;
}
