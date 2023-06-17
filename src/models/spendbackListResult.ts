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
import { SpendbackObject, spendbackObjectSchema } from './spendbackObject';

export interface SpendbackListResult {
  payload: SpendbackObject[];
  meta: ListMetadataObject;
  links: HateoasSelfRef[];
  [key: string]: unknown;
}

export const spendbackListResultSchema: Schema<SpendbackListResult> = expandoObject(
  {
    payload: ['payload', array(lazy(() => spendbackObjectSchema))],
    meta: ['meta', lazy(() => listMetadataObjectSchema)],
    links: ['links', array(lazy(() => hateoasSelfRefSchema))],
  }
);
