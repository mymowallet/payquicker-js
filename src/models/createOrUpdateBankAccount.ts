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
import { BankAccountField, bankAccountFieldSchema } from './bankAccountField';
import {
  BankAccountOwnership,
  bankAccountOwnershipSchema,
} from './bankAccountOwnership';
import { BankAccountTypes, bankAccountTypesSchema } from './bankAccountTypes';
import { Countries, countriesSchema } from './countries';
import { Currencies, currenciesSchema } from './currencies';

export interface CreateOrUpdateBankAccount {
  /** Account [ownership types](#/rest/models/structures/bank-account-ownership) */
  bankAccountOwnershipType?: BankAccountOwnership;
  /**
   * Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.
   * The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience.
   */
  bankCountry?: Countries;
  /** [Currency code type](#/rest/models/structures/country) for the object */
  bankCurrency?: Currencies;
  /** User-supplied description of the bank account for reference */
  description?: string;
  fields?: BankAccountField[];
  /** Financial purpose of the [bank account](#/rest/models/structures/bank-account-type) */
  type?: BankAccountTypes;
  [key: string]: unknown;
}

export const createOrUpdateBankAccountSchema: Schema<CreateOrUpdateBankAccount> = expandoObject(
  {
    bankAccountOwnershipType: [
      'bankAccountOwnershipType',
      optional(bankAccountOwnershipSchema),
    ],
    bankCountry: ['bankCountry', optional(countriesSchema)],
    bankCurrency: ['bankCurrency', optional(currenciesSchema)],
    description: ['description', optional(string())],
    fields: ['fields', optional(array(lazy(() => bankAccountFieldSchema)))],
    type: ['type', optional(bankAccountTypesSchema)],
  }
);
