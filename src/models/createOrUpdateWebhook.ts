/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';
import {
  WebhookNamespaces,
  webhookNamespacesSchema,
} from './webhookNamespaces';

export interface CreateOrUpdateWebhook {
  /** Namespace used to identify and refer to the object */
  namespace?: WebhookNamespaces;
  /** Full path of the URI used for this object */
  url?: string;
  [key: string]: unknown;
}

export const createOrUpdateWebhookSchema: Schema<CreateOrUpdateWebhook> = expandoObject(
  {
    namespace: ['namespace', optional(webhookNamespacesSchema)],
    url: ['url', optional(string())],
  }
);
