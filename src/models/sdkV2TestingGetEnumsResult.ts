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
import { Meta, metaSchema } from './meta';

export interface SdkV2TestingGetEnumsResult {
  addresses?: string[];
  agreementTypes?: string[];
  bankAccountFields?: string[];
  bankAccountStatuses?: string[];
  bankAccountTypes?: string[];
  bankTypes?: string[];
  businessContactRoles?: string[];
  cardNetworks?: string[];
  cardProcessors?: string[];
  countries?: string[];
  currencies?: string[];
  documentTypes?: string[];
  eventCategoryTypes?: string[];
  eventRequirementCategories?: string[];
  eventRequirements?: string[];
  eventStatuses?: string[];
  eventTypes?: string[];
  feeResponsibilityParties?: string[];
  fees?: string[];
  feeSources?: string[];
  feeValueTypes?: string[];
  genders?: string[];
  governmentIds?: string[];
  identityVerificationProviders?: string[];
  identityVerificationResultTypes?: string[];
  languages?: string[];
  occupations?: string[];
  paymentPurposes?: string[];
  prepaidCardAuthorizationTypes?: string[];
  prepaidCardCapabilities?: string[];
  prepaidCardReplacementReasons?: string[];
  programTypes?: string[];
  receiptStatuses?: string[];
  signs?: string[];
  taxResidentStatuses?: string[];
  tokenPurposes?: string[];
  uploadFields?: string[];
  userTypes?: string[];
  validatorTypes?: string[];
  webhookNamespaces?: string[];
  webhookSubscriptionStatuses?: string[];
  meta?: Meta;
  [key: string]: unknown;
}

export const sdkV2TestingGetEnumsResultSchema: Schema<SdkV2TestingGetEnumsResult> = expandoObject(
  {
    addresses: ['addresses', optional(array(string()))],
    agreementTypes: ['agreementTypes', optional(array(string()))],
    bankAccountFields: ['bankAccountFields', optional(array(string()))],
    bankAccountStatuses: ['bankAccountStatuses', optional(array(string()))],
    bankAccountTypes: ['bankAccountTypes', optional(array(string()))],
    bankTypes: ['bankTypes', optional(array(string()))],
    businessContactRoles: ['businessContactRoles', optional(array(string()))],
    cardNetworks: ['cardNetworks', optional(array(string()))],
    cardProcessors: ['cardProcessors', optional(array(string()))],
    countries: ['countries', optional(array(string()))],
    currencies: ['currencies', optional(array(string()))],
    documentTypes: ['documentTypes', optional(array(string()))],
    eventCategoryTypes: ['eventCategoryTypes', optional(array(string()))],
    eventRequirementCategories: [
      'eventRequirementCategories',
      optional(array(string())),
    ],
    eventRequirements: ['eventRequirements', optional(array(string()))],
    eventStatuses: ['eventStatuses', optional(array(string()))],
    eventTypes: ['eventTypes', optional(array(string()))],
    feeResponsibilityParties: [
      'feeResponsibilityParties',
      optional(array(string())),
    ],
    fees: ['fees', optional(array(string()))],
    feeSources: ['feeSources', optional(array(string()))],
    feeValueTypes: ['feeValueTypes', optional(array(string()))],
    genders: ['genders', optional(array(string()))],
    governmentIds: ['governmentIds', optional(array(string()))],
    identityVerificationProviders: [
      'identityVerificationProviders',
      optional(array(string())),
    ],
    identityVerificationResultTypes: [
      'identityVerificationResultTypes',
      optional(array(string())),
    ],
    languages: ['languages', optional(array(string()))],
    occupations: ['occupations', optional(array(string()))],
    paymentPurposes: ['paymentPurposes', optional(array(string()))],
    prepaidCardAuthorizationTypes: [
      'prepaidCardAuthorizationTypes',
      optional(array(string())),
    ],
    prepaidCardCapabilities: [
      'prepaidCardCapabilities',
      optional(array(string())),
    ],
    prepaidCardReplacementReasons: [
      'prepaidCardReplacementReasons',
      optional(array(string())),
    ],
    programTypes: ['programTypes', optional(array(string()))],
    receiptStatuses: ['receiptStatuses', optional(array(string()))],
    signs: ['signs', optional(array(string()))],
    taxResidentStatuses: ['taxResidentStatuses', optional(array(string()))],
    tokenPurposes: ['tokenPurposes', optional(array(string()))],
    uploadFields: ['uploadFields', optional(array(string()))],
    userTypes: ['userTypes', optional(array(string()))],
    validatorTypes: ['validatorTypes', optional(array(string()))],
    webhookNamespaces: ['webhookNamespaces', optional(array(string()))],
    webhookSubscriptionStatuses: [
      'webhookSubscriptionStatuses',
      optional(array(string())),
    ],
    meta: ['meta', optional(lazy(() => metaSchema))],
  }
);
