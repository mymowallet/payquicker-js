
# Getting Started with PQ API v2

## Introduction

PayQuicker offers a secure and instant payout platform that delivers payment to a payee-owned and insured bank account linked to a debit card, similar to a standard checking account.

As soon as the payment is made, funds are available in the insured account and available to spend instantly online through a virtual card, at retail with a plastic prepaid debit card, or by loading the card to a mobile wallet.

PayQuicker provides a RESTful API that allows authorized clients to send and receive payments, debit user's accounts for spendback, retrieve user account balance, retrieve user reports, and retrieve transaction reports.

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). It also requires **Typescript version 3.9+**. You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

> **NOTE:** npm is installed by default when Node.js is installed.

### Verify Successful Installation

Run the following commands in the command prompt or shell of your choice to check if Node.js and npm are successfully installed:

* Node.js: `node --version`

* npm: `npm --version`

![Version Check](https://apidocs.io/illustration/typescript?workspaceFolder=PayQuickerSDK&step=versionCheck)

### Install Dependencies

- To resolve all dependencies, go to the **SDK root directory** and run the following command with npm:

```bash
npm install
```

- This will install all dependencies in the **node_modules** folder.

![Resolve Dependencies](https://apidocs.io/illustration/typescript?workspaceFolder=PayQuickerSDK&workspaceName=pq-api-v-2-lib&step=resolveDependency)

## Installation

The following section explains how to use the generated library in a new project.

### 1. Initialize the Node Project

- Open an IDE/text editor for JavaScript like Visual Studio Code. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

- Click on **File** and select **Open Folder**. Select an empty folder of your project, the folder will become visible in the sidebar on the left.

![Open Folder](https://apidocs.io/illustration/typescript?step=openProject)

- To initialize the Node project, click on **Terminal** and select **New Terminal**. Execute the following command in the terminal:

```bash
npm init --y
```

![Initialize the Node Project](https://apidocs.io/illustration/typescript?step=initializeProject)

### 2. Add Dependencies to the Client Library

- The created project manages its dependencies using its `package.json` file. In order to add a dependency on the *PQ API v2Lib* client library, double click on the `package.json` file in the bar on the left and add the dependency to the package in it.

![Add PqApiV2Lib Dependency](https://apidocs.io/illustration/typescript?workspaceFolder=PayQuickerSDK&workspaceName=pq-api-v-2-lib&step=importDependency)

- To install the package in the project, run the following command in the terminal:

```bash
npm install
```

![Install PqApiV2Lib Dependency](https://apidocs.io/illustration/typescript?step=installDependency)

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `xMyPayQuickerVersion` | `string` | Date-based API Version specified in the header *required* on all calls.<br>*Default*: `'2020.02.24'` |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Sandbox`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `accessToken` | `string` | The OAuth 2.0 Access Token to use for API requests. |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524, 408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT', 'GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  xMyPayQuickerVersion: '2020.02.24',
  timeout: 0,
  environment: Environment.Sandbox,
  accessToken: 'AccessToken',
});
```

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| production | Production server. |
| sandbox | **Default** Sandbox is used for both sandbox testing and customer UAT. |
| sandbox1 | Sandbox1 is used for sandbox testing. |
| sandbox2 | Sandbox2 is used for sandbox testing. |
| sandbox3 | Sandbox3 is used for sandbox testing. |
| sandbox4 | Sandbox4 is used for sandbox testing. |
| development | Development is used for local development testing. |

## Authorization

This API uses `OAuth 2 Bearer token`.

## List of APIs

* [Agreements](doc/controllers/agreements.md)
* [Balances](doc/controllers/balances.md)
* [Bank Accounts](doc/controllers/bank-accounts.md)
* [Client Side](doc/controllers/client-side.md)
* [Compliance](doc/controllers/compliance.md)
* [Documents](doc/controllers/documents.md)
* [Events](doc/controllers/events.md)
* [Payments](doc/controllers/payments.md)
* [Prepaid Cards](doc/controllers/prepaid-cards.md)
* [Program](doc/controllers/program.md)
* [Receipts](doc/controllers/receipts.md)
* [Spendback](doc/controllers/spendback.md)
* [Statements](doc/controllers/statements.md)
* [Transfers](doc/controllers/transfers.md)
* [Users](doc/controllers/users.md)
* [Webhooks](doc/controllers/webhooks.md)

## Classes Documentation

* [ApiResponse](doc/api-response.md)
* [ApiError](doc/api-error.md)

