/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CreateOrUpdateUser,
  createOrUpdateUserSchema,
} from '../models/createOrUpdateUser';
import { Languages, languagesSchema } from '../models/languages';
import {
  SdkV2TestingGetEnumsResult,
  sdkV2TestingGetEnumsResultSchema,
} from '../models/sdkV2TestingGetEnumsResult';
import { UserListResult, userListResultSchema } from '../models/userListResult';
import { UserResult, userResultSchema } from '../models/userResult';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class UsersController extends BaseController {
  /**
   * Retrieve a list of [users](page:working-with-resources/user) that supports filtering, sorting, and
   * pagination through existing mechanisms.
   *
   *
   * @param page     Page number of specific page to return
   * @param pageSize Number of items to be displayed per page
   * @param filter   Filter request results by specific criteria.
   * @param sort     Sort request results by specific attribute.
   * @param language Filter results by language type.
   * @return Response from the API call
   */
  async listUsers(
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UserListResult>> {
    const req = this.createRequest('GET', '/users');
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
    return req.callAsJson(userListResultSchema, requestOptions);
  }

  /**
   * Create a new [user](page:working-with-resources/user).
   *
   *
   * @param body
   * @return Response from the API call
   */
  async createUser(
    body?: CreateOrUpdateUser,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UserResult>> {
    const req = this.createRequest('POST', '/users');
    const mapped = req.prepareArgs({
      body: [body, optional(createOrUpdateUserSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(userResultSchema, requestOptions);
  }

  /**
   * Update a [user](page:working-with-resources/user) object (change
   * [email](#/rest/models/structures/email-address)], [address](#/rest/models/structures/address) change,
   * etc.) using a user token.'
   *
   *
   * @param userToken    Auto-generated unique identifier representing a user, prefixed
   *                                                  with `user-`.
   * @param body
   * @return Response from the API call
   */
  async updateUser(
    userToken: string,
    body?: CreateOrUpdateUser,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UserResult>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      body: [body, optional(createOrUpdateUserSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/users/${mapped.userToken}`;
    return req.callAsJson(userResultSchema, requestOptions);
  }

  /**
   * Retrieve a single [user](page:working-with-resources/user) record by user token.
   *
   *
   * @param userToken  Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @return Response from the API call
   */
  async retrieveUser(
    userToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UserResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ userToken: [userToken, string()] });
    req.appendTemplatePath`/users/${mapped.userToken}`;
    return req.callAsJson(userResultSchema, requestOptions);
  }

  /**
   * This is an internal call that gets all V2 Enums.  The Enums are used for test cases.  The Internal
   * option should be selected for this.
   *
   * @return Response from the API call
   */
  async getAllV2Enums(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SdkV2TestingGetEnumsResult>> {
    const req = this.createRequest('GET', '/sdkV2Testing/enums');
    return req.callAsJson(sdkV2TestingGetEnumsResultSchema, requestOptions);
  }
}
