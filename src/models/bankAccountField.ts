/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';
import {
  BankAccountFields,
  bankAccountFieldsSchema,
} from './bankAccountFields';

/** 1...N required [fields](#/rest/models/structures/key-value-pair-bank-field-types-string) as determined by call to get requirements */
export interface BankAccountField {
  /** Classifies bank account [field types](#/rest/models/structures/bank-account-fields) */
  key: BankAccountFields;
  value: string;
  [key: string]: unknown;
}

export const bankAccountFieldSchema: Schema<BankAccountField> = expandoObject({
  key: ['key', bankAccountFieldsSchema],
  value: ['value', string()],
});
