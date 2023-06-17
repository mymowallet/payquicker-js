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

export interface PrepaidCardPinResult {
  /** [Card PIN](#/rest/models/structures/prepaid-card-pin) for ATM and Debit usage */
  cardPin?: string;
  /** [Token](#/rest/models/structures/prepaid-card-pin-token) used as part of a two-leg card PIN reveal request sent directly from the client that generally involves a second piece of data, such as the CVV code on the back of the card. */
  token?: string;
  links?: HateoasSelfRef[];
  meta?: MetadataObject;
  [key: string]: unknown;
}

export const prepaidCardPinResultSchema: Schema<PrepaidCardPinResult> = expandoObject(
  {
    cardPin: ['cardPin', optional(string())],
    token: ['token', optional(string())],
    links: ['links', optional(array(lazy(() => hateoasSelfRefSchema)))],
    meta: ['meta', optional(lazy(() => metadataObjectSchema))],
  }
);
