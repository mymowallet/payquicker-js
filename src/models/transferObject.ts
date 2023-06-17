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
import { Currencies, currenciesSchema } from './currencies';
import { FxRate, fxRateSchema } from './fxRate';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import { TransferStatuses, transferStatusesSchema } from './transferStatuses';

/** transfer object */
export interface TransferObject {
  /** [Token](#/rest/models/structures/token) representing the resource */
  token?: string;
  /** [Unique value](#/rest/models/structures/client-transfer-id) provided by the client for the transfer, utilized for reference and deduplication. */
  clientTransferId?: string;
  /** Time object was [created](#/rest/models/structures/created-on)(#/rest/models/structures/created-on) */
  created?: string;
  /** Allocated money to be sent in the transaction. */
  destinationAmount?: number;
  /** [Currency code type](#/rest/models/structures/country) for the object */
  destinationCurrency?: Currencies;
  /** Unique identifier representing the [destination of funds](#/rest/models/structures/destination-token) */
  destinationToken?: string;
  /** Exchange rate */
  fxRate?: FxRate;
  /** Optional internal [memo](#/rest/models/structures/memo) not visible to the user */
  memo?: string;
  /** [Optional comments](#/rest/models/structures/notes) visible to the user */
  note?: string;
  /** Unique identifier representing the [source of funds](#/rest/models/structures/source-token) */
  sourceToken?: string;
  /** Current status of a [transfer](#/rest/models/structures/transfer) */
  status?: TransferStatuses;
  /** Auto-generated unique identifier representing a receipt, prefixed with `rcpt-`. */
  receiptToken?: string;
  links?: HateoasSelfRef[];
  [key: string]: unknown;
}

export const transferObjectSchema: Schema<TransferObject> = expandoObject({
  token: ['token', optional(string())],
  clientTransferId: ['clientTransferId', optional(string())],
  created: ['created', optional(string())],
  destinationAmount: ['destinationAmount', optional(number())],
  destinationCurrency: ['destinationCurrency', optional(currenciesSchema)],
  destinationToken: ['destinationToken', optional(string())],
  fxRate: ['fxRate', optional(lazy(() => fxRateSchema))],
  memo: ['memo', optional(string())],
  note: ['note', optional(string())],
  sourceToken: ['sourceToken', optional(string())],
  status: ['status', optional(transferStatusesSchema)],
  receiptToken: ['receiptToken', optional(string())],
  links: ['links', optional(array(lazy(() => hateoasSelfRefSchema)))],
});
