/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for UserAction
 */
export enum UserAction {
  NOACTION = 'NO_ACTION',
  UPLOADDOCUMENTS = 'UPLOAD_DOCUMENTS',
  REVISEDOCUMENTS = 'REVISE_DOCUMENTS',
}

/**
 * Schema for UserAction
 */
export const userActionSchema: Schema<UserAction> = stringEnum(UserAction);
