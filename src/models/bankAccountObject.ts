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
import {
  BankAccountStatuses,
  bankAccountStatusesSchema,
} from './bankAccountStatuses';
import { BankAccountTypes, bankAccountTypesSchema } from './bankAccountTypes';
import { Countries, countriesSchema } from './countries';
import { Currencies, currenciesSchema } from './currencies';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';

/** Unique identifier for the [bank account](#/rest/models/enumerations/bank-account-types) */
export interface BankAccountObject {
  /** Unique identifier representing the [destination of funds](#/rest/models/structures/destination-token) */
  token?: string;
  /** Account [ownership types](#/rest/models/structures/bank-account-ownership) */
  bankAccountOwnershipType?: BankAccountOwnership;
  /**
   * Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.
   * The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience.
   */
  bankCountry?: Countries;
  /** [Currency code type](#/rest/models/structures/country) for the object */
  bankCurrency?: Currencies;
  /** Time object was [created](#/rest/models/structures/created-on)(#/rest/models/structures/created-on) */
  createdOn?: string;
  /** User-supplied description of the bank account for reference */
  description?: string;
  fields?: BankAccountField[];
  /** Current verification status type of the [bank account](#/rest/models/structures/bank-account-status) */
  status?: BankAccountStatuses;
  /** Financial purpose of the [bank account](#/rest/models/structures/bank-account-type) */
  type?: BankAccountTypes;
  links?: HateoasSelfRef[];
  [key: string]: unknown;
}

export const bankAccountObjectSchema: Schema<BankAccountObject> = expandoObject(
  {
    token: ['token', optional(string())],
    bankAccountOwnershipType: [
      'bankAccountOwnershipType',
      optional(bankAccountOwnershipSchema),
    ],
    bankCountry: ['bankCountry', optional(countriesSchema)],
    bankCurrency: ['bankCurrency', optional(currenciesSchema)],
    createdOn: ['createdOn', optional(string())],
    description: ['description', optional(string())],
    fields: ['fields', optional(array(lazy(() => bankAccountFieldSchema)))],
    status: ['status', optional(bankAccountStatusesSchema)],
    type: ['type', optional(bankAccountTypesSchema)],
    links: ['links', optional(array(lazy(() => hateoasSelfRefSchema)))],
  }
);
