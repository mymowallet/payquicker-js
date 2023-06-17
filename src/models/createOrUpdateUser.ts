/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';
import {
  BusinessContactRoles,
  businessContactRolesSchema,
} from './businessContactRoles';
import { Countries, countriesSchema } from './countries';
import { Currencies, currenciesSchema } from './currencies';
import { Genders, gendersSchema } from './genders';
import { GovernmentIds, governmentIdsSchema } from './governmentIds';
import { Languages, languagesSchema } from './languages';
import { Occupations, occupationsSchema } from './occupations';
import {
  TaxResidentStatuses,
  taxResidentStatusesSchema,
} from './taxResidentStatuses';
import { UserTypes, userTypesSchema } from './userTypes';

export interface CreateOrUpdateUser {
  /** [Currency code type](#/rest/models/structures/country) for the object */
  currency?: Currencies;
  /** [Program identifier](#/rest/models/structures/program-user-id) for the user */
  programUserId?: string;
  /** Contact [email address](#/rest/models/structures/email-address) for the user account for the user account */
  email?: string;
  /** First name */
  firstName?: string;
  /** Last name */
  lastName?: string;
  dateOfBirth?: string;
  /** Tax [resident status type](#/rest/models/structures/tax-resident-status) */
  taxResidentStatus?: TaxResidentStatuses;
  phoneNumber?: string;
  mobileNumber?: string;
  /**
   * Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.
   * The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience.
   */
  phoneNumberCountry?: Countries;
  /**
   * Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.
   * The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience.
   */
  mobileNumberCountry?: Countries;
  /** Address Line 1 */
  addressLine1?: string;
  city?: string;
  region?: string;
  /**
   * Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.
   * The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience.
   */
  country?: Countries;
  postalCode?: string;
  /** [Gender](#/rest/models/structures/gender) as a user identifies */
  gender?: Genders;
  /** Account holder's profile [type](#/rest/models/structures/user-type) */
  userType?: UserTypes;
  /** The [Language](#/rest/models/structures/language) type in IETF's BCP 47 format */
  language?: Languages;
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
  /** Business contact role */
  businessContactRole?: BusinessContactRoles;
  /** Indicates the type of ID submitted for user verification purposes. */
  governmentIdType?: GovernmentIds;
  governmentId?: string;
  occupationTitle?: string;
  addressLine2?: string;
  /** [Type of occupation](#/rest/models/structures/occupation) for the user */
  occupationType?: Occupations;
  mailingAddressLine1?: string;
  /**
   * Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.
   * The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience.
   */
  mailingCountry?: Countries;
  mailingCity?: string;
  mailingRegion?: string;
  mailingPostalCode?: string;
  /** Business address line 1 */
  businessAddressLine1?: string;
  /** Business address line 2 */
  businessAddressLine2?: string;
  /**
   * Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.
   * The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience.
   */
  businessCountry?: Countries;
  /** Business city */
  businessCity?: string;
  /** Region that the business is based out of */
  businessRegion?: string;
  businessPostalCode?: string;
  premiseNumber?: string;
  /** Auto-generated unique identifier representing a program, prefixed with prog- */
  programToken?: string;
  /** Auto-generated unique identifier representing a user, prefixed with `user-`. */
  primaryUserToken?: string;
  [key: string]: unknown;
}

export const createOrUpdateUserSchema: Schema<CreateOrUpdateUser> = expandoObject(
  {
    currency: ['currency', optional(currenciesSchema)],
    programUserId: ['programUserId', optional(string())],
    email: ['email', optional(string())],
    firstName: ['firstName', optional(string())],
    lastName: ['lastName', optional(string())],
    dateOfBirth: ['dateOfBirth', optional(string())],
    taxResidentStatus: [
      'taxResidentStatus',
      optional(taxResidentStatusesSchema),
    ],
    phoneNumber: ['phoneNumber', optional(string())],
    mobileNumber: ['mobileNumber', optional(string())],
    phoneNumberCountry: ['phoneNumberCountry', optional(countriesSchema)],
    mobileNumberCountry: ['mobileNumberCountry', optional(countriesSchema)],
    addressLine1: ['addressLine1', optional(string())],
    city: ['city', optional(string())],
    region: ['region', optional(string())],
    country: ['country', optional(countriesSchema)],
    postalCode: ['postalCode', optional(string())],
    gender: ['gender', optional(gendersSchema)],
    userType: ['userType', optional(userTypesSchema)],
    language: ['language', optional(languagesSchema)],
    countryOfBirth: ['countryOfBirth', optional(countriesSchema)],
    countryOfNationality: ['countryOfNationality', optional(countriesSchema)],
    businessContactRole: [
      'businessContactRole',
      optional(businessContactRolesSchema),
    ],
    governmentIdType: ['governmentIdType', optional(governmentIdsSchema)],
    governmentId: ['governmentId', optional(string())],
    occupationTitle: ['occupationTitle', optional(string())],
    addressLine2: ['addressLine2', optional(string())],
    occupationType: ['occupationType', optional(occupationsSchema)],
    mailingAddressLine1: ['mailingAddressLine1', optional(string())],
    mailingCountry: ['mailingCountry', optional(countriesSchema)],
    mailingCity: ['mailingCity', optional(string())],
    mailingRegion: ['mailingRegion', optional(string())],
    mailingPostalCode: ['mailingPostalCode', optional(string())],
    businessAddressLine1: ['businessAddressLine1', optional(string())],
    businessAddressLine2: ['businessAddressLine2', optional(string())],
    businessCountry: ['businessCountry', optional(countriesSchema)],
    businessCity: ['businessCity', optional(string())],
    businessRegion: ['businessRegion', optional(string())],
    businessPostalCode: ['businessPostalCode', optional(string())],
    premiseNumber: ['premiseNumber', optional(string())],
    programToken: ['programToken', optional(string())],
    primaryUserToken: ['primaryUserToken', optional(string())],
  }
);
