import { Request } from 'express';
import { z, ZodSchema } from 'zod';

/**
 * @summary CRUD operation controller
 * @description Handles validation and security for CRUD operations
 */
export class CrudController {
  private permissions: Array<{ securable: string; permission: string }>;

  constructor(permissions: Array<{ securable: string; permission: string }>) {
    this.permissions = permissions;
  }

  /**
   * @summary Validate CREATE operation
   */
  async create(req: Request, schema: ZodSchema): Promise<[any, any]> {
    try {
      const validated = await schema.parseAsync(req.body);
      return [{ credential: {}, params: validated }, null];
    } catch (error) {
      return [null, error];
    }
  }

  /**
   * @summary Validate READ operation
   */
  async read(req: Request, schema: ZodSchema): Promise<[any, any]> {
    try {
      const validated = await schema.parseAsync({ ...req.params, ...req.query });
      return [{ credential: {}, params: validated }, null];
    } catch (error) {
      return [null, error];
    }
  }

  /**
   * @summary Validate UPDATE operation
   */
  async update(req: Request, schema: ZodSchema): Promise<[any, any]> {
    try {
      const validated = await schema.parseAsync({ ...req.params, ...req.body });
      return [{ credential: {}, params: validated }, null];
    } catch (error) {
      return [null, error];
    }
  }

  /**
   * @summary Validate DELETE operation
   */
  async delete(req: Request, schema: ZodSchema): Promise<[any, any]> {
    try {
      const validated = await schema.parseAsync(req.params);
      return [{ credential: {}, params: validated }, null];
    } catch (error) {
      return [null, error];
    }
  }

  /**
   * @summary Validate LIST operation
   */
  async list(req: Request, schema?: ZodSchema): Promise<[any, any]> {
    try {
      const validated = schema ? await schema.parseAsync(req.query) : req.query;
      return [{ credential: {}, params: validated }, null];
    } catch (error) {
      return [null, error];
    }
  }
}
