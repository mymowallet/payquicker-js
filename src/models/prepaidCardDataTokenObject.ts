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
import { CardProcessors, cardProcessorsSchema } from './cardProcessors';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import { TokenPurposes, tokenPurposesSchema } from './tokenPurposes';

export interface PrepaidCardDataTokenObject {
  /** The processor type for the prepaid card */
  cardProcessorType: CardProcessors;
  /** Value of the target resource */
  resourceValue?: string;
  /** [Token](#/rest/models/structures/token) representing the resource */
  token?: string;
  /** Purpose of the token */
  tokenPurposeType: TokenPurposes;
  /** Full path of the URI to perform the request action against a prepaid card that replaces the need to build the URL with query params. */
  url?: string;
  links?: HateoasSelfRef[];
  [key: string]: unknown;
}

export const prepaidCardDataTokenObjectSchema: Schema<PrepaidCardDataTokenObject> = expandoObject(
  {
    cardProcessorType: ['cardProcessorType', cardProcessorsSchema],
    resourceValue: ['resourceValue', optional(string())],
    token: ['token', optional(string())],
    tokenPurposeType: ['tokenPurposeType', tokenPurposesSchema],
    url: ['url', optional(string())],
    links: ['links', optional(array(lazy(() => hateoasSelfRefSchema)))],
  }
);
