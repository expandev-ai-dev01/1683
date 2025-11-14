/**
 * @summary Global test setup
 * @description Configuration and utilities for test environment
 */

import dotenv from 'dotenv';

dotenv.config({ path: '.env.test' });

/**
 * @summary Test environment setup
 */
export function setupTestEnvironment() {
  process.env.NODE_ENV = 'test';
  process.env.DB_NAME = 'autoclean_test';
}

/**
 * @summary Test cleanup
 */
export function cleanupTestEnvironment() {
  // Cleanup logic here
}
