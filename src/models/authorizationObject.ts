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
import {
  PrepaidCardAuthorizations,
  prepaidCardAuthorizationsSchema,
} from './prepaidCardAuthorizations';
import { ReceiptStatuses, receiptStatusesSchema } from './receiptStatuses';
import { Signs, signsSchema } from './signs';
import { Translation, translationSchema } from './translation';

export interface AuthorizationObject {
  /** Financial types for the [prepaid card](page:working-with-resources/prepaid-cards) authorization. */
  type?: PrepaidCardAuthorizations;
  /** Time object was [created](#/rest/models/structures/created-on)(#/rest/models/structures/created-on) */
  createdOn?: string;
  /** Receipt sign types */
  sign?: Signs;
  /** Unique identifier representing the [source of funds](#/rest/models/structures/source-token) */
  sourceToken?: string;
  /** Allocated money to be sent in the transaction. */
  amount?: number;
  /** [Currency code type](#/rest/models/structures/country) for the object */
  currency?: Currencies;
  /** Receipt status types */
  status?: ReceiptStatuses;
  descriptions?: Translation[];
  /** Date that the auth was created */
  authDate?: string;
  /** [Provider reference](#/rest/models/structures/identity-verification-provider-reference) used for performing identity checks for the provider */
  reference?: string;
  [key: string]: unknown;
}

export const authorizationObjectSchema: Schema<AuthorizationObject> = expandoObject(
  {
    type: ['type', optional(prepaidCardAuthorizationsSchema)],
    createdOn: ['createdOn', optional(string())],
    sign: ['sign', optional(signsSchema)],
    sourceToken: ['sourceToken', optional(string())],
    amount: ['amount', optional(number())],
    currency: ['currency', optional(currenciesSchema)],
    status: ['status', optional(receiptStatusesSchema)],
    descriptions: [
      'descriptions',
      optional(array(lazy(() => translationSchema))),
    ],
    authDate: ['authDate', optional(string())],
    reference: ['reference', optional(string())],
  }
);
