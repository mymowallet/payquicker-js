/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for EventCategoryTypes
 */
export enum EventCategoryTypes {
  WALLETREGISTRATION = 'WALLET_REGISTRATION',
  PREPAIDCARDREGISTRATION = 'PREPAID_CARD_REGISTRATION',
  UPDATEREGISTRATION = 'UPDATE_REGISTRATION',
}

/**
 * Schema for EventCategoryTypes
 */
export const eventCategoryTypesSchema: Schema<EventCategoryTypes> = stringEnum(EventCategoryTypes);
