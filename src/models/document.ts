/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema';
import {
  DocumentStatusTypes,
  documentStatusTypesSchema,
} from './documentStatusTypes';
import { DocumentTypes, documentTypesSchema } from './documentTypes';
import { Metadatum, metadatumSchema } from './metadatum';
import {
  SupplementalDocument,
  supplementalDocumentSchema,
} from './supplementalDocument';

export interface Document {
  /** Full path of the URI used for this object */
  exampleImage?: string;
  supplementalDocuments?: SupplementalDocument[];
  metadata?: Metadatum[];
  /** Status Type of a document */
  status?: DocumentStatusTypes;
  /** Indicates the enums for KYC. */
  type?: DocumentTypes;
  [key: string]: unknown;
}

export const documentSchema: Schema<Document> = expandoObject({
  exampleImage: ['exampleImage', optional(string())],
  supplementalDocuments: [
    'supplementalDocuments',
    optional(array(lazy(() => supplementalDocumentSchema))),
  ],
  metadata: ['metadata', optional(array(lazy(() => metadatumSchema)))],
  status: ['status', optional(documentStatusTypesSchema)],
  type: ['type', optional(documentTypesSchema)],
});
