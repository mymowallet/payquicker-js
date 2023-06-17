/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import {
  AuthorizationObject,
  authorizationObjectSchema,
} from './authorizationObject';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import {
  ListMetadataObject,
  listMetadataObjectSchema,
} from './listMetadataObject';

export interface AuthorizationListResult {
  payload: AuthorizationObject[];
  meta: ListMetadataObject;
  links: HateoasSelfRef[];
  [key: string]: unknown;
}

export const authorizationListResultSchema: Schema<AuthorizationListResult> = expandoObject(
  {
    payload: ['payload', array(lazy(() => authorizationObjectSchema))],
    meta: ['meta', lazy(() => listMetadataObjectSchema)],
    links: ['links', array(lazy(() => hateoasSelfRefSchema))],
  }
);
