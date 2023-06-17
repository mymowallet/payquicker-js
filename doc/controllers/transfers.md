# Transfers

# Transfers

---


The *Transfers* resource describes a transfer quote from or to a user's account via a specified transfer method.

Depending on the program, the transfer of funds can be made to a prepaid card, bank account, or paper check belonging to the user. By default, transfers are queued for immediate processing; however, a future processing date can be specified in the request.

With this resource, you can perform the following requests:

* `POST`: Create a new transfer quote
* `GET`: Retrieve a transfer quote or list of transfer quotes
* `DELETE`: Delete a transfer quote

For more information, see [Transfers](page:working-with-resources/transfers).

```ts
const transfersController = new TransfersController(client);
```

## Class Name

`TransfersController`

## Methods

* [Accept Transfer Quote](../../doc/controllers/transfers.md#accept-transfer-quote)
* [Cancel Transfer Quote](../../doc/controllers/transfers.md#cancel-transfer-quote)
* [Create Transfer Quote](../../doc/controllers/transfers.md#create-transfer-quote)
* [List Transfers](../../doc/controllers/transfers.md#list-transfers)
* [List User Transfers](../../doc/controllers/transfers.md#list-user-transfers)
* [Retrieve Transfer](../../doc/controllers/transfers.md#retrieve-transfer)
* [Retrieve User Transfer](../../doc/controllers/transfers.md#retrieve-user-transfer)


# Accept Transfer Quote

Accept a [transfer](page:working-with-resources/transfers) quote.

```ts
async acceptTransferQuote(
  transferToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransferResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferToken` | `string` | Template, Required | Auto-generated unique identifier representing an individual transfer transaction, prefixed with `xfer-`.<br>**Constraints**: *Pattern*: `^xfer-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransferResult`](../../doc/models/transfer-result.md)

## Example Usage

```ts
const transferToken = 'xfer-0fac4aa8-43ac-447e-95f9-827f908a82ff';
try {
  const { result, ...httpResponse } = await transfersController.acceptTransferQuote(transferToken);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "token": "xfer-bf34989d-0b13-47ee-bd51-b96b0ecbe866",
  "clientTransferId": "0758a62d-16ec-4898-a1bb-f6fe2ea50d1e",
  "created": "2022-04-29T19:26:57Z",
  "destinationAmount": 25,
  "destinationCurrency": "USD",
  "destinationToken": "dest-b61bc870-8ab8-4870-a209-6398b60269d5",
  "fxRate": {
    "destinationAmount": 25,
    "destinationCurrency": "USD",
    "rate": 1,
    "sourceAmount": 25,
    "sourceCurrency": "USD"
  },
  "memo": "Memo - Card Transfer 1",
  "note": "Note - Card Transfer 1",
  "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
  "status": "ACCEPTED",
  "receiptToken": "rcpt-c7740028-c65f-4574-b029-16aee3c434f7",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/transfers/xfer-bf34989d-0b13-47ee-bd51-b96b0ecbe866",
      "params": {
        "rel": "self"
      }
    }
  ],
  "meta": {
    "timezone": "GMT"
  }
}
```


# Cancel Transfer Quote

Optional [transfer](page:working-with-resources/transfers) quote cancellation that auto-cancels after a period organically expires or when account activity invalidates the quote.

```ts
async cancelTransferQuote(
  transferToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransferResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferToken` | `string` | Template, Required | Auto-generated unique identifier representing an individual transfer transaction, prefixed with `xfer-`.<br>**Constraints**: *Pattern*: `^xfer-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransferResult`](../../doc/models/transfer-result.md)

## Example Usage

```ts
const transferToken = 'xfer-0fac4aa8-43ac-447e-95f9-827f908a82ff';
try {
  const { result, ...httpResponse } = await transfersController.cancelTransferQuote(transferToken);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "token": "xfer-bf34989d-0b13-47ee-bd51-b96b0ecbe866",
  "clientTransferId": "0758a62d-16ec-4898-a1bb-f6fe2ea50d1e",
  "created": "2022-04-29T19:26:57Z",
  "destinationAmount": 25,
  "destinationCurrency": "USD",
  "destinationToken": "dest-b61bc870-8ab8-4870-a209-6398b60269d5",
  "fxRate": {
    "destinationAmount": 25,
    "destinationCurrency": "USD",
    "rate": 1,
    "sourceAmount": 25,
    "sourceCurrency": "USD"
  },
  "memo": "Memo - Card Transfer 1",
  "note": "Note - Card Transfer 1",
  "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
  "status": "ACCEPTED",
  "receiptToken": "rcpt-c7740028-c65f-4574-b029-16aee3c434f7",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/transfers/xfer-bf34989d-0b13-47ee-bd51-b96b0ecbe866",
      "params": {
        "rel": "self"
      }
    }
  ],
  "meta": {
    "timezone": "GMT"
  }
}
```


# Create Transfer Quote

Create a new [transfer](page:working-with-resources/transfers) quote.

```ts
async createTransferQuote(
  body?: CreateTransferQuote,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransferResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateTransferQuote \| undefined`](../../doc/models/create-transfer-quote.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransferResult`](../../doc/models/transfer-result.md)

## Example Usage

```ts
const contentType = null;
const body: CreateTransferQuote = {};
body.sourceToken = 'acct-be6f7a9c-8fd8-4e9c-a38d-7849ace272a6';
body.destinationToken = 'acct-5947355c-4c22-4596-8247-31a01a7a7093';
body.note = 'Note - Company Acct to Acct (unload)';
body.memo = 'Memo - Company Acct to Acct (unload)';
body.clientTransferId = '484bd493-724e-4d8a-bd63-b629e079b065';
body.destinationAmount = 6.98;
body.destinationCurrency = 'USD';

try {
  const { result, ...httpResponse } = await transfersController.createTransferQuote(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "token": "xfer-bf34989d-0b13-47ee-bd51-b96b0ecbe866",
  "clientTransferId": "0758a62d-16ec-4898-a1bb-f6fe2ea50d1e",
  "created": "2022-04-29T19:26:57Z",
  "destinationAmount": 25,
  "destinationCurrency": "USD",
  "destinationToken": "dest-b61bc870-8ab8-4870-a209-6398b60269d5",
  "fxRate": {
    "destinationAmount": 25,
    "destinationCurrency": "USD",
    "rate": 1,
    "sourceAmount": 25,
    "sourceCurrency": "USD"
  },
  "memo": "Memo - Card Transfer 1",
  "note": "Note - Card Transfer 1",
  "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
  "status": "ACCEPTED",
  "receiptToken": "rcpt-c7740028-c65f-4574-b029-16aee3c434f7",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/transfers/xfer-bf34989d-0b13-47ee-bd51-b96b0ecbe866",
      "params": {
        "rel": "self"
      }
    }
  ],
  "meta": {
    "timezone": "GMT"
  }
}
```


# List Transfers

Retrieve a list of [transfers](page:working-with-resources/transfers) that supports filtering, sorting, and pagination through existing mechanisms.

```ts
async listTransfers(
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransferListResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number` | Query, Required | Page number of specific page to return<br>**Constraints**: `>= 1` |
| `pageSize` | `number` | Query, Required | Number of items to be displayed per page<br>**Constraints**: `>= 1`, `<= 50` |
| `filter` | `string \| undefined` | Query, Optional | Filter request results by specific criteria. |
| `sort` | `string \| undefined` | Query, Optional | Sort request results by specific attribute. |
| `language` | [`Languages \| undefined`](../../doc/models/languages.md) | Query, Optional | Filter results by language type. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransferListResult`](../../doc/models/transfer-list-result.md)

## Example Usage

```ts
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await transfersController.listTransfers(page, pageSize, None, None, language);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "payload": [
    {
      "token": "xfer-b5f99817-3ac3-401b-9030-50704ae42f83",
      "clientTransferId": "60c5d808-b7b0-45a7-8ec9-f13605f3c59b",
      "created": "2022-04-29T16:35:44Z",
      "destinationAmount": 6.98,
      "destinationCurrency": "USD",
      "destinationToken": "dest-e5bf351d-71b9-4649-b8e8-96e466fc50a5",
      "memo": "Memo - Company Acct to Acct (unload)",
      "note": "Note - Company Acct to Acct (unload)",
      "sourceToken": "acct-be6f7a9c-8fd8-4e9c-a38d-7849ace272a6",
      "status": "FAILED",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/transfers/xfer-b5f99817-3ac3-401b-9030-50704ae42f83",
          "params": {
            "rel": "self"
          }
        }
      ]
    }
  ],
  "meta": {
    "pageNo": "1",
    "pageSize": "5",
    "pageCount": "1",
    "recordCount": "1",
    "timezone": "GMT"
  },
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/transfers/xfer-b5f99817-3ac3-401b-9030-50704ae42f83",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# List User Transfers

Retrieve a list of user [transfers](page:working-with-resources/transfers) that supports filtering, sorting, and pagination through existing mechanisms.

```ts
async listUserTransfers(
  userToken: string,
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransferListResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `page` | `number` | Query, Required | Page number of specific page to return<br>**Constraints**: `>= 1` |
| `pageSize` | `number` | Query, Required | Number of items to be displayed per page<br>**Constraints**: `>= 1`, `<= 50` |
| `filter` | `string \| undefined` | Query, Optional | Filter request results by specific criteria. |
| `sort` | `string \| undefined` | Query, Optional | Sort request results by specific attribute. |
| `language` | [`Languages \| undefined`](../../doc/models/languages.md) | Query, Optional | Filter results by language type. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransferListResult`](../../doc/models/transfer-list-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await transfersController.listUserTransfers(userToken, page, pageSize, None, None, language);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "payload": [
    {
      "token": "xfer-b5f99817-3ac3-401b-9030-50704ae42f83",
      "clientTransferId": "60c5d808-b7b0-45a7-8ec9-f13605f3c59b",
      "created": "2022-04-29T16:35:44Z",
      "destinationAmount": 6.98,
      "destinationCurrency": "USD",
      "destinationToken": "dest-e5bf351d-71b9-4649-b8e8-96e466fc50a5",
      "memo": "Memo - Company Acct to Acct (unload)",
      "note": "Note - Company Acct to Acct (unload)",
      "sourceToken": "acct-be6f7a9c-8fd8-4e9c-a38d-7849ace272a6",
      "status": "FAILED",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/transfers/xfer-b5f99817-3ac3-401b-9030-50704ae42f83",
          "params": {
            "rel": "self"
          }
        }
      ]
    }
  ],
  "meta": {
    "pageNo": "1",
    "pageSize": "5",
    "pageCount": "1",
    "recordCount": "1",
    "timezone": "GMT"
  },
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/transfers/xfer-b5f99817-3ac3-401b-9030-50704ae42f83",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# Retrieve Transfer

Retrieve details of a specific [transfer](page:working-with-resources/transfers) represented by a transfer token.

```ts
async retrieveTransfer(
  transferToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransferResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferToken` | `string` | Template, Required | Auto-generated unique identifier representing an individual transfer transaction, prefixed with `xfer-`.<br>**Constraints**: *Pattern*: `^xfer-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransferResult`](../../doc/models/transfer-result.md)

## Example Usage

```ts
const transferToken = 'xfer-0fac4aa8-43ac-447e-95f9-827f908a82ff';
try {
  const { result, ...httpResponse } = await transfersController.retrieveTransfer(transferToken);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "token": "xfer-bf34989d-0b13-47ee-bd51-b96b0ecbe866",
  "clientTransferId": "0758a62d-16ec-4898-a1bb-f6fe2ea50d1e",
  "created": "2022-04-29T19:26:57Z",
  "destinationAmount": 25,
  "destinationCurrency": "USD",
  "destinationToken": "dest-b61bc870-8ab8-4870-a209-6398b60269d5",
  "fxRate": {
    "destinationAmount": 25,
    "destinationCurrency": "USD",
    "rate": 1,
    "sourceAmount": 25,
    "sourceCurrency": "USD"
  },
  "memo": "Memo - Card Transfer 1",
  "note": "Note - Card Transfer 1",
  "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
  "status": "ACCEPTED",
  "receiptToken": "rcpt-c7740028-c65f-4574-b029-16aee3c434f7",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/transfers/xfer-bf34989d-0b13-47ee-bd51-b96b0ecbe866",
      "params": {
        "rel": "self"
      }
    }
  ],
  "meta": {
    "timezone": "GMT"
  }
}
```


# Retrieve User Transfer

Retrieve a specific user bank [transfer](page:working-with-resources/transfers).

```ts
async retrieveUserTransfer(
  userToken: string,
  transferToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransferResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `transferToken` | `string` | Template, Required | Auto-generated unique identifier representing a transfer, prefixed with `xfer-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^xfer-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransferResult`](../../doc/models/transfer-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const transferToken = 'xfer-bf34989d-0b13-47ee-bd51-b96b0ecbe866';
try {
  const { result, ...httpResponse } = await transfersController.retrieveUserTransfer(userToken, transferToken);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "token": "xfer-bf34989d-0b13-47ee-bd51-b96b0ecbe866",
  "clientTransferId": "0758a62d-16ec-4898-a1bb-f6fe2ea50d1e",
  "created": "2022-04-29T19:26:57Z",
  "destinationAmount": 25,
  "destinationCurrency": "USD",
  "destinationToken": "dest-b61bc870-8ab8-4870-a209-6398b60269d5",
  "fxRate": {
    "destinationAmount": 25,
    "destinationCurrency": "USD",
    "rate": 1,
    "sourceAmount": 25,
    "sourceCurrency": "USD"
  },
  "memo": "Memo - Card Transfer 1",
  "note": "Note - Card Transfer 1",
  "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
  "status": "ACCEPTED",
  "receiptToken": "rcpt-c7740028-c65f-4574-b029-16aee3c434f7",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/transfers/xfer-bf34989d-0b13-47ee-bd51-b96b0ecbe866",
      "params": {
        "rel": "self"
      }
    }
  ],
  "meta": {
    "timezone": "GMT"
  }
}
```

