/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for EventStatuses
 */
export enum EventStatuses {
  UNDEFINED = 'UNDEFINED',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
  INPROGRESS = 'IN_PROGRESS',
  PENDING = 'PENDING',
  SUSPENDED = 'SUSPENDED',
}

/**
 * Schema for EventStatuses
 */
export const eventStatusesSchema: Schema<EventStatuses> = stringEnum(EventStatuses);
