/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CreateOrUpdateWebhook,
  createOrUpdateWebhookSchema,
} from '../models/createOrUpdateWebhook';
import { Languages, languagesSchema } from '../models/languages';
import {
  WebhookSubscriptionListResult,
  webhookSubscriptionListResultSchema,
} from '../models/webhookSubscriptionListResult';
import {
  WebhookSubscriptionResult,
  webhookSubscriptionResultSchema,
} from '../models/webhookSubscriptionResult';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class WebhooksController extends BaseController {
  /**
   * Retrieve a list of all [webhook subscriptions](page:working-with-resources/webhooks) that supports
   * filtering, sorting, and pagination through existing mechanisms
   *
   *
   * @param page     Page number of specific page to return
   * @param pageSize Number of items to be displayed per page
   * @param filter   Filter request results by specific criteria.
   * @param sort     Sort request results by specific attribute.
   * @param language Filter results by language type.
   * @return Response from the API call
   */
  async listSubscriptions(
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WebhookSubscriptionListResult>> {
    const req = this.createRequest('GET', '/webhooks');
    const mapped = req.prepareArgs({
      page: [page, number()],
      pageSize: [pageSize, number()],
      filter: [filter, optional(string())],
      sort: [sort, optional(string())],
      language: [language, optional(languagesSchema)],
    });
    req.query('page', mapped.page);
    req.query('pageSize', mapped.pageSize);
    req.query('filter', mapped.filter);
    req.query('sort', mapped.sort);
    req.query('language', mapped.language);
    return req.callAsJson(webhookSubscriptionListResultSchema, requestOptions);
  }

  /**
   * Update a [webhook subscription](page:working-with-resources/webhooks).
   *
   * @param body
   * @return Response from the API call
   */
  async updateSubscription(
    body?: CreateOrUpdateWebhook,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WebhookSubscriptionResult>> {
    const req = this.createRequest('PATCH', '/webhooks');
    const mapped = req.prepareArgs({
      body: [body, optional(createOrUpdateWebhookSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(webhookSubscriptionResultSchema, requestOptions);
  }

  /**
   * Create a [webhook subscription](page:working-with-resources/webhooks).
   *
   * @param body
   * @return Response from the API call
   */
  async createSubscription(
    body?: CreateOrUpdateWebhook,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WebhookSubscriptionResult>> {
    const req = this.createRequest('POST', '/webhooks');
    const mapped = req.prepareArgs({
      body: [body, optional(createOrUpdateWebhookSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(webhookSubscriptionResultSchema, requestOptions);
  }

  /**
   * Retrieve a single [webhook subscription](page:working-with-resources/webhooks) using the webhook
   * token.
   *
   *
   * @param webhookToken  Auto-generated unique identifier representing a webhook subscription, prefixed
   *                                with `webh-`.
   * @return Response from the API call
   */
  async retrieveSubscription(
    webhookToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WebhookSubscriptionResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ webhookToken: [webhookToken, string()] });
    req.appendTemplatePath`/webhooks/${mapped.webhookToken}`;
    return req.callAsJson(webhookSubscriptionResultSchema, requestOptions);
  }

  /**
   * Delete a [webhook subscription](page:working-with-resources/webhooks).
   *
   *
   * @param webhookToken  Auto-generated unique identifier representing a webhook subscription, prefixed
   *                                with `webh-`.
   * @return Response from the API call
   */
  async deleteSubscription(
    webhookToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WebhookSubscriptionResult>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ webhookToken: [webhookToken, string()] });
    req.appendTemplatePath`/webhooks/${mapped.webhookToken}`;
    return req.callAsJson(webhookSubscriptionResultSchema, requestOptions);
  }
}
