/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';
import { Currencies, currenciesSchema } from './currencies';

export interface CreateTransferQuote {
  /** Unique identifier representing the [source of funds](#/rest/models/structures/source-token) */
  sourceToken?: string;
  /** Unique identifier representing the [destination of funds](#/rest/models/structures/destination-token) */
  destinationToken?: string;
  /** [Optional comments](#/rest/models/structures/notes) visible to the user */
  note?: string;
  /** Optional internal [memo](#/rest/models/structures/memo) not visible to the user */
  memo?: string;
  /** [Unique value](#/rest/models/structures/client-transfer-id) provided by the client for the transfer, utilized for reference and deduplication. */
  clientTransferId?: string;
  /** Allocated money to be sent in the transaction. */
  destinationAmount?: number;
  /** [Currency code type](#/rest/models/structures/country) for the object */
  destinationCurrency?: Currencies;
  [key: string]: unknown;
}

export const createTransferQuoteSchema: Schema<CreateTransferQuote> = expandoObject(
  {
    sourceToken: ['sourceToken', optional(string())],
    destinationToken: ['destinationToken', optional(string())],
    note: ['note', optional(string())],
    memo: ['memo', optional(string())],
    clientTransferId: ['clientTransferId', optional(string())],
    destinationAmount: ['destinationAmount', optional(number())],
    destinationCurrency: ['destinationCurrency', optional(currenciesSchema)],
  }
);
