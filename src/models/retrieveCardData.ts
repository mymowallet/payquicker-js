/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface RetrieveCardData {
  /** A token used to reveal prepaid card information in the form of image data (base64) or JSON. */
  token?: string;
  [key: string]: unknown;
}

export const retrieveCardDataSchema: Schema<RetrieveCardData> = expandoObject({
  token: ['Token', optional(string())],
});
