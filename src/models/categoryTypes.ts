/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CategoryTypes
 */
export enum CategoryTypes {
  COMPANY = 'COMPANY',
  USER = 'USER',
}

/**
 * Schema for CategoryTypes
 */
export const categoryTypesSchema: Schema<CategoryTypes> = stringEnum(CategoryTypes);
