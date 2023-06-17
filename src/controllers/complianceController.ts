/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  IdvCheckListResult,
  idvCheckListResultSchema,
} from '../models/idvCheckListResult';
import { IdvCheckResult, idvCheckResultSchema } from '../models/idvCheckResult';
import { string } from '../schema';
import { BaseController } from './baseController';

export class ComplianceController extends BaseController {
  /**
   * Retrieve a list of [IDV checks](page:working-with-resources/user#list-user-idv-checks) by user token
   * that supports filtering, sorting, and pagination through existing mechanisms.
   *
   *
   * @param userToken  Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @return Response from the API call
   */
  async listIdentityChecks(
    userToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<IdvCheckListResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ userToken: [userToken, string()] });
    req.appendTemplatePath`/users/${mapped.userToken}/idv-checks`;
    return req.callAsJson(idvCheckListResultSchema, requestOptions);
  }

  /**
   * Retrieve a list of [IDV checks](page:working-with-resources/user#retrieve-user-idv-check) by IDVC
   * token that supports filtering, sorting, and pagination through existing mechanisms.
   *
   *
   * @param userToken  Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param idvcToken  Auto-generated unique identifier representing a user IDV check, prefixed with `idvc-`.
   * @return Response from the API call
   */
  async retrieveIdentityCheck(
    userToken: string,
    idvcToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<IdvCheckResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      idvcToken: [idvcToken, string()],
    });
    req.appendTemplatePath`/users/${mapped.userToken}/idv-checks/${mapped.idvcToken}`;
    return req.callAsJson(idvCheckResultSchema, requestOptions);
  }
}
