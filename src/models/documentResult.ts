/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema';
import { DocumentDetails, documentDetailsSchema } from './documentDetails';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import { MetadataObject, metadataObjectSchema } from './metadataObject';

export interface DocumentResult {
  /** Time object was [created](#/rest/models/structures/created-on)(#/rest/models/structures/created-on) */
  createDate: string;
  fields?: DocumentDetails[];
  /** The name given to a computer file in order to distinguish it from other files */
  filename?: string;
  /** A label used to identify a type of data.  Acts like a file extension on the internet. */
  mimeType?: string;
  /** [Token](#/rest/models/structures/token) representing the document */
  token: string;
  links: HateoasSelfRef[];
  meta?: MetadataObject;
  [key: string]: unknown;
}

export const documentResultSchema: Schema<DocumentResult> = expandoObject({
  createDate: ['createDate', string()],
  fields: ['fields', optional(array(lazy(() => documentDetailsSchema)))],
  filename: ['filename', optional(string())],
  mimeType: ['mimeType', optional(string())],
  token: ['token', string()],
  links: ['links', array(lazy(() => hateoasSelfRefSchema))],
  meta: ['meta', optional(lazy(() => metadataObjectSchema))],
});
