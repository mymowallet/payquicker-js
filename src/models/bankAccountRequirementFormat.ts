/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema';
import {
  BankAccountRequirementFormatLegend,
  bankAccountRequirementFormatLegendSchema,
} from './bankAccountRequirementFormatLegend';

/** Classifies the [format](#/rest/models/structures/bank-account-requirement-format) of the required information for a bank account */
export interface BankAccountRequirementFormat {
  /** Example of a requirement generated from the validator(s) */
  example?: string;
  legend?: BankAccountRequirementFormatLegend[];
  [key: string]: unknown;
}

export const bankAccountRequirementFormatSchema: Schema<BankAccountRequirementFormat> = expandoObject(
  {
    example: ['example', optional(string())],
    legend: [
      'legend',
      optional(array(lazy(() => bankAccountRequirementFormatLegendSchema))),
    ],
  }
);
