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
import { Document, documentSchema } from './document';

export interface UserDocumentRequirement {
  countryOfBirth?: string;
  countryOfNationality?: string;
  documents?: Document[];
  [key: string]: unknown;
}

export const userDocumentRequirementSchema: Schema<UserDocumentRequirement> = expandoObject(
  {
    countryOfBirth: ['countryOfBirth', optional(string())],
    countryOfNationality: ['countryOfNationality', optional(string())],
    documents: ['documents', optional(array(lazy(() => documentSchema)))],
  }
);
