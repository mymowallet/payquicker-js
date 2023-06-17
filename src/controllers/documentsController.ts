/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, FileWrapper, RequestOptions } from '../core';
import {
  DocumentListResult,
  documentListResultSchema,
} from '../models/documentListResult';
import {
  DocumentRequirementsListResult,
  documentRequirementsListResultSchema,
} from '../models/documentRequirementsListResult';
import { DocumentResult, documentResultSchema } from '../models/documentResult';
import { Fields, fieldsSchema } from '../models/fields';
import { Languages, languagesSchema } from '../models/languages';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class DocumentsController extends BaseController {
  /**
   * Retrieve a list of user [documents](page:working-with-resources/documents) that supports filtering,
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
  async listDocuments(
    userToken: string,
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DocumentListResult>> {
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
    req.appendTemplatePath`/users/${mapped.userToken}/documents`;
    return req.callAsJson(documentListResultSchema, requestOptions);
  }

  /**
   * Upload a user [document](page:working-with-resources/documents).
   *
   *
   * @param userToken  Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param fields
   * @param upload     Document to be uploaded
   * @return Response from the API call
   */
  async uploadDocument(
    userToken: string,
    fields?: Fields,
    upload?: FileWrapper,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DocumentResult>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      fields: [fields, optional(fieldsSchema)],
    });
    req.formData({
      fields: JSON.stringify(mapped.fields),
      upload: upload,
    });
    req.appendTemplatePath`/users/${mapped.userToken}/documents`;
    return req.callAsJson(documentResultSchema, requestOptions);
  }

  /**
   * Retrieve a single user [document](page:working-with-resources/documents) by its document token.
   *
   *
   * @param userToken      Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param documentToken  Auto-generated unique identifier representing an uploaded document, prefixed with
   *                                 `docu-`.
   * @return Response from the API call
   */
  async retrieveDocument(
    userToken: string,
    documentToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DocumentResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      documentToken: [documentToken, string()],
    });
    req.appendTemplatePath`/users/${mapped.userToken}/documents/${mapped.documentToken}`;
    return req.callAsJson(documentResultSchema, requestOptions);
  }

  /**
   * Replace the user [documents](page:working-with-resources/documents) at the given document token.
   *
   *
   * @param userToken      Auto-generated unique identifier representing a user, prefixed with `user-
   *                                        `.
   * @param documentToken  Auto-generated unique identifier representing an uploaded document,
   *                                        prefixed with `docu-`.
   * @param fields
   * @param upload         Document to be uploaded
   * @return Response from the API call
   */
  async replaceDocument(
    userToken: string,
    documentToken: string,
    fields?: Fields,
    upload?: FileWrapper,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DocumentResult>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      documentToken: [documentToken, string()],
      fields: [fields, optional(fieldsSchema)],
    });
    req.formData({
      fields: JSON.stringify(mapped.fields),
      upload: upload,
    });
    req.appendTemplatePath`/users/${mapped.userToken}/documents/${mapped.documentToken}`;
    return req.callAsJson(documentResultSchema, requestOptions);
  }

  /**
   * Returns a list of user documents that the user can provide
   *
   * @param userToken  Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param page       Page number of specific page to return
   * @param pageSize   Number of items to be displayed per page
   * @param filter     Filter request results by specific criteria.
   * @param sort       Sort request results by specific attribute.
   * @param language   Filter results by language type.
   * @return Response from the API call
   */
  async listUserDocumentRequirements(
    userToken: string,
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DocumentRequirementsListResult>> {
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
    req.appendTemplatePath`/users/${mapped.userToken}/documents/requirements`;
    return req.callAsJson(documentRequirementsListResultSchema, requestOptions);
  }
}
