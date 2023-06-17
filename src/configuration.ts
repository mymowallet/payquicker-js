/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { HttpClientOptions } from './clientAdapter';

/** An interface for all configuration parameters required by the SDK. */
export interface Configuration {
  timeout: number;
  xMyPayQuickerVersion: string;
  environment: Environment;
  accessToken: string;
  httpClientOptions?: Partial<HttpClientOptions>;
  unstable_httpClientOptions?: any;
}

/** Environments available for API */
export enum Environment {
  Production = 'production',
  Sandbox = 'sandbox',
  Sandbox1 = 'sandbox1',
  Sandbox2 = 'sandbox2',
  Sandbox3 = 'sandbox3',
  Sandbox4 = 'sandbox4',
  Development = 'development',
}
