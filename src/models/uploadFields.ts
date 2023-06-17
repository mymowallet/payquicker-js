/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for UploadFields
 */
export enum UploadFields {
  EXPIRATIONDATE = 'EXPIRATION_DATE',
  STATUS = 'STATUS',
  TYPE = 'TYPE',
}

/**
 * Schema for UploadFields
 */
export const uploadFieldsSchema: Schema<UploadFields> = stringEnum(UploadFields);
