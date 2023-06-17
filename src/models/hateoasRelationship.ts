/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

/** Indicates the HATEOS relationship between the target and current resources. */
export interface HateoasRelationship {
  /** Indicates the relationship between the target and current resources. */
  rel: string;
  [key: string]: unknown;
}

export const hateoasRelationshipSchema: Schema<HateoasRelationship> = expandoObject(
  { rel: ['rel', string()] }
);
