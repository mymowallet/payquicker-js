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
import { MetadataObject, metadataObjectSchema } from './metadataObject';

export interface PrepaidCardPinTokenResult {
  /** The processor type for the prepaid card */
  cardProcessorType?: CardProcessors;
  /** [Token](#/rest/models/structures/prepaid-card-pin-token) used as part of a two-leg card PIN reveal request sent directly from the client that generally involves a second piece of data, such as the CVV code on the back of the card. */
  cardPinToken?: string;
  /** [Token](#/rest/models/structures/token) representing the resource */
  token?: string;
  /** Full path of the URI to perform the request action against a prepaid card that replaces the need to build the URL with query params. */
  url?: string;
  links?: HateoasSelfRef[];
  meta?: MetadataObject;
  [key: string]: unknown;
}

export const prepaidCardPinTokenResultSchema: Schema<PrepaidCardPinTokenResult> = expandoObject(
  {
    cardProcessorType: ['cardProcessorType', optional(cardProcessorsSchema)],
    cardPinToken: ['cardPinToken', optional(string())],
    token: ['token', optional(string())],
    url: ['url', optional(string())],
    links: ['links', optional(array(lazy(() => hateoasSelfRefSchema)))],
    meta: ['meta', optional(lazy(() => metadataObjectSchema))],
  }
);
