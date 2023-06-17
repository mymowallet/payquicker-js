/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for UserImpact
 */
export enum UserImpact {
  NOIMPACT = 'NO_IMPACT',
  USERRESTRICTIONS = 'USER_RESTRICTIONS',
  USERSUSPENDED = 'USER_SUSPENDED',
  USERPENDINGREGISTRATION = 'USER_PENDING_REGISTRATION',
  USERCLOSED = 'USER_CLOSED',
}

/**
 * Schema for UserImpact
 */
export const userImpactSchema: Schema<UserImpact> = stringEnum(UserImpact);
