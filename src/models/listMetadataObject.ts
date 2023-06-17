/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface ListMetadataObject {
  pageNo: string;
  pageSize: string;
  pageCount: string;
  recordCount: string;
  /** Timezone of the datetime objects in the response */
  timezone: string;
  [key: string]: unknown;
}

export const listMetadataObjectSchema: Schema<ListMetadataObject> = expandoObject(
  {
    pageNo: ['pageNo', string()],
    pageSize: ['pageSize', string()],
    pageCount: ['pageCount', string()],
    recordCount: ['recordCount', string()],
    timezone: ['timezone', string()],
  }
);
