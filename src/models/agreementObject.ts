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
import { AgreementTypes, agreementTypesSchema } from './agreementTypes';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';

export interface AgreementObject {
  /** [Token](#/rest/models/structures/token) representing the resource */
  token?: string;
  /** Program agreement content */
  content?: string;
  /** Full path of the URI to the content for the program agreement */
  url?: string;
  type?: AgreementTypes;
  links?: HateoasSelfRef[];
  [key: string]: unknown;
}

export const agreementObjectSchema: Schema<AgreementObject> = expandoObject({
  token: ['token', optional(string())],
  content: ['content', optional(string())],
  url: ['url', optional(string())],
  type: ['type', optional(agreementTypesSchema)],
  links: ['links', optional(array(lazy(() => hateoasSelfRefSchema)))],
});
