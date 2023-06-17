/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';
import { ValidatorTypes, validatorTypesSchema } from './validatorTypes';

/** [Validator type](#/rest/models/structures/bank-account-requirement-validator) that for the required bank account information. */
export interface BankAccountRequirementValidator {
  /** [Validator types](#/rest/models/structures/bank-account-requirement-validator) for the required bank account information. */
  validatorType?: ValidatorTypes;
  /** Validation regular expression */
  expression: string;
  [key: string]: unknown;
}

export const bankAccountRequirementValidatorSchema: Schema<BankAccountRequirementValidator> = expandoObject(
  {
    validatorType: ['validatorType', optional(validatorTypesSchema)],
    expression: ['expression', string()],
  }
);
