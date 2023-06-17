/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { accessTokenAuthenticationProvider } from './authentication';
import {
  AuthParams,
  ClientInterface,
  SdkRequestBuilder,
  SdkRequestBuilderFactory,
  Server,
} from './clientInterface';
import { Configuration, Environment } from './configuration';
import {
  DEFAULT_CONFIGURATION,
  DEFAULT_RETRY_CONFIG,
} from './defaultConfiguration';
import { ApiError } from './core';
import { setHeader } from './core';
import { updateUserAgent } from './core';
import {
  AbortError,
  AuthenticatorInterface,
  createRequestBuilderFactory,
  HttpClientInterface,
  RetryConfiguration,
} from './core';
 import { HttpClient } from './clientAdapter';

export class Client implements ClientInterface {
  private _config: Readonly<Configuration>;
  private _timeout: number;
  private _retryConfig: RetryConfiguration;
  private _requestBuilderFactory: SdkRequestBuilderFactory;
  private _userAgent: string;

  constructor(config?: Partial<Configuration>) {
    this._config = {
      ...DEFAULT_CONFIGURATION,
      ...config,
    };
    this._retryConfig = {
      ...DEFAULT_RETRY_CONFIG,
      ...this._config.httpClientOptions?.retryConfig,
    };
    this._timeout =
      typeof this._config.httpClientOptions?.timeout != 'undefined'
        ? this._config.httpClientOptions.timeout
        : this._config.timeout;
    this._userAgent = updateUserAgent(
      'PayQuicker SDK 2020.02.24',
    );
    this._requestBuilderFactory = createRequestHandlerFactory(
      server => getBaseUri(server, this._config),
      accessTokenAuthenticationProvider(this._config),
      new HttpClient(AbortError, {
        timeout: this._timeout,
        clientConfigOverrides: this._config.unstable_httpClientOptions,
        httpAgent: this._config.httpClientOptions?.httpAgent,
        httpsAgent: this._config.httpClientOptions?.httpsAgent,
      }),
      [
        withErrorHandlers,
        withUserAgent(this._userAgent),
        withAuthenticationByDefault,
        withXMyPayQuickerVersion(this._config),
      ],
      this._retryConfig
    );
  }

  public getRequestBuilderFactory(): SdkRequestBuilderFactory {
    return this._requestBuilderFactory;
  }

  /**
   * Clone this client and override given configuration options
   */
  public withConfiguration(config: Partial<Configuration>) {
    return new Client({ ...this._config, ...config });
  }
}

function createHttpClientAdapter(client: HttpClient): HttpClientInterface {
  return async (request, requestOptions) => {
    return await client.executeRequest(request, requestOptions);
  };
}

function getBaseUri(server: Server = 'default', config: Configuration): string {
  if (config.environment === Environment.Production) {
    if (server === 'default') {
      return 'https://platform.mypayquicker.com/api/v2';
    }
  }
  if (config.environment === Environment.Sandbox) {
    if (server === 'default') {
      return 'https://platform.mypayquicker.build/api/v2';
    }
  }
  if (config.environment === Environment.Sandbox1) {
    if (server === 'default') {
      return 'https://platform.sb1.mypayquicker.build/api/v2';
    }
  }
  if (config.environment === Environment.Sandbox2) {
    if (server === 'default') {
      return 'https://platform.sb2.mypayquicker.build/api/v2';
    }
  }
  if (config.environment === Environment.Sandbox3) {
    if (server === 'default') {
      return 'https://platform.sb3.mypayquicker.build/api/v2';
    }
  }
  if (config.environment === Environment.Sandbox4) {
    if (server === 'default') {
      return 'https://platform.sb4.mypayquicker.build/api/v2';
    }
  }
  if (config.environment === Environment.Development) {
    if (server === 'default') {
      return 'https://platform.mypayquicker.dev/api/v2';
    }
  }
  throw new Error('Could not get Base URL. Invalid environment or server.');
}

function createRequestHandlerFactory(
  baseUrlProvider: (server?: Server) => string,
  authProvider: AuthenticatorInterface<AuthParams>,
  httpClient: HttpClient,
  addons: ((rb: SdkRequestBuilder) => void)[],
  retryConfig: RetryConfiguration
): SdkRequestBuilderFactory {
  const requestBuilderFactory = createRequestBuilderFactory(
    createHttpClientAdapter(httpClient),
    baseUrlProvider,
    ApiError,
    authProvider,
    retryConfig
  );

  return tap(requestBuilderFactory, ...addons);
}

function tap(
  requestBuilderFactory: SdkRequestBuilderFactory,
  ...callback: ((requestBuilder: SdkRequestBuilder) => void)[]
): SdkRequestBuilderFactory {
  return (...args) => {
    const requestBuilder = requestBuilderFactory(...args);
    callback.forEach(c => c(requestBuilder));
    return requestBuilder;
  };
}

function withErrorHandlers(rb: SdkRequestBuilder) {
  rb.defaultToError(ApiError);
}

function withUserAgent(userAgent: string) {
  return (rb: SdkRequestBuilder) => {
    rb.interceptRequest(request => {
      const headers = request.headers ?? {};
      setHeader(headers, 'user-agent', userAgent);
      return { ...request, headers };
    });
  };
}

function withXMyPayQuickerVersion({ xMyPayQuickerVersion }: { xMyPayQuickerVersion: string }) {
  return (rb: SdkRequestBuilder) => {
    rb.interceptRequest(request => {
      const headers = request.headers ?? {};
      setHeader(headers, 'X-MyPayQuicker-Version', xMyPayQuickerVersion);
      return { ...request, headers };
    });
  };
}

function withAuthenticationByDefault(rb: SdkRequestBuilder) {
  rb.authenticate(true);
}
