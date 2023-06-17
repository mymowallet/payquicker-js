/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for EventTypes
 */
export enum EventTypes {
  REQUIRED = 'REQUIRED',
  OPTIONAL = 'OPTIONAL',
}

/**
 * Schema for EventTypes
 */
export const eventTypesSchema: Schema<EventTypes> = stringEnum(EventTypes);
