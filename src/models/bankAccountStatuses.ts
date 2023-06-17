/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BankAccountStatuses
 */
export enum BankAccountStatuses {
  ACTIVE = 'ACTIVE',
  DELETED = 'DELETED',
  PENDINGVERIFICATION = 'PENDING_VERIFICATION',
  VERIFIED = 'VERIFIED',
  UNKNOWN = 'UNKNOWN',
}

/**
 * Schema for BankAccountStatuses
 */
export const bankAccountStatusesSchema: Schema<BankAccountStatuses> = stringEnum(BankAccountStatuses);
