/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  AuthorizationListResult,
  authorizationListResultSchema,
} from '../models/authorizationListResult';
import { Languages, languagesSchema } from '../models/languages';
import { Payload, payloadSchema } from '../models/payload';
import { Payload1, payload1Schema } from '../models/payload1';
import { Payload2, payload2Schema } from '../models/payload2';
import {
  PrepaidCardListResult,
  prepaidCardListResultSchema,
} from '../models/prepaidCardListResult';
import {
  PrepaidCardResult,
  prepaidCardResultSchema,
} from '../models/prepaidCardResult';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class PrepaidCardsController extends BaseController {
  /**
   * Retrieve a list of [prepaid cards](page:working-with-resources/prepaid-cards) by user token that
   * supports filtering, sorting, and pagination through existing mechanisms.
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
  async listPrepaidCards(
    userToken: string,
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PrepaidCardListResult>> {
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
    req.appendTemplatePath`/users/${mapped.userToken}/prepaid-cards`;
    return req.callAsJson(prepaidCardListResultSchema, requestOptions);
  }

  /**
   * Order a [prepaid card](page:working-with-resources/prepaid-cards) for the user by specifying a
   * cardPackage.
   *
   * Assign a prepaid card to a user when a program token and card reference number are supplied.
   *
   * @param userToken  Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param payload
   * @return Response from the API call
   */
  async orderPrepaidCard(
    userToken: string,
    payload?: Payload,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PrepaidCardResult>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      payload: [payload, optional(payloadSchema)],
    });
    req.formData({
      payload: JSON.stringify(mapped.payload),
    });
    req.appendTemplatePath`/users/${mapped.userToken}/prepaid-cards`;
    return req.callAsJson(prepaidCardResultSchema, requestOptions);
  }

  /**
   * Replace a [prepaid card](page:working-with-resources/prepaid-cards) by destination token.
   *
   *
   * @param userToken         Auto-generated unique identifier representing a user, prefixed with
   *                                             `user-`.
   * @param destinationToken  Auto-generated unique identifier representing a transfer destination,
   *                                             including prepaid cards, bank accounts, paper checks, and other users,
   *                                             prefixed with `dest-`.
   * @param payload
   * @return Response from the API call
   */
  async replacePrepaidCard(
    userToken: string,
    destinationToken: string,
    payload?: Payload1,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PrepaidCardResult>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      destinationToken: [destinationToken, string()],
      payload: [payload, optional(payload1Schema)],
    });
    req.formData({
      payload: JSON.stringify(mapped.payload),
    });
    req.appendTemplatePath`/users/${mapped.userToken}/prepaid-cards/${mapped.destinationToken}`;
    return req.callAsJson(prepaidCardResultSchema, requestOptions);
  }

  /**
   * Retrieve [prepaid card](page:working-with-resources/prepaid-cards) details by destination token.
   *
   *
   * @param userToken         Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param destinationToken  Auto-generated unique identifier representing a transfer destination,
   *                                    including prepaid cards, bank accounts, paper checks, and other users, prefixed
   *                                    with `dest-`.
   * @return Response from the API call
   */
  async retrievePrepaidCard(
    userToken: string,
    destinationToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PrepaidCardResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      destinationToken: [destinationToken, string()],
    });
    req.appendTemplatePath`/users/${mapped.userToken}/prepaid-cards/${mapped.destinationToken}`;
    return req.callAsJson(prepaidCardResultSchema, requestOptions);
  }

  /**
   * Partial [prepaid card](page:working-with-resources/prepaid-cards) update.
   *
   *
   * @param userToken         Auto-generated unique identifier representing a user, prefixed with
   *                                             `user-`.
   * @param destinationToken  Auto-generated unique identifier representing a transfer destination,
   *                                             including prepaid cards, bank accounts, paper checks, and other users,
   *                                             prefixed with `dest-`.
   * @param payload
   * @return Response from the API call
   */
  async updatePrepaidCard(
    userToken: string,
    destinationToken: string,
    payload?: Payload2,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PrepaidCardResult>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      destinationToken: [destinationToken, string()],
      payload: [payload, optional(payload2Schema)],
    });
    req.formData({
      payload: JSON.stringify(mapped.payload),
    });
    req.appendTemplatePath`/users/${mapped.userToken}/prepaid-cards/${mapped.destinationToken}`;
    return req.callAsJson(prepaidCardResultSchema, requestOptions);
  }

  /**
   * TODO
   *
   * @param userToken         Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param destinationToken  Auto-generated unique identifier representing a transfer destination,
   *                                    including prepaid cards, bank accounts, paper checks, and other users, prefixed
   *                                    with `dest-`.
   * @return Response from the API call
   */
  async listCardAuthorizations(
    userToken: string,
    destinationToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AuthorizationListResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      destinationToken: [destinationToken, string()],
    });
    req.appendTemplatePath`/users/${mapped.userToken}/prepaid-cards/${mapped.destinationToken}/authorizations`;
    return req.callAsJson(authorizationListResultSchema, requestOptions);
  }
}
