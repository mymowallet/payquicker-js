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
import { Translation, translationSchema } from './translation';

/** Classifies the [legend format](#/rest/models/structures/bank-account-requirement-format-legend) of the required information for a bank account */
export interface BankAccountRequirementFormatLegend {
  key?: string;
  /** Localized requirement description for display purposes */
  descriptions?: Translation[];
  [key: string]: unknown;
}

export const bankAccountRequirementFormatLegendSchema: Schema<BankAccountRequirementFormatLegend> = expandoObject(
  {
    key: ['key', optional(string())],
    descriptions: [
      'descriptions',
      optional(array(lazy(() => translationSchema))),
    ],
  }
);
