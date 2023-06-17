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
import { UserObject, userObjectSchema } from './userObject';

export interface UserListResult {
  payload: UserObject[];
  meta: ListMetadataObject;
  links: HateoasSelfRef[];
  [key: string]: unknown;
}

export const userListResultSchema: Schema<UserListResult> = expandoObject({
  payload: ['payload', array(lazy(() => userObjectSchema))],
  meta: ['meta', lazy(() => listMetadataObjectSchema)],
  links: ['links', array(lazy(() => hateoasSelfRefSchema))],
});
