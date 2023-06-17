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
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import { MetadataObject, metadataObjectSchema } from './metadataObject';

/** TODO: Make prepaidCardToken optional */
export interface StatementObject {
  /** The string representation of the file content. */
  fileContents?: string;
  /** The name given to a computer file in order to distinguish it from other files */
  filename?: string;
  /** A label used to identify a type of data.  Acts like a file extension on the internet. */
  mimeType?: string;
  /** [Token](#/rest/models/structures/token) representing the resource */
  token?: string;
  /** Auto-generated unique identifier representing a user, prefixed with `user-`. */
  userToken?: string;
  /** Auto-generated unique identifier representing a dest, prefixed with dest-. */
  prepaidCardToken?: string;
  /** Beginning date and time of a prepaid card statement */
  from?: string;
  /** Ending date and time of a prepaid card statement */
  to?: string;
  links?: HateoasSelfRef[];
  meta?: MetadataObject;
  [key: string]: unknown;
}

export const statementObjectSchema: Schema<StatementObject> = expandoObject({
  fileContents: ['fileContents', optional(string())],
  filename: ['filename', optional(string())],
  mimeType: ['mimeType', optional(string())],
  token: ['token', optional(string())],
  userToken: ['userToken', optional(string())],
  prepaidCardToken: ['prepaidCardToken', optional(string())],
  from: ['from', optional(string())],
  to: ['to', optional(string())],
  links: ['links', optional(array(lazy(() => hateoasSelfRefSchema)))],
  meta: ['meta', optional(lazy(() => metadataObjectSchema))],
});
