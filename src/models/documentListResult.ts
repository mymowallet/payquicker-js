/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import { DocumentObject, documentObjectSchema } from './documentObject';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import {
  ListMetadataObject,
  listMetadataObjectSchema,
} from './listMetadataObject';

export interface DocumentListResult {
  payload: DocumentObject[];
  meta?: ListMetadataObject;
  links: HateoasSelfRef[];
  [key: string]: unknown;
}

export const documentListResultSchema: Schema<DocumentListResult> = expandoObject(
  {
    payload: ['payload', array(lazy(() => documentObjectSchema))],
    meta: ['meta', optional(lazy(() => listMetadataObjectSchema))],
    links: ['links', array(lazy(() => hateoasSelfRefSchema))],
  }
);
