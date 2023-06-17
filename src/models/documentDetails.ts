/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';
import { UploadFields, uploadFieldsSchema } from './uploadFields';

/** 1...N required [fields](#/rest/models/structures/key-value-pair-upload-field-types-string) as determined by call to get requirements */
export interface DocumentDetails {
  key: UploadFields;
  value: string;
  [key: string]: unknown;
}

export const documentDetailsSchema: Schema<DocumentDetails> = expandoObject({
  key: ['key', uploadFieldsSchema],
  value: ['value', string()],
});
