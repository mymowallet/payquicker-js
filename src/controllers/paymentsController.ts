/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CreatePaymentQuote,
  createPaymentQuoteSchema,
} from '../models/createPaymentQuote';
import { Languages, languagesSchema } from '../models/languages';
import {
  OperationResult,
  operationResultSchema,
} from '../models/operationResult';
import {
  PaymentListResult,
  paymentListResultSchema,
} from '../models/paymentListResult';
import { PaymentResult, paymentResultSchema } from '../models/paymentResult';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class PaymentsController extends BaseController {
  /**
   * Retrieve a list of [payments](page:working-with-resources/payments) that supports filtering, sorting,
   * and pagination through existing mechanisms.
   *
   *
   * @param page     Page number of specific page to return
   * @param pageSize Number of items to be displayed per page
   * @param filter   Filter request results by specific criteria.
   * @param sort     Sort request results by specific attribute.
   * @param language Filter results by language type.
   * @return Response from the API call
   */
  async listPayments(
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentListResult>> {
    const req = this.createRequest('GET', '/payments');
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
    return req.callAsJson(paymentListResultSchema, requestOptions);
  }

  /**
   * Create a [payment](page:working-with-resources/payments) quote.
   *
   *
   * @param body
   * @return Response from the API call
   */
  async createPaymentQuote(
    body?: CreatePaymentQuote,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentResult>> {
    const req = this.createRequest('POST', '/payments');
    const mapped = req.prepareArgs({
      body: [body, optional(createPaymentQuoteSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(paymentResultSchema, requestOptions);
  }

  /**
   * Retrieve a single [payment](page:working-with-resources/payments).
   *
   *
   * @param paymentToken  Auto-generated unique identifier representing an individual payment transaction
   *                                   and quote, prefixed with `pmnt-`.
   * @param filter        Filter request results by specific criteria.
   * @param language      Filter results by language type.
   * @return Response from the API call
   */
  async retrievePayment(
    paymentToken: string,
    filter?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      paymentToken: [paymentToken, string()],
      filter: [filter, optional(string())],
      language: [language, optional(languagesSchema)],
    });
    req.query('filter', mapped.filter);
    req.query('language', mapped.language);
    req.appendTemplatePath`/payments/${mapped.paymentToken}`;
    return req.callAsJson(paymentResultSchema, requestOptions);
  }

  /**
   * Accept an open [payment](page:working-with-resources/payments) quote.
   *
   *
   * @param paymentToken  Auto-generated unique identifier representing an individual payment transaction
   *                                and quote, prefixed with `pmnt-`.
   * @return Response from the API call
   */
  async acceptPaymentQuote(
    paymentToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentResult>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ paymentToken: [paymentToken, string()] });
    req.appendTemplatePath`/payments/${mapped.paymentToken}`;
    return req.callAsJson(paymentResultSchema, requestOptions);
  }

  /**
   * Cancel an open [payment](page:working-with-resources/payments) quote.
   *
   *
   * @param paymentToken  Auto-generated unique identifier representing an individual payment transaction
   *                                and quote, prefixed with `pmnt-`.
   * @return Response from the API call
   */
  async cancelPaymentQuote(
    paymentToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentResult>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ paymentToken: [paymentToken, string()] });
    req.appendTemplatePath`/payments/${mapped.paymentToken}`;
    return req.callAsJson(paymentResultSchema, requestOptions);
  }

  /**
   * Perform a [payment](page:working-with-resources/payments) retraction for the full payment amount.
   *
   *
   * @param paymentToken  Auto-generated unique identifier representing an individual payment transaction
   *                                and quote, prefixed with `pmnt-`.
   * @return Response from the API call
   */
  async retractPayment(
    paymentToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OperationResult>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({ paymentToken: [paymentToken, string()] });
    req.appendTemplatePath`/payments/${mapped.paymentToken}/retract`;
    return req.callAsJson(operationResultSchema, requestOptions);
  }
}
