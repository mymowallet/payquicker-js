/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ReceiptStatuses
 */
export enum ReceiptStatuses {
  UNDEFINED = 'UNDEFINED',
  PENDING = 'PENDING',
  COMPLETE = 'COMPLETE',
  FAILED = 'FAILED',
  CANCELED = 'CANCELED',
  SCHEDULED = 'SCHEDULED',
  REVIEWREQUIRED = 'REVIEW_REQUIRED',
  EXPIRED = 'EXPIRED',
  REFUNDED = 'REFUNDED',
  PROCESSING = 'PROCESSING',
  REVERSED = 'REVERSED',
  UNSETTLED = 'UNSETTLED',
}

/**
 * Schema for ReceiptStatuses
 */
export const receiptStatusesSchema: Schema<ReceiptStatuses> = stringEnum(ReceiptStatuses);
