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
  WebhookSubscriptionObject,
  webhookSubscriptionObjectSchema,
} from './webhookSubscriptionObject';

export interface WebhookSubscriptionListResult {
  payload: WebhookSubscriptionObject[];
  meta: ListMetadataObject;
  links: HateoasSelfRef[];
  [key: string]: unknown;
}

export const webhookSubscriptionListResultSchema: Schema<WebhookSubscriptionListResult> = expandoObject(
  {
    payload: ['payload', array(lazy(() => webhookSubscriptionObjectSchema))],
    meta: ['meta', lazy(() => listMetadataObjectSchema)],
    links: ['links', array(lazy(() => hateoasSelfRefSchema))],
  }
);
