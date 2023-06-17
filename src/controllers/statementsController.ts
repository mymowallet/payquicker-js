/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { Languages, languagesSchema } from '../models/languages';
import {
  StatementListResult,
  statementListResultSchema,
} from '../models/statementListResult';
import {
  StatementResult,
  statementResultSchema,
} from '../models/statementResult';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class StatementsController extends BaseController {
  /**
   * List Prepaid Card Statements for specific user
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
  async listPrepaidCardStatements(
    userToken: string,
    destinationToken: string,
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<StatementListResult>> {
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
    req.appendTemplatePath`/users/${mapped.userToken}/prepaid-cards/${mapped.destinationToken}/statements`;
    return req.callAsJson(statementListResultSchema, requestOptions);
  }

  /**
   * Retrieve a single prepaid card agreement.
   *
   * @param userToken         Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param destinationToken  Auto-generated unique identifier representing a transfer destination,
   *                                    including prepaid cards, bank accounts, paper checks, and other users, prefixed
   *                                    with `dest-`.
   * @param documentToken     Auto-generated unique identifier representing an uploaded document, prefixed
   *                                    with `docu-`.
   * @return Response from the API call
   */
  async retrievePrepaidCardStatement(
    userToken: string,
    destinationToken: string,
    documentToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<StatementResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      destinationToken: [destinationToken, string()],
      documentToken: [documentToken, string()],
    });
    req.appendTemplatePath`/users/${mapped.userToken}/prepaid-cards/${mapped.destinationToken}/statements/${mapped.documentToken}`;
    return req.callAsJson(statementResultSchema, requestOptions);
  }

  /**
   * Returns all statements for the specified user
   *
   * @param userToken  Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param page       Page number of specific page to return
   * @param pageSize   Number of items to be displayed per page
   * @param filter     Filter request results by specific criteria.
   * @param sort       Sort request results by specific attribute.
   * @param language   Filter results by language type.
   * @return Response from the API call
   */
  async listStatements(
    userToken: string,
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<StatementListResult>> {
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
    req.appendTemplatePath`/users/${mapped.userToken}/statements`;
    return req.callAsJson(statementListResultSchema, requestOptions);
  }

  /**
   * Return a specific statement
   *
   * @param userToken      Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param documentToken  Auto-generated unique identifier representing an uploaded document, prefixed with
   *                                 `docu-`.
   * @return Response from the API call
   */
  async retrieveStatement(
    userToken: string,
    documentToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<StatementResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      documentToken: [documentToken, string()],
    });
    req.appendTemplatePath`/users/${mapped.userToken}/statements/${mapped.documentToken}`;
    return req.callAsJson(statementResultSchema, requestOptions);
  }
}
