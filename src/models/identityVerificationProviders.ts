/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for IdentityVerificationProviders
 */
export enum IdentityVerificationProviders {
  EQUIFAX = 'EQUIFAX',
  W2 = 'W2',
  FISIDOLOGY = 'FISIDOLOGY',
  OFACANALYZER = 'OFACANALYZER',
  UNDEFINED = 'UNDEFINED',
  HOOYU = 'HOOYU',
  LEXISNEXISIVI = 'LEXISNEXISIVI',
}

/**
 * Schema for IdentityVerificationProviders
 */
export const identityVerificationProvidersSchema: Schema<IdentityVerificationProviders> = stringEnum(IdentityVerificationProviders);
