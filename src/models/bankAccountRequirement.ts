/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import {
  BankAccountRequiredFields,
  bankAccountRequiredFieldsSchema,
} from './bankAccountRequiredFields';
import {
  BankAccountRequirementQuote,
  bankAccountRequirementQuoteSchema,
} from './bankAccountRequirementQuote';
import { Countries, countriesSchema } from './countries';
import { Currencies, currenciesSchema } from './currencies';

/** Classifies the bank account [required](#/rest/models/structures/bank-account-requirement) information */
export interface BankAccountRequirement {
  /**
   * Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.
   * The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience.
   */
  bankCountry?: Countries;
  /** [Currency code type](#/rest/models/structures/country) for the object */
  bankCurrency?: Currencies;
  quote?: BankAccountRequirementQuote;
  /**
   * Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.
   * The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience.
   */
  sourceCountry?: Countries;
  /** [Currency code type](#/rest/models/structures/country) for the object */
  sourceCurrency?: Currencies;
  requirements?: BankAccountRequiredFields[];
  [key: string]: unknown;
}

export const bankAccountRequirementSchema: Schema<BankAccountRequirement> = expandoObject(
  {
    bankCountry: ['bankCountry', optional(countriesSchema)],
    bankCurrency: ['bankCurrency', optional(currenciesSchema)],
    quote: ['quote', optional(lazy(() => bankAccountRequirementQuoteSchema))],
    sourceCountry: ['sourceCountry', optional(countriesSchema)],
    sourceCurrency: ['sourceCurrency', optional(currenciesSchema)],
    requirements: [
      'requirements',
      optional(array(lazy(() => bankAccountRequiredFieldsSchema))),
    ],
  }
);
