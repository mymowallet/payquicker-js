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
import { Addresses, addressesSchema } from './addresses';
import {
  BusinessContactRoles,
  businessContactRolesSchema,
} from './businessContactRoles';
import { Countries, countriesSchema } from './countries';
import { Currencies, currenciesSchema } from './currencies';
import { Genders, gendersSchema } from './genders';
import { GovernmentIds, governmentIdsSchema } from './governmentIds';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import { Languages, languagesSchema } from './languages';
import { Occupations, occupationsSchema } from './occupations';
import {
  TaxResidentStatuses,
  taxResidentStatusesSchema,
} from './taxResidentStatuses';
import { UserTypes, userTypesSchema } from './userTypes';

export interface UserObject {
  /** [Token](#/rest/models/structures/token) representing the resource */
  token?: string;
  /** Address Line 1 */
  addressLine1?: string;
  /** Business address line 1 */
  businessAddressLine1?: string;
  /** Business address line 2 */
  businessAddressLine2?: string;
  /** Classifies the [address](#/rest/models/structures/address) type (*Home*, *Business*, *Billing*, *Shipping*) */
  businessAddressType?: Addresses;
  /** Business city */
  businessCity?: string;
  /** Business contact role */
  businessContactRole?: BusinessContactRoles;
  /**
   * Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.
   * The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience.
   */
  businessCountry?: Countries;
  /** Business name */
  businessName?: string;
  businessPostalCode?: string;
  /** Region that the business is based out of */
  businessRegion?: string;
  city?: string;
  /**
   * Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.
   * The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience.
   */
  country?: Countries;
  /**
   * Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.
   * The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience.
   */
  countryOfBirth?: Countries;
  /**
   * Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.
   * The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience.
   */
  countryOfNationality?: Countries;
  /** Time object was [created](#/rest/models/structures/created-on)(#/rest/models/structures/created-on) */
  createdOn?: string;
  /** [Currency code type](#/rest/models/structures/country) for the object */
  currency?: Currencies;
  dateOfBirth?: string;
  /** Contact [email address](#/rest/models/structures/email-address) for the user account for the user account */
  email?: string;
  /** Employer id */
  employerId?: string;
  /** First name */
  firstName?: string;
  /** [Gender](#/rest/models/structures/gender) as a user identifies */
  gender?: Genders;
  governmentId?: string;
  /** Indicates the type of ID submitted for user verification purposes. */
  governmentIdType?: GovernmentIds;
  /** The [Language](#/rest/models/structures/language) type in IETF's BCP 47 format */
  language?: Languages;
  /** Last name */
  lastName?: string;
  mailingAddressLine1?: string;
  mailingCity?: string;
  /**
   * Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.
   * The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience.
   */
  mailingCountry?: Countries;
  mailingPostalCode?: string;
  mailingRegion?: string;
  mobileNumber?: string;
  /**
   * Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.
   * The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience.
   */
  mobileNumberCountry?: Countries;
  occupationTitle?: string;
  /** [Type of occupation](#/rest/models/structures/occupation) for the user */
  occupationType?: Occupations;
  phoneNumber?: string;
  /**
   * Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.
   * The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience.
   */
  phoneNumberCountry?: Countries;
  postalCode?: string;
  /** [Program identifier](#/rest/models/structures/program-user-id) for the user */
  programUserId?: string;
  region?: string;
  /** Tax [resident status type](#/rest/models/structures/tax-resident-status) */
  taxResidentStatus?: TaxResidentStatuses;
  /** Account holder's profile [type](#/rest/models/structures/user-type) */
  userType?: UserTypes;
  links?: HateoasSelfRef[];
  [key: string]: unknown;
}

export const userObjectSchema: Schema<UserObject> = expandoObject({
  token: ['token', optional(string())],
  addressLine1: ['addressLine1', optional(string())],
  businessAddressLine1: ['businessAddressLine1', optional(string())],
  businessAddressLine2: ['businessAddressLine2', optional(string())],
  businessAddressType: ['businessAddressType', optional(addressesSchema)],
  businessCity: ['businessCity', optional(string())],
  businessContactRole: [
    'businessContactRole',
    optional(businessContactRolesSchema),
  ],
  businessCountry: ['businessCountry', optional(countriesSchema)],
  businessName: ['businessName', optional(string())],
  businessPostalCode: ['businessPostalCode', optional(string())],
  businessRegion: ['businessRegion', optional(string())],
  city: ['city', optional(string())],
  country: ['country', optional(countriesSchema)],
  countryOfBirth: ['countryOfBirth', optional(countriesSchema)],
  countryOfNationality: ['countryOfNationality', optional(countriesSchema)],
  createdOn: ['createdOn', optional(string())],
  currency: ['currency', optional(currenciesSchema)],
  dateOfBirth: ['dateOfBirth', optional(string())],
  email: ['email', optional(string())],
  employerId: ['employerId', optional(string())],
  firstName: ['firstName', optional(string())],
  gender: ['gender', optional(gendersSchema)],
  governmentId: ['governmentId', optional(string())],
  governmentIdType: ['governmentIdType', optional(governmentIdsSchema)],
  language: ['language', optional(languagesSchema)],
  lastName: ['lastName', optional(string())],
  mailingAddressLine1: ['mailingAddressLine1', optional(string())],
  mailingCity: ['mailingCity', optional(string())],
  mailingCountry: ['mailingCountry', optional(countriesSchema)],
  mailingPostalCode: ['mailingPostalCode', optional(string())],
  mailingRegion: ['mailingRegion', optional(string())],
  mobileNumber: ['mobileNumber', optional(string())],
  mobileNumberCountry: ['mobileNumberCountry', optional(countriesSchema)],
  occupationTitle: ['occupationTitle', optional(string())],
  occupationType: ['occupationType', optional(occupationsSchema)],
  phoneNumber: ['phoneNumber', optional(string())],
  phoneNumberCountry: ['phoneNumberCountry', optional(countriesSchema)],
  postalCode: ['postalCode', optional(string())],
  programUserId: ['programUserId', optional(string())],
  region: ['region', optional(string())],
  taxResidentStatus: ['taxResidentStatus', optional(taxResidentStatusesSchema)],
  userType: ['userType', optional(userTypesSchema)],
  links: ['links', optional(array(lazy(() => hateoasSelfRefSchema)))],
});
