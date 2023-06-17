/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, lazy, optional, Schema } from '../schema';
import { MetadataObject, metadataObjectSchema } from './metadataObject';

export interface OperationResult {
  /** The result of the api operation */
  result?: boolean;
  meta?: MetadataObject;
  [key: string]: unknown;
}

export const operationResultSchema: Schema<OperationResult> = expandoObject({
  result: ['result', optional(boolean())],
  meta: ['meta', optional(lazy(() => metadataObjectSchema))],
});
