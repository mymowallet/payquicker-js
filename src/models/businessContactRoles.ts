/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BusinessContactRoles
 */
export enum BusinessContactRoles {
  MANAGER = 'MANAGER',
  OTHER = 'OTHER',
  OWNER = 'OWNER',
  PARTNER = 'PARTNER',
}

/**
 * Schema for BusinessContactRoles
 */
export const businessContactRolesSchema: Schema<BusinessContactRoles> = stringEnum(BusinessContactRoles);
