/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DocumentStatusTypes
 */
export enum DocumentStatusTypes {
  NOTPROVIDED = 'NOT_PROVIDED',
  PROVIDED = 'PROVIDED',
  UNDERREVIEW = 'UNDER_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

/**
 * Schema for DocumentStatusTypes
 */
export const documentStatusTypesSchema: Schema<DocumentStatusTypes> = stringEnum(DocumentStatusTypes);
