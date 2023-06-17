/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import {
  BankAccountRequirement,
  bankAccountRequirementSchema,
} from './bankAccountRequirement';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import {
  ListMetadataObject,
  listMetadataObjectSchema,
} from './listMetadataObject';

export interface BankAccountRequirementListResult {
  payload?: BankAccountRequirement[];
  links?: HateoasSelfRef[];
  meta?: ListMetadataObject;
  [key: string]: unknown;
}

export const bankAccountRequirementListResultSchema: Schema<BankAccountRequirementListResult> = expandoObject(
  {
    payload: [
      'payload',
      optional(array(lazy(() => bankAccountRequirementSchema))),
    ],
    links: ['links', optional(array(lazy(() => hateoasSelfRefSchema)))],
    meta: ['meta', optional(lazy(() => listMetadataObjectSchema))],
  }
);
