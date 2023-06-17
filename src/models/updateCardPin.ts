/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface UpdateCardPin {
  /** [Token](#/rest/models/structures/prepaid-card-pin-token) used as part of a two-leg card PIN reveal request sent directly from the client that generally involves a second piece of data, such as the CVV code on the back of the card. */
  cardPinToken?: string;
  /** [Card PIN](#/rest/models/structures/prepaid-card-pin) for ATM and Debit usage */
  cardPin?: string;
  [key: string]: unknown;
}

export const updateCardPinSchema: Schema<UpdateCardPin> = expandoObject({
  cardPinToken: ['cardPinToken', optional(string())],
  cardPin: ['cardPin', optional(string())],
});
