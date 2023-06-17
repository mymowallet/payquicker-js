/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { Currencies, currenciesSchema } from './currencies';
import { PaymentPurposes, paymentPurposesSchema } from './paymentPurposes';

export interface CreatePaymentQuote {
  /** Allocated money to be sent in the transaction. */
  amount?: number;
  /** [Currency code type](#/rest/models/structures/country) for the object */
  currency?: Currencies;
  /** Unique identifier representing the [source of funds](#/rest/models/structures/source-token) */
  sourceToken?: string;
  /** Unique identifier representing the [destination of funds](#/rest/models/structures/destination-token) */
  destinationToken?: string;
  /** [Optional comments](#/rest/models/structures/notes) visible to the user */
  note?: string;
  /** Optional internal [memo](#/rest/models/structures/memo) not visible to the user */
  memo?: string;
  /** Used to identify the [purpose of a payment](#/models/structures/payment-object) and impacts reporting and calculated taxable earnings (if utilizing tax services) */
  purpose?: PaymentPurposes;
  /** Unique value provided by the client for the [payment](page:working-with-resources/payments), utilized for reference and deduplication. */
  clientPaymentId?: string;
  /** Determines whether the quote is [automatically accepted](#/rest/models/structures/auto-accept-quote) or if a `POST` utilizing the token for the quote is required. */
  autoAcceptQuote?: boolean;
  /** [Transfer](#/rest/models/structures/not-before-or-after) is scheduled and will not process before this time. */
  notBefore?: string;
  /** [Transfer](#/rest/models/structures/not-before-or-after) expires if not completed prior to this time. */
  notAfter?: string;
  [key: string]: unknown;
}

export const createPaymentQuoteSchema: Schema<CreatePaymentQuote> = expandoObject(
  {
    amount: ['amount', optional(number())],
    currency: ['currency', optional(currenciesSchema)],
    sourceToken: ['sourceToken', optional(string())],
    destinationToken: ['destinationToken', optional(string())],
    note: ['note', optional(string())],
    memo: ['memo', optional(string())],
    purpose: ['purpose', optional(paymentPurposesSchema)],
    clientPaymentId: ['clientPaymentId', optional(string())],
    autoAcceptQuote: ['autoAcceptQuote', optional(boolean())],
    notBefore: ['notBefore', optional(string())],
    notAfter: ['notAfter', optional(string())],
  }
);
