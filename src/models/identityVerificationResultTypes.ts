/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for IdentityVerificationResultTypes
 */
export enum IdentityVerificationResultTypes {
  PASS = 'PASS',
  SERVICEOFFLINE = 'SERVICE_OFFLINE',
  FAIL = 'FAIL',
  PROCESSING = 'PROCESSING',
  UNDEFINED = 'UNDEFINED',
  NOTYETEXECUTED = 'NOTYETEXECUTED',
  EXPIRED = 'EXPIRED',
}

/**
 * Schema for IdentityVerificationResultTypes
 */
export const identityVerificationResultTypesSchema: Schema<IdentityVerificationResultTypes> = stringEnum(IdentityVerificationResultTypes);
