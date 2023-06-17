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
import { CardNetworks, cardNetworksSchema } from './cardNetworks';
import { Countries, countriesSchema } from './countries';
import { Currencies, currenciesSchema } from './currencies';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import { MetadataObject, metadataObjectSchema } from './metadataObject';
import {
  PrepaidCardCapabilities,
  prepaidCardCapabilitiesSchema,
} from './prepaidCardCapabilities';
import {
  PrepaidCardStatuses,
  prepaidCardStatusesSchema,
} from './prepaidCardStatuses';

export interface PrepaidCardResult {
  /** [Token](#/rest/models/structures/token) representing the resource */
  token?: string;
  /** Major [credit card network](#/rest/models/structures/card-network) types */
  cardNetwork?: CardNetworks;
  /** Unique number on the prepaid card */
  cardNumber?: string;
  /** [Package](#/rest/models/structures/prepaid-card-package) for the card being displayed, including artwork, packaging, and delivery method */
  cardPackage?: string;
  /**
   * Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.
   * The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience.
   */
  country?: Countries;
  /** Time object was [created](#/rest/models/structures/created-on)(#/rest/models/structures/created-on) */
  createdOn?: string;
  /** [Currency code type](#/rest/models/structures/country) for the object */
  currency?: Currencies;
  /** Three- or four-digit [Card Verification Value (CVV)](#/rest/models/structures/cvv) number displayed on the back of a credit or debit card */
  cvv?: string;
  /** Date and time the object will [expire](#/rest/models/structures/expiration) */
  expires?: string;
  /** Current [status](#/rest/models/structures/prepaid-card-status) of the prepaid card */
  status?: PrepaidCardStatuses;
  bankInDetails?: BankAccountField[];
  capabilities?: PrepaidCardCapabilities[];
  /** Auto-generated unique identifier representing a user, prefixed with `user-`. */
  userToken?: string;
  links?: HateoasSelfRef[];
  meta?: MetadataObject;
  [key: string]: unknown;
}

export const prepaidCardResultSchema: Schema<PrepaidCardResult> = expandoObject(
  {
    token: ['token', optional(string())],
    cardNetwork: ['cardNetwork', optional(cardNetworksSchema)],
    cardNumber: ['cardNumber', optional(string())],
    cardPackage: ['cardPackage', optional(string())],
    country: ['country', optional(countriesSchema)],
    createdOn: ['createdOn', optional(string())],
    currency: ['currency', optional(currenciesSchema)],
    cvv: ['cvv', optional(string())],
    expires: ['expires', optional(string())],
    status: ['status', optional(prepaidCardStatusesSchema)],
    bankInDetails: [
      'bankInDetails',
      optional(array(lazy(() => bankAccountFieldSchema))),
    ],
    capabilities: [
      'capabilities',
      optional(array(prepaidCardCapabilitiesSchema)),
    ],
    userToken: ['userToken', optional(string())],
    links: ['links', optional(array(lazy(() => hateoasSelfRefSchema)))],
    meta: ['meta', optional(lazy(() => metadataObjectSchema))],
  }
);
