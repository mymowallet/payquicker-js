/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import { AgreementObject, agreementObjectSchema } from './agreementObject';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import {
  ListMetadataObject,
  listMetadataObjectSchema,
} from './listMetadataObject';

export interface AgreementListResult {
  payload: AgreementObject[];
  meta: ListMetadataObject;
  links: HateoasSelfRef[];
  [key: string]: unknown;
}

export const agreementListResultSchema: Schema<AgreementListResult> = expandoObject(
  {
    payload: ['payload', array(lazy(() => agreementObjectSchema))],
    meta: ['meta', lazy(() => listMetadataObjectSchema)],
    links: ['links', array(lazy(() => hateoasSelfRefSchema))],
  }
);
