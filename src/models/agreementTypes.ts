/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AgreementTypes
 */
export enum AgreementTypes {
  CARDHOLDERAGREEMENT = 'CARD_HOLDER_AGREEMENT',
  CARDHOLDERAGREEMENTCONSENT = 'CARD_HOLDER_AGREEMENT_CONSENT',
  CARDLIMITS = 'CARD_LIMITS',
  ESIGNANDCONSENT = 'E_SIGN_AND_CONSENT',
  FEEAGREEMENT = 'FEE_AGREEMENT',
  PRIVACYPOLICY = 'PRIVACY_POLICY',
  PRIVACYPOLICYADDENDUM = 'PRIVACY_POLICY_ADDENDUM',
  TERMSOFUSE = 'TERMS_OF_USE',
  UNDEFINED = 'UNDEFINED',
}

/**
 * Schema for AgreementTypes
 */
export const agreementTypesSchema: Schema<AgreementTypes> = stringEnum(AgreementTypes);
