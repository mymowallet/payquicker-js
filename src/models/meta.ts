/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface Meta {
  timezone?: string;
  [key: string]: unknown;
}

export const metaSchema: Schema<Meta> = expandoObject({
  timezone: ['timezone', optional(string())],
});
