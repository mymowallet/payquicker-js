/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ValidatorTypes
 */
export enum ValidatorTypes {
  LENGTH = 'LENGTH',
  REGEX = 'REGEX',
  RANGE = 'RANGE',
  REQUIRED = 'REQUIRED',
  UNDEFINED = 'UNDEFINED',
}

/**
 * Schema for ValidatorTypes
 */
export const validatorTypesSchema: Schema<ValidatorTypes> = stringEnum(ValidatorTypes);
