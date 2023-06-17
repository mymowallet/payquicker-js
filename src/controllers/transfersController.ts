/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CreateTransferQuote,
  createTransferQuoteSchema,
} from '../models/createTransferQuote';
import { Languages, languagesSchema } from '../models/languages';
import {
  TransferListResult,
  transferListResultSchema,
} from '../models/transferListResult';
import { TransferResult, transferResultSchema } from '../models/transferResult';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class TransfersController extends BaseController {
  /**
   * Retrieve a list of [transfers](page:working-with-resources/transfers) that supports filtering,
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
  async listTransfers(
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TransferListResult>> {
    const req = this.createRequest('GET', '/transfers');
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
    return req.callAsJson(transferListResultSchema, requestOptions);
  }

  /**
   * Create a new [transfer](page:working-with-resources/transfers) quote.
   *
   *
   * @param body
   * @return Response from the API call
   */
  async createTransferQuote(
    body?: CreateTransferQuote,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TransferResult>> {
    const req = this.createRequest('POST', '/transfers');
    const mapped = req.prepareArgs({
      body: [body, optional(createTransferQuoteSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(transferResultSchema, requestOptions);
  }

  /**
   * Retrieve details of a specific [transfer](page:working-with-resources/transfers) represented by a
   * transfer token.
   *
   *
   * @param transferToken  Auto-generated unique identifier representing an individual transfer transaction,
   *                                 prefixed with `xfer-`.
   * @return Response from the API call
   */
  async retrieveTransfer(
    transferToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TransferResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      transferToken: [transferToken, string()],
    });
    req.appendTemplatePath`/transfers/${mapped.transferToken}`;
    return req.callAsJson(transferResultSchema, requestOptions);
  }

  /**
   * Accept a [transfer](page:working-with-resources/transfers) quote.
   *
   * @param transferToken  Auto-generated unique identifier representing an individual transfer transaction,
   *                                 prefixed with `xfer-`.
   * @return Response from the API call
   */
  async acceptTransferQuote(
    transferToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TransferResult>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      transferToken: [transferToken, string()],
    });
    req.appendTemplatePath`/transfers/${mapped.transferToken}`;
    return req.callAsJson(transferResultSchema, requestOptions);
  }

  /**
   * Optional [transfer](page:working-with-resources/transfers) quote cancellation that auto-cancels
   * after a period organically expires or when account activity invalidates the quote.
   *
   *
   * @param transferToken  Auto-generated unique identifier representing an individual transfer transaction,
   *                                 prefixed with `xfer-`.
   * @return Response from the API call
   */
  async cancelTransferQuote(
    transferToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TransferResult>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      transferToken: [transferToken, string()],
    });
    req.appendTemplatePath`/transfers/${mapped.transferToken}`;
    return req.callAsJson(transferResultSchema, requestOptions);
  }

  /**
   * Retrieve a list of user [transfers](page:working-with-resources/transfers) that supports filtering,
   * sorting, and pagination through existing mechanisms.
   *
   * @param userToken  Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param page       Page number of specific page to return
   * @param pageSize   Number of items to be displayed per page
   * @param filter     Filter request results by specific criteria.
   * @param sort       Sort request results by specific attribute.
   * @param language   Filter results by language type.
   * @return Response from the API call
   */
  async listUserTransfers(
    userToken: string,
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TransferListResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
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
    req.appendTemplatePath`/users/${mapped.userToken}/transfers`;
    return req.callAsJson(transferListResultSchema, requestOptions);
  }

  /**
   * Retrieve a specific user bank [transfer](page:working-with-resources/transfers).
   *
   * @param userToken      Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param transferToken  Auto-generated unique identifier representing a transfer, prefixed with `xfer-`.
   * @return Response from the API call
   */
  async retrieveUserTransfer(
    userToken: string,
    transferToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TransferResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      transferToken: [transferToken, string()],
    });
    req.appendTemplatePath`/users/${mapped.userToken}/transfers/${mapped.transferToken}`;
    return req.callAsJson(transferResultSchema, requestOptions);
  }
}
