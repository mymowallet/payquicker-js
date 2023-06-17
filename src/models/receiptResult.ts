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
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import { MetadataObject, metadataObjectSchema } from './metadataObject';
import {
  ReceiptDescriptions,
  receiptDescriptionsSchema,
} from './receiptDescriptions';
import { ReceiptDetails, receiptDetailsSchema } from './receiptDetails';
import { ReceiptStatuses, receiptStatusesSchema } from './receiptStatuses';
import { Signs, signsSchema } from './signs';
import { TransferTypes, transferTypesSchema } from './transferTypes';

export interface ReceiptResult {
  /** Auto-generated unique identifier representing a receipt, prefixed with `rcpt-`. */
  token?: string;
  /** [Transfer type](#/rest/models/structures/transfer-type) */
  type?: TransferTypes;
  /** Time object was [created](#/rest/models/structures/created-on)(#/rest/models/structures/created-on) */
  createdOn?: string;
  /** Receipt sign types */
  sign?: Signs;
  /** Unique identifier representing the [source of funds](#/rest/models/structures/source-token) */
  sourceToken?: string;
  /** Unique identifier representing the [destination of funds](#/rest/models/structures/destination-token) */
  destinationToken?: string;
  /** Allocated money to be sent in the transaction. */
  amount?: number;
  /** [Currency code type](#/rest/models/structures/country) for the object */
  currency?: Currencies;
  /** Receipt status types */
  status?: ReceiptStatuses;
  descriptions?: ReceiptDescriptions[];
  details?: ReceiptDetails;
  links?: HateoasSelfRef[];
  meta?: MetadataObject;
  [key: string]: unknown;
}

export const receiptResultSchema: Schema<ReceiptResult> = expandoObject({
  token: ['token', optional(string())],
  type: ['type', optional(transferTypesSchema)],
  createdOn: ['createdOn', optional(string())],
  sign: ['sign', optional(signsSchema)],
  sourceToken: ['sourceToken', optional(string())],
  destinationToken: ['destinationToken', optional(string())],
  amount: ['amount', optional(number())],
  currency: ['currency', optional(currenciesSchema)],
  status: ['status', optional(receiptStatusesSchema)],
  descriptions: [
    'descriptions',
    optional(array(lazy(() => receiptDescriptionsSchema))),
  ],
  details: ['details', optional(lazy(() => receiptDetailsSchema))],
  links: ['links', optional(array(lazy(() => hateoasSelfRefSchema)))],
  meta: ['meta', optional(lazy(() => metadataObjectSchema))],
});
