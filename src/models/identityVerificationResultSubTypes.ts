/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for IdentityVerificationResultSubTypes
 */
export enum IdentityVerificationResultSubTypes {
  HARD = 'HARD',
  SOFT = 'SOFT',
}

/**
 * Schema for IdentityVerificationResultSubTypes
 */
export const identityVerificationResultSubTypesSchema: Schema<IdentityVerificationResultSubTypes> = stringEnum(IdentityVerificationResultSubTypes);
