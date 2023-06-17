/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';
import {
  BankAccountFields,
  bankAccountFieldsSchema,
} from './bankAccountFields';

export interface ReceiptDetails {
  /** Bank account ID for the bank account */
  bankAccountId?: string;
  /** Classifies bank account [field types](#/rest/models/structures/bank-account-fields) */
  bankAccountIdType?: BankAccountFields;
  /** Name of the bank the account is registered to */
  bankName?: string;
  /** The name of the person chosen to inherit your account */
  beneficaryName?: string;
  /** Optional internal [memo](#/rest/models/structures/memo) not visible to the user */
  memo?: string;
  /** [Optional comments](#/rest/models/structures/notes) visible to the user */
  note?: string;
  /** [Token](#/rest/models/structures/token) representing the resource */
  correlationToken?: string;
  /** Date that the card will expire */
  cardExpiryDate?: string;
  /** Name of the card's owner */
  cardHolderName?: string;
  /** Unique number on the prepaid card */
  cardNumber?: string;
  [key: string]: unknown;
}

export const receiptDetailsSchema: Schema<ReceiptDetails> = expandoObject({
  bankAccountId: ['bankAccountId', optional(string())],
  bankAccountIdType: ['bankAccountIdType', optional(bankAccountFieldsSchema)],
  bankName: ['bankName', optional(string())],
  beneficaryName: ['beneficaryName', optional(string())],
  memo: ['memo', optional(string())],
  note: ['note', optional(string())],
  correlationToken: ['correlationToken', optional(string())],
  cardExpiryDate: ['cardExpiryDate', optional(string())],
  cardHolderName: ['cardHolderName', optional(string())],
  cardNumber: ['cardNumber', optional(string())],
});
