/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  BalanceListResult,
  balanceListResultSchema,
} from '../models/balanceListResult';
import { BalanceResult, balanceResultSchema } from '../models/balanceResult';
import { Languages, languagesSchema } from '../models/languages';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class BalancesController extends BaseController {
  /**
   * Retrieve a list of bank account [balances](page:working-with-resources/balances) that supports
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
  async listAccountBalances(
    accountToken: string,
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BalanceListResult>> {
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
    req.appendTemplatePath`/accounts/${mapped.accountToken}/balances`;
    return req.callAsJson(balanceListResultSchema, requestOptions);
  }

  /**
   * Retrieve a list of user [balances](page:working-with-resources/balances) that supports filtering,
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
  async listUserBalances(
    userToken: string,
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BalanceListResult>> {
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
    req.appendTemplatePath`/users/${mapped.userToken}/balances`;
    return req.callAsJson(balanceListResultSchema, requestOptions);
  }

  /**
   * Retrieve a [prepaid card](page:working-with-resources/prepaid-cards) [balances](page:working-with-
   * resources/balances) by destination token that supports filtering, sorting, and pagination through
   * existing mechanisms.
   *
   *
   * @param userToken         Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param destinationToken  Auto-generated unique identifier representing a transfer destination,
   *                                       including prepaid cards, bank accounts, paper checks, and other users,
   *                                       prefixed with `dest-`.
   * @param language          Filter results by language type.
   * @return Response from the API call
   */
  async retrieveCardBalance(
    userToken: string,
    destinationToken: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BalanceResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      destinationToken: [destinationToken, string()],
      language: [language, optional(languagesSchema)],
    });
    req.query('language', mapped.language);
    req.appendTemplatePath`/users/${mapped.userToken}/prepaid-cards/${mapped.destinationToken}/balances`;
    return req.callAsJson(balanceResultSchema, requestOptions);
  }
}
