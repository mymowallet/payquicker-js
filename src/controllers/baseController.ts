/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ClientInterface, SdkRequestBuilderFactory } from '../clientInterface';

/** Base class for all controllers */
export class BaseController {
  /** Create a request builder */
  protected createRequest: SdkRequestBuilderFactory;

  constructor(client: ClientInterface) {
    this.createRequest = client.getRequestBuilderFactory();
  }
}
