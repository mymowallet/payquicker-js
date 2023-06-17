/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for EventRequirements
 */
export enum EventRequirements {
  ACHUPGRADEPIIDETAILSVALIDATED = 'ACH_UPGRADE_PII_DETAILS_VALIDATED',
  AGREEMENTSACCEPTED = 'AGREEMENTS_ACCEPTED',
  DOCUMENTSREQUIRED = 'DOCUMENTS_REQUIRED',
  EMAILADDRESSVERIFIED = 'EMAIL_ADDRESS_VERIFIED',
  FINANCIALPROCESSORACCOUNTCREATED = 'FINANCIAL_PROCESSOR_ACCOUNT_CREATED',
  IDENTITYVERIFIED = 'IDENTITY_VERIFIED',
  MFAREGISTRATIONCANCELLED = 'MFA_REGISTRATION_CANCELLED',
  MFAREGISTRATIONCHALLENGESENT = 'MFA_REGISTRATION_CHALLENGE_SENT',
  MFAREGISTRATIONCOMPLETED = 'MFA_REGISTRATION_COMPLETED',
  MFAREGISTRATIONPIICOLLECTED = 'MFA_REGISTRATION_PII_COLLECTED',
  MFAREGISTRATIONPROCESSORREGISTRATION = 'MFA_REGISTRATION_PROCESSOR_REGISTRATION',
  MFAREGISTRATIONTYPECHANGED = 'MFA_REGISTRATION_TYPE_CHANGED',
  MFAREGISTRATIONVALIDATION = 'MFA_REGISTRATION_VALIDATION',
  ORDERPLASTICCARD = 'ORDER_PLASTIC_CARD',
  PEPSANCTIONSSCREENINGVERIFIED = 'PEP_SANCTIONS_SCREENING_VERIFIED',
  PERSONALDETAILSCOLLECTED = 'PERSONAL_DETAILS_COLLECTED',
  PROCESSEXECUTED = 'PROCESS_EXECUTED',
  TYPEUNDEFINED = 'TYPE_UNDEFINED',
  USERCREATED = 'USER_CREATED',
}

/**
 * Schema for EventRequirements
 */
export const eventRequirementsSchema: Schema<EventRequirements> = stringEnum(EventRequirements);