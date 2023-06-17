/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for WebhookSubscriptionStatuses
 */
export enum WebhookSubscriptionStatuses {
  AVAILABLE = 'AVAILABLE',
  SUBSCRIBED = 'SUBSCRIBED',
  UNSUBSCRIBED = 'UNSUBSCRIBED',
  UNDEFINED = 'UNDEFINED',
}

/**
 * Schema for WebhookSubscriptionStatuses
 */
export const webhookSubscriptionStatusesSchema: Schema<WebhookSubscriptionStatuses> = stringEnum(WebhookSubscriptionStatuses);
