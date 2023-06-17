/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema';
import {
  HateoasRelationship,
  hateoasRelationshipSchema,
} from './hateoasRelationship';

/** Indicates the external link with the full URL of the same page on which the link appears. */
export interface HateoasSelfRef {
  href?: string;
  /** Indicates the HATEOS relationship between the target and current resources. */
  params?: HateoasRelationship;
  [key: string]: unknown;
}

export const hateoasSelfRefSchema: Schema<HateoasSelfRef> = expandoObject({
  href: ['href', optional(string())],
  params: ['params', optional(lazy(() => hateoasRelationshipSchema))],
});
