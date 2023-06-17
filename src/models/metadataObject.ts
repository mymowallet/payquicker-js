/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface MetadataObject {
  /** Timezone of the datetime objects in the response */
  timezone?: string;
  [key: string]: unknown;
}

export const metadataObjectSchema: Schema<MetadataObject> = expandoObject({
  timezone: ['timezone', optional(string())],
});
