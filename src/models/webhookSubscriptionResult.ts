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
import { MetadataObject, metadataObjectSchema } from './metadataObject';
import {
  WebhookNamespaces,
  webhookNamespacesSchema,
} from './webhookNamespaces';
import {
  WebhookSubscriptionStatuses,
  webhookSubscriptionStatusesSchema,
} from './webhookSubscriptionStatuses';

export interface WebhookSubscriptionResult {
  /** [Token](#/rest/models/structures/token) representing the resource */
  token?: string;
  /** Time object was [created](#/rest/models/structures/created-on)(#/rest/models/structures/created-on) */
  created?: string;
  /** Date and time that the object was last updated */
  lastUpdated?: string;
  /** Full path of the URI used for this object */
  url?: string;
  /** Namespace used to identify and refer to the object */
  namespace?: WebhookNamespaces;
  status?: WebhookSubscriptionStatuses;
  links?: HateoasSelfRef[];
  meta?: MetadataObject;
  [key: string]: unknown;
}

export const webhookSubscriptionResultSchema: Schema<WebhookSubscriptionResult> = expandoObject(
  {
    token: ['token', optional(string())],
    created: ['created', optional(string())],
    lastUpdated: ['lastUpdated', optional(string())],
    url: ['url', optional(string())],
    namespace: ['namespace', optional(webhookNamespacesSchema)],
    status: ['status', optional(webhookSubscriptionStatusesSchema)],
    links: ['links', optional(array(lazy(() => hateoasSelfRefSchema)))],
    meta: ['meta', optional(lazy(() => metadataObjectSchema))],
  }
);
