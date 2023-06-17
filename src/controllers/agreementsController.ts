/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  AgreementListResult,
  agreementListResultSchema,
} from '../models/agreementListResult';
import {
  AgreementResult,
  agreementResultSchema,
} from '../models/agreementResult';
import { Languages, languagesSchema } from '../models/languages';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class AgreementsController extends BaseController {
  /**
   * Retrieve a list of program [agreements](page:working-with-resources/agreements) that supports
   * filtering, sorting, and pagination through existing mechanisms.
   *
   *
   * @param programToken  Auto-generated unique identifier representing a program, prefixed with `prog-`.
   * @param page          Page number of specific page to return
   * @param pageSize      Number of items to be displayed per page
   * @param filter        Filter request results by specific criteria.
   * @param sort          Sort request results by specific attribute.
   * @param language      Filter results by language type.
   * @return Response from the API call
   */
  async listAgreements(
    programToken: string,
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AgreementListResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      programToken: [programToken, string()],
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
    req.appendTemplatePath`/programs/${mapped.programToken}/agreements`;
    return req.callAsJson(agreementListResultSchema, requestOptions);
  }

  /**
   * Retrieve a single program [agreement](page:working-with-resources/agreements).
   *
   *
   * @param programToken    Auto-generated unique identifier representing a program, prefixed with `prog-`.
   * @param agreementToken  Auto-generated unique identifier representing a program agreement, prefixed with
   *                                  `agmt-`.
   * @return Response from the API call
   */
  async retrieveProgramAgreement(
    programToken: string,
    agreementToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AgreementResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      programToken: [programToken, string()],
      agreementToken: [agreementToken, string()],
    });
    req.appendTemplatePath`/programs/${mapped.programToken}/agreements/${mapped.agreementToken}`;
    return req.callAsJson(agreementResultSchema, requestOptions);
  }

  /**
   * Accept a single program [agreement](page:working-with-resources/agreements).
   *
   *
   * @param userToken       Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param agreementToken  Auto-generated unique identifier representing a program agreement, prefixed with
   *                                  `agmt-`.
   * @return Response from the API call
   */
  async acceptAgreement(
    userToken: string,
    agreementToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      agreementToken: [agreementToken, string()],
    });
    req.appendTemplatePath`/users/${mapped.userToken}/agreements/${mapped.agreementToken}`;
    return req.call(requestOptions);
  }
}
