/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';
import {
  DocumentStatusTypes,
  documentStatusTypesSchema,
} from './documentStatusTypes';
import { DocumentTypes, documentTypesSchema } from './documentTypes';

export interface SupplementalDocument {
  /** Full path of the URI used for this object */
  exampleImage?: string;
  /** Status Type of a document */
  status?: DocumentStatusTypes;
  /** Indicates the enums for KYC. */
  type?: DocumentTypes;
  [key: string]: unknown;
}

export const supplementalDocumentSchema: Schema<SupplementalDocument> = expandoObject(
  {
    exampleImage: ['exampleImage', optional(string())],
    status: ['status', optional(documentStatusTypesSchema)],
    type: ['type', optional(documentTypesSchema)],
  }
);
