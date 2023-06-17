/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface Payload {
  /** [Package](#/rest/models/structures/prepaid-card-package) for the card being displayed, including artwork, packaging, and delivery method */
  cardPackage?: string;
  /** Auto-generated unique identifier representing a program, prefixed with prog- */
  programToken?: string;
  /** Number that is printed on the back of a plastic card. */
  cardReferenceNumber?: string;
  [key: string]: unknown;
}

export const payloadSchema: Schema<Payload> = expandoObject({
  cardPackage: ['cardPackage', optional(string())],
  programToken: ['programToken', optional(string())],
  cardReferenceNumber: ['cardReferenceNumber', optional(string())],
});
