/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import { DocumentDetails, documentDetailsSchema } from './documentDetails';

export interface Fields {
  fields?: DocumentDetails[];
  [key: string]: unknown;
}

export const fieldsSchema: Schema<Fields> = expandoObject({
  fields: ['fields', optional(array(lazy(() => documentDetailsSchema)))],
});
