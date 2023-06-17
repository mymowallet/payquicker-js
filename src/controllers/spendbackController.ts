/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CreateSpendbackQuote,
  createSpendbackQuoteSchema,
} from '../models/createSpendbackQuote';
import { Languages, languagesSchema } from '../models/languages';
import {
  OperationResult,
  operationResultSchema,
} from '../models/operationResult';
import {
  PartialSpendbackRefund,
  partialSpendbackRefundSchema,
} from '../models/partialSpendbackRefund';
import {
  SpendbackListResult,
  spendbackListResultSchema,
} from '../models/spendbackListResult';
import {
  SpendbackQuoteAcceptResult,
  spendbackQuoteAcceptResultSchema,
} from '../models/spendbackQuoteAcceptResult';
import {
  SpendbackResult,
  spendbackResultSchema,
} from '../models/spendbackResult';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class SpendbackController extends BaseController {
  /**
   * Retrieve a list of [spendbacks](page:working-with-resources/spendbacks) that supports filtering,
   * sorting, and pagination through existing mechanisms.
   *
   *
   * @param page     Page number of specific page to return
   * @param pageSize Number of items to be displayed per page
   * @param filter   Filter request results by specific criteria.
   * @param sort     Sort request results by specific attribute.
   * @param language Filter results by language type.
   * @return Response from the API call
   */
  async listSpendbacks(
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SpendbackListResult>> {
    const req = this.createRequest('GET', '/spend-back');
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
    return req.callAsJson(spendbackListResultSchema, requestOptions);
  }

  /**
   * Create a [spendback](page:working-with-resources/spendbacks) quote.
   *
   *
   * @param body
   * @return Response from the API call
   */
  async createSpendbackQuote(
    body?: CreateSpendbackQuote,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SpendbackResult>> {
    const req = this.createRequest('POST', '/spend-back');
    const mapped = req.prepareArgs({
      body: [body, optional(createSpendbackQuoteSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(spendbackResultSchema, requestOptions);
  }

  /**
   * Retrieve a single [spendbacks](page:working-with-resources/spendbacks) quote using the spendback
   * token.
   *
   *
   * @param spendbackToken  Auto-generated unique identifier representing an individual spend back
   *                                     transaction and quote, prefixed with `spnd-`.
   * @param page            Page number of specific page to return
   * @param pageSize        Number of items to be displayed per page
   * @param filter          Filter request results by specific criteria.
   * @param sort            Sort request results by specific attribute.
   * @param language        Filter results by language type.
   * @return Response from the API call
   */
  async retrieveSpendback(
    spendbackToken: string,
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SpendbackResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      spendbackToken: [spendbackToken, string()],
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
    req.appendTemplatePath`/spend-back/${mapped.spendbackToken}`;
    return req.callAsJson(spendbackResultSchema, requestOptions);
  }

  /**
   * Accept an open [spendback](page:working-with-resources/spendbacks) quote.
   *
   *
   * @param spendbackToken  Auto-generated unique identifier representing an individual spend back
   *                                  transaction and quote, prefixed with `spnd-`.
   * @return Response from the API call
   */
  async acceptSpendbackQuote(
    spendbackToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SpendbackQuoteAcceptResult>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      spendbackToken: [spendbackToken, string()],
    });
    req.appendTemplatePath`/spend-back/${mapped.spendbackToken}`;
    return req.callAsJson(spendbackQuoteAcceptResultSchema, requestOptions);
  }

  /**
   * Cancel an open [spendback](page:working-with-resources/spendbacks) quote.
   *
   *
   * @param spendbackToken  Auto-generated unique identifier representing an individual spend back
   *                                  transaction and quote, prefixed with `spnd-`.
   * @return Response from the API call
   */
  async cancelSpendbackQuote(
    spendbackToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SpendbackResult>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      spendbackToken: [spendbackToken, string()],
    });
    req.appendTemplatePath`/spend-back/${mapped.spendbackToken}`;
    return req.callAsJson(spendbackResultSchema, requestOptions);
  }

  /**
   * Perform a [spendback](page:working-with-resources/spendbacks) refund for the full amount.
   *
   *
   * @param spendbackToken  Auto-generated unique identifier representing an individual spend back
   *                                  transaction and quote, prefixed with `spnd-`.
   * @return Response from the API call
   */
  async fullyRefundSpendback(
    spendbackToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OperationResult>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      spendbackToken: [spendbackToken, string()],
    });
    req.appendTemplatePath`/spend-back/${mapped.spendbackToken}/refund`;
    return req.callAsJson(operationResultSchema, requestOptions);
  }

  /**
   * Perform a [spendback](page:working-with-resources/spendbacks) refund for a partial amount.
   *
   *
   * @param spendbackToken  Auto-generated unique identifier representing an
   *                                                         individual spend back transaction and quote, prefixed with
   *                                                         `spnd-`.
   * @param body
   * @return Response from the API call
   */
  async partiallyRefundSpendback(
    spendbackToken: string,
    body?: PartialSpendbackRefund,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OperationResult>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      spendbackToken: [spendbackToken, string()],
      body: [body, optional(partialSpendbackRefundSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/spend-back/${mapped.spendbackToken}/refund`;
    return req.callAsJson(operationResultSchema, requestOptions);
  }
}
