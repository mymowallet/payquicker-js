/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import { BalanceObject, balanceObjectSchema } from './balanceObject';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import {
  ListMetadataObject,
  listMetadataObjectSchema,
} from './listMetadataObject';

export interface BalanceListResult {
  payload: BalanceObject[];
  meta: ListMetadataObject;
  links: HateoasSelfRef[];
  [key: string]: unknown;
}

export const balanceListResultSchema: Schema<BalanceListResult> = expandoObject(
  {
    payload: ['payload', array(lazy(() => balanceObjectSchema))],
    meta: ['meta', lazy(() => listMetadataObjectSchema)],
    links: ['links', array(lazy(() => hateoasSelfRefSchema))],
  }
);
