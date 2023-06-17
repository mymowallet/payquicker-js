/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { Languages, languagesSchema } from '../models/languages';
import {
  ReceiptListResult,
  receiptListResultSchema,
} from '../models/receiptListResult';
import { ReceiptResult, receiptResultSchema } from '../models/receiptResult';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class ReceiptsController extends BaseController {
  /**
   * Retrieve a list of all account(s) [receipts](page:working-with-resources/receipts) that supports
   * filtering, sorting, and pagination through existing mechanisms.
   *
   *
   * @param accountToken  Auto-generated unique identifier representing a company account, prefixed with
   *                                   `acct-`.
   * @param page          Page number of specific page to return
   * @param pageSize      Number of items to be displayed per page
   * @param filter        Filter request results by specific criteria.
   * @param sort          Sort request results by specific attribute.
   * @param language      Filter results by language type.
   * @return Response from the API call
   */
  async listAccountReceipts(
    accountToken: string,
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ReceiptListResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      accountToken: [accountToken, string()],
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
    req.appendTemplatePath`/accounts/${mapped.accountToken}/receipts`;
    return req.callAsJson(receiptListResultSchema, requestOptions);
  }

  /**
   * Retrieve a single account [receipt](page:working-with-resources/receipts)
   *
   *
   * @param accountToken  Auto-generated unique identifier representing a company account, prefixed with
   *                                `acct-`.
   * @param receiptToken  Auto-generated unique identifier representing a receipt, prefixed with `rcpt-`.
   * @return Response from the API call
   */
  async retrieveAccountReceipt(
    accountToken: string,
    receiptToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ReceiptResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      accountToken: [accountToken, string()],
      receiptToken: [receiptToken, string()],
    });
    req.appendTemplatePath`/accounts/${mapped.accountToken}/receipts/${mapped.receiptToken}`;
    return req.callAsJson(receiptResultSchema, requestOptions);
  }

  /**
   * Retrieve a list of [prepaid card](page:working-with-resources/prepaid-cards) [receipts](page:working-
   * with-resources/receipts) that supports filtering, sorting, and pagination through existing
   * mechanisms.
   *
   *
   * @param userToken         Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param destinationToken  Auto-generated unique identifier representing a transfer destination,
   *                                       including prepaid cards, bank accounts, paper checks, and other users,
   *                                       prefixed with `dest-`.
   * @param page              Page number of specific page to return
   * @param pageSize          Number of items to be displayed per page
   * @param filter            Filter request results by specific criteria.
   * @param sort              Sort request results by specific attribute.
   * @param language          Filter results by language type.
   * @return Response from the API call
   */
  async listPrepaidCardReceipts(
    userToken: string,
    destinationToken: string,
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ReceiptListResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      destinationToken: [destinationToken, string()],
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
    req.appendTemplatePath`/users/${mapped.userToken}/prepaid-cards/${mapped.destinationToken}/receipts`;
    return req.callAsJson(receiptListResultSchema, requestOptions);
  }

  /**
   * Retrieve a single user prepaid-card [receipt](page:working-with-resources/receipts)
   *
   * @param userToken         Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param destinationToken  Auto-generated unique identifier representing a transfer destination,
   *                                    including prepaid cards, bank accounts, paper checks, and other users, prefixed
   *                                    with `dest-`.
   * @param receiptToken      Auto-generated unique identifier representing a receipt, prefixed with `rcpt-`.
   * @return Response from the API call
   */
  async retrievePrepaidCardReceipt(
    userToken: string,
    destinationToken: string,
    receiptToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ReceiptResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      destinationToken: [destinationToken, string()],
      receiptToken: [receiptToken, string()],
    });
    req.appendTemplatePath`/users/${mapped.userToken}/prepaid-cards/${mapped.destinationToken}/receipts/${mapped.receiptToken}`;
    return req.callAsJson(receiptResultSchema, requestOptions);
  }

  /**
   * Retrieve a list of  user [receipts](page:working-with-resources/receipts) that supports filtering,
   * sorting, and pagination through existing mechanisms.
   *
   *
   * @param userToken  Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param page       Page number of specific page to return
   * @param pageSize   Number of items to be displayed per page
   * @param filter     Filter request results by specific criteria.
   * @param sort       Sort request results by specific attribute.
   * @param language   Filter results by language type.
   * @return Response from the API call
   */
  async listUserReceipts(
    userToken: string,
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ReceiptListResult>> {
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
    req.appendTemplatePath`/users/${mapped.userToken}/receipts`;
    return req.callAsJson(receiptListResultSchema, requestOptions);
  }

  /**
   * Retrieve a single user [receipt](page:working-with-resources/receipts)
   *
   *
   * @param userToken     Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param receiptToken  Auto-generated unique identifier representing a receipt, prefixed with `rcpt-`.
   * @return Response from the API call
   */
  async retrieveUserReceipt(
    userToken: string,
    receiptToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ReceiptResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      receiptToken: [receiptToken, string()],
    });
    req.appendTemplatePath`/users/${mapped.userToken}/receipts/${mapped.receiptToken}`;
    return req.callAsJson(receiptResultSchema, requestOptions);
  }
}
