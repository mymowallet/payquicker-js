/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TransferStatuses
 */
export enum TransferStatuses {
  ACCEPTED = 'ACCEPTED',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
  EXPIRED = 'EXPIRED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  PENDINGACCEPTANCE = 'PENDING_ACCEPTANCE',
  QUOTED = 'QUOTED',
  RETURNED = 'RETURNED',
  SCHEDULED = 'SCHEDULED',
  VERIFICATIONHOLD = 'VERIFICATION_HOLD',
  VOIDED = 'VOIDED',
}

/**
 * Schema for TransferStatuses
 */
export const transferStatusesSchema: Schema<TransferStatuses> = stringEnum(TransferStatuses);
