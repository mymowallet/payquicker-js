/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TokenPurposes
 */
export enum TokenPurposes {
  UserTokenPurposeTypeCardReveal = 'UserTokenPurposeType_CardReveal',
  UserTokenPurposeTypeCardRevealSensitiveDataOverlay = 'UserTokenPurposeType_CardRevealSensitiveDataOverlay',
  UserTokenPurposeTypeGetOrSetCardPin = 'UserTokenPurposeType_GetOrSetCardPin',
  UserTokenPurposeTypeSensitiveData = 'UserTokenPurposeType_SensitiveData',
  UserTokenPurposeTypeUNDEFINED = 'UserTokenPurposeType_UNDEFINED',
  UserTokenPurposeTypeGetPrepaidCardData = 'UserTokenPurposeType_GetPrepaidCardData',
}

/**
 * Schema for TokenPurposes
 */
export const tokenPurposesSchema: Schema<TokenPurposes> = stringEnum(TokenPurposes);
