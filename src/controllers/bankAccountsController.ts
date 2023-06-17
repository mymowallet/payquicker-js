/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  BankAccountListResult,
  bankAccountListResultSchema,
} from '../models/bankAccountListResult';
import {
  BankAccountRequirementListResult,
  bankAccountRequirementListResultSchema,
} from '../models/bankAccountRequirementListResult';
import {
  BankAccountResult,
  bankAccountResultSchema,
} from '../models/bankAccountResult';
import { Countries, countriesSchema } from '../models/countries';
import {
  CreateOrUpdateBankAccount,
  createOrUpdateBankAccountSchema,
} from '../models/createOrUpdateBankAccount';
import { Currencies, currenciesSchema } from '../models/currencies';
import { Languages, languagesSchema } from '../models/languages';
import {
  OperationResult,
  operationResultSchema,
} from '../models/operationResult';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class BankAccountsController extends BaseController {
  /**
   * Retrieve a list of [bank accounts](page:working-with-resources/bank-accounts) that supports
   * filtering, sorting, and pagination through existing mechanisms.
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
  async listBankAccounts(
    userToken: string,
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BankAccountListResult>> {
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
    req.appendTemplatePath`/users/${mapped.userToken}/bank-accounts`;
    return req.callAsJson(bankAccountListResultSchema, requestOptions);
  }

  /**
   * Create a quote for a [bank account](page:working-with-resources/bank-accounts) using a user token.
   *
   *
   * @param userToken    Auto-generated unique identifier representing a user,
   *                                                         prefixed with `user-`.
   * @param body
   * @return Response from the API call
   */
  async createBankAccount(
    userToken: string,
    body?: CreateOrUpdateBankAccount,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BankAccountResult>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      body: [body, optional(createOrUpdateBankAccountSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/users/${mapped.userToken}/bank-accounts`;
    return req.callAsJson(bankAccountResultSchema, requestOptions);
  }

  /**
   * Retrieve a single [bank account](page:working-with-resources/bank-accounts) using a destination
   * token.
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
  async retrieveBankAccount(
    userToken: string,
    destinationToken: string,
    page: number,
    pageSize: number,
    filter?: string,
    sort?: string,
    language?: Languages,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BankAccountResult>> {
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
    req.appendTemplatePath`/users/${mapped.userToken}/bank-accounts/${mapped.destinationToken}`;
    return req.callAsJson(bankAccountResultSchema, requestOptions);
  }

  /**
   * Update a [bank account](page:working-with-resources/bank-accounts).
   *
   *
   * @param userToken         Auto-generated unique identifier representing a user,
   *                                                              prefixed with `user-`.
   * @param destinationToken  Auto-generated unique identifier representing a
   *                                                              transfer destination, including prepaid cards, bank
   *                                                              accounts, paper checks, and other users, prefixed
   *                                                              with `dest-`.
   * @param body
   * @return Response from the API call
   */
  async updateBankAccount(
    userToken: string,
    destinationToken: string,
    body?: CreateOrUpdateBankAccount,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BankAccountResult>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      destinationToken: [destinationToken, string()],
      body: [body, optional(createOrUpdateBankAccountSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/users/${mapped.userToken}/bank-accounts/${mapped.destinationToken}`;
    return req.callAsJson(bankAccountResultSchema, requestOptions);
  }

  /**
   * Delete (cloak) a user [bank account](page:working-with-resources/bank-accounts).
   *
   *
   * @param userToken         Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param destinationToken  Auto-generated unique identifier representing a transfer destination,
   *                                    including prepaid cards, bank accounts, paper checks, and other users, prefixed
   *                                    with `dest-`.
   * @return Response from the API call
   */
  async deleteBankAccount(
    userToken: string,
    destinationToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OperationResult>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      destinationToken: [destinationToken, string()],
    });
    req.appendTemplatePath`/users/${mapped.userToken}/bank-accounts/${mapped.destinationToken}`;
    return req.callAsJson(operationResultSchema, requestOptions);
  }

  /**
   * Retrieve requirements for adding a [bank account](page:working-with-resources/bank-accounts) using
   * the parameters provided.
   *
   *
   * @param userToken  Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param country    Filter results by country.
   * @param currency   Filter results by currency.
   * @return Response from the API call
   */
  async retrieveCreationRequirements(
    userToken: string,
    country?: Countries,
    currency?: Currencies,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BankAccountRequirementListResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      country: [country, optional(countriesSchema)],
      currency: [currency, optional(currenciesSchema)],
    });
    req.query('country', mapped.country);
    req.query('currency', mapped.currency);
    req.appendTemplatePath`/users/${mapped.userToken}/bank-accounts/requirements`;
    return req.callAsJson(
      bankAccountRequirementListResultSchema,
      requestOptions
    );
  }
}
