/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import {
  IdentityVerificationProviders,
  identityVerificationProvidersSchema,
} from './identityVerificationProviders';
import {
  IdentityVerificationResultSubTypes,
  identityVerificationResultSubTypesSchema,
} from './identityVerificationResultSubTypes';
import {
  IdentityVerificationResultTypes,
  identityVerificationResultTypesSchema,
} from './identityVerificationResultTypes';

export interface IdvCheckObject {
  /** [Token](#/rest/models/structures/token) representing the resource */
  token?: string;
  /** [Provider reference](#/rest/models/structures/identity-verification-provider-reference) used for performing identity checks for the provider */
  idvProviderReference?: string;
  /** Result type of [verification](#/rest/models/structures/identity-verification-result-type) */
  idvResult?: IdentityVerificationResultTypes;
  /** Sub result type of [verification](#/rest/models/structures/identity-verification-sub-result-type) */
  idvSubResult?: IdentityVerificationResultSubTypes;
  /** Provider types of [verification](#/rest/models/structures/identity-verification-provider-type) that can be used for performing identity checks */
  idvProvider?: IdentityVerificationProviders;
  /** Time object was [created](#/rest/models/structures/created-on)(#/rest/models/structures/created-on) */
  createdOn?: string;
  /** Contains the raw (unprocessed) [output](/#/rest/models/structures/identity-verification-provider-raw-output) from the IDV provider */
  raw?: string;
  /** [Type](#/rest/models/structures/identity-verification-check-type) of verification used for performing an identity check */
  idvCheckType?: string;
  /** Disposition type of [verification](#/rest/models/structures/identity-verification-disposition-type) */
  idvDisposition?: string;
  links?: HateoasSelfRef[];
  [key: string]: unknown;
}

export const idvCheckObjectSchema: Schema<IdvCheckObject> = expandoObject({
  token: ['token', optional(string())],
  idvProviderReference: ['idvProviderReference', optional(string())],
  idvResult: ['idvResult', optional(identityVerificationResultTypesSchema)],
  idvSubResult: [
    'idvSubResult',
    optional(identityVerificationResultSubTypesSchema),
  ],
  idvProvider: ['idvProvider', optional(identityVerificationProvidersSchema)],
  createdOn: ['createdOn', optional(string())],
  raw: ['raw', optional(string())],
  idvCheckType: ['idvCheckType', optional(string())],
  idvDisposition: ['idvDisposition', optional(string())],
  links: ['links', optional(array(lazy(() => hateoasSelfRefSchema)))],
});
