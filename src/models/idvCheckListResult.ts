/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import { IdvCheckObject, idvCheckObjectSchema } from './idvCheckObject';
import {
  ListMetadataObject,
  listMetadataObjectSchema,
} from './listMetadataObject';

export interface IdvCheckListResult {
  payload: IdvCheckObject[];
  meta?: ListMetadataObject;
  links: HateoasSelfRef[];
  [key: string]: unknown;
}

export const idvCheckListResultSchema: Schema<IdvCheckListResult> = expandoObject(
  {
    payload: ['payload', array(lazy(() => idvCheckObjectSchema))],
    meta: ['meta', optional(lazy(() => listMetadataObjectSchema))],
    links: ['links', array(lazy(() => hateoasSelfRefSchema))],
  }
);
