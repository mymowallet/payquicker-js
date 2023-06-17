/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import {
  BankAccountFields,
  bankAccountFieldsSchema,
} from './bankAccountFields';
import {
  BankAccountRequirementFormat,
  bankAccountRequirementFormatSchema,
} from './bankAccountRequirementFormat';
import {
  BankAccountRequirementValidator,
  bankAccountRequirementValidatorSchema,
} from './bankAccountRequirementValidator';
import { Translation, translationSchema } from './translation';

/** Classifies the required [bank account field](#/rest/models/structures/bank-account-required-fields) objects */
export interface BankAccountRequiredFields {
  /** Classifies the [format](#/rest/models/structures/bank-account-requirement-format) of the required information for a bank account */
  format?: BankAccountRequirementFormat;
  /** Classifies bank account [field types](#/rest/models/structures/bank-account-fields) */
  requirement?: BankAccountFields;
  /** Localized requirement description for display purposes */
  description?: Translation[];
  validators?: BankAccountRequirementValidator[];
  [key: string]: unknown;
}

export const bankAccountRequiredFieldsSchema: Schema<BankAccountRequiredFields> = expandoObject(
  {
    format: [
      'format',
      optional(lazy(() => bankAccountRequirementFormatSchema)),
    ],
    requirement: ['requirement', optional(bankAccountFieldsSchema)],
    description: [
      'description',
      optional(array(lazy(() => translationSchema))),
    ],
    validators: [
      'validators',
      optional(array(lazy(() => bankAccountRequirementValidatorSchema))),
    ],
  }
);
