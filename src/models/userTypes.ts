/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for UserTypes
 */
export enum UserTypes {
  BUSINESS = 'BUSINESS',
  INDIVIDUAL = 'INDIVIDUAL',
}

/**
 * Schema for UserTypes
 */
export const userTypesSchema: Schema<UserTypes> = stringEnum(UserTypes);
