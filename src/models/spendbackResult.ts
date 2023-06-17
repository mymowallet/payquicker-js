/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
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
import { PaymentPurposes, paymentPurposesSchema } from './paymentPurposes';
import { SpendbackFee, spendbackFeeSchema } from './spendbackFee';
import { TransferStatuses, transferStatusesSchema } from './transferStatuses';

export interface SpendbackResult {
  /** [Token](#/rest/models/structures/token) representing the resource */
  token?: string;
  /** Allocated money to be sent in the transaction. */
  amount?: number;
  /** Determines whether the quote is [automatically accepted](#/rest/models/structures/auto-accept-quote) or if a `POST` utilizing the token for the quote is required. */
  autoAcceptQuote?: boolean;
  /** [Unique value](#/rest/models/structures/client-transfer-id) provided by the client for the spendback */
  clientSpendbackId?: string;
  /** Time object was [created](#/rest/models/structures/created-on)(#/rest/models/structures/created-on) */
  created?: string;
  /** [Currency code type](#/rest/models/structures/country) for the object */
  currency?: Currencies;
  /** Unique identifier representing the [destination of funds](#/rest/models/structures/destination-token) */
  destinationToken?: string;
  fee?: SpendbackFee;
  /** Optional internal [memo](#/rest/models/structures/memo) not visible to the user */
  memo?: string;
  /** [Optional comments](#/rest/models/structures/notes) visible to the user */
  note?: string;
  /** Used to identify the [purpose of a payment](#/models/structures/payment-object) and impacts reporting and calculated taxable earnings (if utilizing tax services) */
  purpose?: PaymentPurposes;
  /** Unique identifier representing the [source of funds](#/rest/models/structures/source-token) */
  sourceToken?: string;
  /** Current status of a [transfer](#/rest/models/structures/transfer) */
  status?: TransferStatuses;
  /** Auto-generated unique identifier representing a receipt, prefixed with `rcpt-`. */
  receiptToken?: string;
  links?: HateoasSelfRef[];
  meta?: MetadataObject;
  [key: string]: unknown;
}

export const spendbackResultSchema: Schema<SpendbackResult> = expandoObject({
  token: ['token', optional(string())],
  amount: ['amount', optional(number())],
  autoAcceptQuote: ['autoAcceptQuote', optional(boolean())],
  clientSpendbackId: ['clientSpendbackId', optional(string())],
  created: ['created', optional(string())],
  currency: ['currency', optional(currenciesSchema)],
  destinationToken: ['destinationToken', optional(string())],
  fee: ['fee', optional(lazy(() => spendbackFeeSchema))],
  memo: ['memo', optional(string())],
  note: ['note', optional(string())],
  purpose: ['purpose', optional(paymentPurposesSchema)],
  sourceToken: ['sourceToken', optional(string())],
  status: ['status', optional(transferStatusesSchema)],
  receiptToken: ['receiptToken', optional(string())],
  links: ['links', optional(array(lazy(() => hateoasSelfRefSchema)))],
  meta: ['meta', optional(lazy(() => metadataObjectSchema))],
});
