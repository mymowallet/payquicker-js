/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { Format, formatSchema } from '../models/format';
import {
  OperationResult,
  operationResultSchema,
} from '../models/operationResult';
import {
  PrepaidCardDataResult,
  prepaidCardDataResultSchema,
} from '../models/prepaidCardDataResult';
import {
  PrepaidCardDataTokenResult,
  prepaidCardDataTokenResultSchema,
} from '../models/prepaidCardDataTokenResult';
import {
  PrepaidCardPinResult,
  prepaidCardPinResultSchema,
} from '../models/prepaidCardPinResult';
import {
  PrepaidCardPinTokenResult,
  prepaidCardPinTokenResultSchema,
} from '../models/prepaidCardPinTokenResult';
import {
  RetrieveCardData,
  retrieveCardDataSchema,
} from '../models/retrieveCardData';
import {
  RetrieveCardPin,
  retrieveCardPinSchema,
} from '../models/retrieveCardPin';
import { Side, sideSchema } from '../models/side';
import { UpdateCardPin, updateCardPinSchema } from '../models/updateCardPin';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class ClientSideController extends BaseController {
  /**
   * Generate a token used to reveal [prepaid card](page:working-with-resources/prepaid-cards)
   * information in the form of image data (base64) or JSON.
   *
   *
   * @param userToken         Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param destinationToken  Auto-generated unique identifier representing a transfer destination,
   *                                    including prepaid cards, bank accounts, paper checks, and other users, prefixed
   *                                    with `dest-`.
   * @param format            Desired format for the prepaid card data.
   * @param side              Side to specify when retrieving a prepaid card's image data. *Required if
   *                                    IMAGE format specified.
   * @return Response from the API call
   */
  async createCardDataToken(
    userToken: string,
    destinationToken: string,
    format: Format,
    side?: Side,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PrepaidCardDataTokenResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      destinationToken: [destinationToken, string()],
      format: [format, formatSchema],
      side: [side, optional(sideSchema)],
    });
    req.query('format', mapped.format);
    req.query('side', mapped.side);
    req.appendTemplatePath`/users/${mapped.userToken}/prepaid-cards/${mapped.destinationToken}/pci`;
    return req.callAsJson(prepaidCardDataTokenResultSchema, requestOptions);
  }

  /**
   * Return [prepaid card](page:working-with-resources/prepaid-cards) data in the form of image data,
   * text, or both.
   *
   *
   * @param userToken         Auto-generated unique identifier representing a user,
   *                                                     prefixed with `user-`.
   * @param destinationToken  Auto-generated unique identifier representing a transfer
   *                                                     destination, including prepaid cards, bank accounts, paper
   *                                                     checks, and other users, prefixed with `dest-`.
   * @param format            Desired format for the prepaid card data.
   * @param side              Side to specify when retrieving a prepaid card's image data.
   *                                                     *Required if IMAGE format specified.
   * @param body
   * @return Response from the API call
   */
  async retrieveCardData(
    userToken: string,
    destinationToken: string,
    format: Format,
    side?: Side,
    body?: RetrieveCardData,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PrepaidCardDataResult>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      destinationToken: [destinationToken, string()],
      format: [format, formatSchema],
      side: [side, optional(sideSchema)],
      body: [body, optional(retrieveCardDataSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.query('format', mapped.format);
    req.query('side', mapped.side);
    req.json(mapped.body);
    req.appendTemplatePath`/users/${mapped.userToken}/prepaid-cards/${mapped.destinationToken}/pci`;
    return req.callAsJson(prepaidCardDataResultSchema, requestOptions);
  }

  /**
   * Retrieve one part of a two-part token required to reveal or set a client side [prepaid card](page:
   * working-with-resources/prepaid-cards) PIN.
   *
   *
   * @param userToken         Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param destinationToken  Auto-generated unique identifier representing a transfer destination,
   *                                    including prepaid cards, bank accounts, paper checks, and other users, prefixed
   *                                    with `dest-`.
   * @return Response from the API call
   */
  async createCardPINToken(
    userToken: string,
    destinationToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PrepaidCardPinTokenResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      destinationToken: [destinationToken, string()],
    });
    req.appendTemplatePath`/users/${mapped.userToken}/prepaid-cards/${mapped.destinationToken}/pin`;
    return req.callAsJson(prepaidCardPinTokenResultSchema, requestOptions);
  }

  /**
   * Set a [PIN](#/rest/models/structures/prepaid-card-pin) for a [prepaid card](page:working-with-
   * resources/prepaid-cards), if supported by program.
   *
   *
   * @param userToken         Auto-generated unique identifier representing a user, prefixed
   *                                                  with `user-`.
   * @param destinationToken  Auto-generated unique identifier representing a transfer
   *                                                  destination, including prepaid cards, bank accounts, paper checks,
   *                                                  and other users, prefixed with `dest-`.
   * @param body
   * @return Response from the API call
   */
  async updateCardPIN(
    userToken: string,
    destinationToken: string,
    body?: UpdateCardPin,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OperationResult>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      destinationToken: [destinationToken, string()],
      body: [body, optional(updateCardPinSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/users/${mapped.userToken}/prepaid-cards/${mapped.destinationToken}/pin`;
    return req.callAsJson(operationResultSchema, requestOptions);
  }

  /**
   * Reveal a [PIN](#/rest/models/structures/prepaid-card-pin) for a [prepaid card](page:working-with-
   * resources/prepaid-cards).
   *
   *
   * @param userToken         Auto-generated unique identifier representing a user, prefixed
   *                                                    with `user-`.
   * @param destinationToken  Auto-generated unique identifier representing a transfer
   *                                                    destination, including prepaid cards, bank accounts, paper
   *                                                    checks, and other users, prefixed with `dest-`.
   * @param body
   * @return Response from the API call
   */
  async retrieveCardPIN(
    userToken: string,
    destinationToken: string,
    body?: RetrieveCardPin,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PrepaidCardPinResult>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      destinationToken: [destinationToken, string()],
      body: [body, optional(retrieveCardPinSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/users/${mapped.userToken}/prepaid-cards/${mapped.destinationToken}/pin`;
    return req.callAsJson(prepaidCardPinResultSchema, requestOptions);
  }
}
