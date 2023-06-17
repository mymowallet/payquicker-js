/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PrepaidCardStatuses
 */
export enum PrepaidCardStatuses {
  ACTIVATED = 'ACTIVATED',
  CLOSED = 'CLOSED',
  CLOSEDLOSTSTOLENDAMAGED = 'CLOSED_LOST_STOLEN_DAMAGED',
  COMPLIANCEHOLD = 'COMPLIANCE_HOLD',
  EXPIRED = 'EXPIRED',
  PENDINGACTIVATION = 'PENDING_ACTIVATION',
  QUEUED = 'QUEUED',
  STAGED = 'STAGED',
  SUSPENDED = 'SUSPENDED',
}

/**
 * Schema for PrepaidCardStatuses
 */
export const prepaidCardStatusesSchema: Schema<PrepaidCardStatuses> = stringEnum(PrepaidCardStatuses);
