/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import { MetadataObject, metadataObjectSchema } from './metadataObject';
import {
  UserDocumentRequirement,
  userDocumentRequirementSchema,
} from './userDocumentRequirement';

export interface DocumentRequirementsListResult {
  id?: UserDocumentRequirement[];
  meta?: MetadataObject;
  [key: string]: unknown;
}

export const documentRequirementsListResultSchema: Schema<DocumentRequirementsListResult> = expandoObject(
  {
    id: ['id', optional(array(lazy(() => userDocumentRequirementSchema)))],
    meta: ['meta', optional(lazy(() => metadataObjectSchema))],
  }
);
