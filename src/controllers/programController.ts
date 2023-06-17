/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { Languages, languagesSchema } from '../models/languages';
import {
  ProgramListResult,
  programListResultSchema,
} from '../models/programListResult';
import { ProgramResult, programResultSchema } from '../models/programResult';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class ProgramController extends BaseController {
  /**
   * Retrieve a list of [programs](page:working-with-resources/programs) that supports filtering, sorting,
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
  async listPrograms(
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProgramListResult>> {
    const req = this.createRequest('GET', '/programs');
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
    return req.callAsJson(programListResultSchema, requestOptions);
  }

  /**
   * Retrieve a single [program](page:working-with-resources/programs) by its program token.
   *
   *
   * @param programToken  Auto-generated unique identifier representing a program, prefixed with `prog-`.
   * @param language      Filter results by language type.
   * @return Response from the API call
   */
  async retrieveProgram(
    programToken: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProgramResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      programToken: [programToken, string()],
      language: [language, optional(languagesSchema)],
    });
    req.query('language', mapped.language);
    req.appendTemplatePath`/programs/${mapped.programToken}`;
    return req.callAsJson(programResultSchema, requestOptions);
  }
}
