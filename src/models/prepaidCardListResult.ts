/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import {
  ListMetadataObject,
  listMetadataObjectSchema,
} from './listMetadataObject';
import {
  PrepaidCardObject,
  prepaidCardObjectSchema,
} from './prepaidCardObject';

export interface PrepaidCardListResult {
  payload: PrepaidCardObject[];
  meta: ListMetadataObject;
  links: HateoasSelfRef[];
  [key: string]: unknown;
}

export const prepaidCardListResultSchema: Schema<PrepaidCardListResult> = expandoObject(
  {
    payload: ['payload', array(lazy(() => prepaidCardObjectSchema))],
    meta: ['meta', lazy(() => listMetadataObjectSchema)],
    links: ['links', array(lazy(() => hateoasSelfRefSchema))],
  }
);
