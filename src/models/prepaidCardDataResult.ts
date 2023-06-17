/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import { MetadataObject, metadataObjectSchema } from './metadataObject';

export interface PrepaidCardDataResult {
  /** Unique number on the prepaid card */
  cardNumber?: number;
  /** Three- or four-digit [Card Verification Value (CVV)](#/rest/models/structures/cvv) number displayed on the back of a credit or debit card */
  cvvNumber?: string;
  /** Date that the card will expire */
  expiration?: string;
  /** Name of the card's owner */
  nameOnCard?: string;
  /** A token used to reveal prepaid card information in the form of image data (base64) or JSON. */
  token?: string;
  links?: HateoasSelfRef[];
  meta?: MetadataObject;
  [key: string]: unknown;
}

export const prepaidCardDataResultSchema: Schema<PrepaidCardDataResult> = expandoObject(
  {
    cardNumber: ['cardNumber', optional(number())],
    cvvNumber: ['cvvNumber', optional(string())],
    expiration: ['expiration', optional(string())],
    nameOnCard: ['nameOnCard', optional(string())],
    token: ['token', optional(string())],
    links: ['links', optional(array(lazy(() => hateoasSelfRefSchema)))],
    meta: ['meta', optional(lazy(() => metadataObjectSchema))],
  }
);
