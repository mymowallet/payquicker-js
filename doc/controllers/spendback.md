# Spendback

# Spendback

---


The *Spendback* resource represents a closed-loop and pull-based payment method that will allow users to make a payment from a prepaid card or wallet.

With this resource, you can perform the following requests:

* `POST`: Quote a spendback
* `GET`: Retrieve a spendback quote or list of spendback quotes
* `PATCH`: Update a spendback quote
* `DELETE`: Delete a spendback quote

For more information, see [Spendback](page:working-with-resources/spendbacks).

```ts
const spendbackController = new SpendbackController(client);
```

## Class Name

`SpendbackController`

## Methods

* [Accept Spendback Quote](../../doc/controllers/spendback.md#accept-spendback-quote)
* [Cancel Spendback Quote](../../doc/controllers/spendback.md#cancel-spendback-quote)
* [Create Spendback Quote](../../doc/controllers/spendback.md#create-spendback-quote)
* [Fully Refund Spendback](../../doc/controllers/spendback.md#fully-refund-spendback)
* [List Spendbacks](../../doc/controllers/spendback.md#list-spendbacks)
* [Partially Refund Spendback](../../doc/controllers/spendback.md#partially-refund-spendback)
* [Retrieve Spendback](../../doc/controllers/spendback.md#retrieve-spendback)


# Accept Spendback Quote

Accept an open [spendback](page:working-with-resources/spendbacks) quote.

```ts
async acceptSpendbackQuote(
  spendbackToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SpendbackQuoteAcceptResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `spendbackToken` | `string` | Template, Required | Auto-generated unique identifier representing an individual spend back transaction and quote, prefixed with `spnd-`.<br>**Constraints**: *Pattern*: `^spnd-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SpendbackQuoteAcceptResult`](../../doc/models/spendback-quote-accept-result.md)

## Example Usage

```ts
const spendbackToken = 'spnd-c39437e1-dc80-4293-8211-c14b5a32f762';
try {
  const { result, ...httpResponse } = await spendbackController.acceptSpendbackQuote(spendbackToken);
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
  "token": "spnd-4c414196-d3dd-4233-a729-6fc2da0810eb",
  "amount": 300,
  "autoAcceptQuote": false,
  "clientSpendbackId": "08c6d59d-a04d-4603-8104-10c9d4c61f0d",
  "created": "2022-05-02T16:45:09Z",
  "currency": "USD",
  "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
  "memo": "Spendback 1 Memo",
  "note": "Spendback 1 Note",
  "purpose": "EXPENSE",
  "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
  "status": "ACCEPTED",
  "receiptToken": "rcpt-220101e5-b2b6-429f-bd76-0a790b70b42d",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/spend-back/spnd-4c414196-d3dd-4233-a729-6fc2da0810eb",
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


# Cancel Spendback Quote

Cancel an open [spendback](page:working-with-resources/spendbacks) quote.

```ts
async cancelSpendbackQuote(
  spendbackToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SpendbackResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `spendbackToken` | `string` | Template, Required | Auto-generated unique identifier representing an individual spend back transaction and quote, prefixed with `spnd-`.<br>**Constraints**: *Pattern*: `^spnd-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SpendbackResult`](../../doc/models/spendback-result.md)

## Example Usage

```ts
const spendbackToken = 'spnd-c39437e1-dc80-4293-8211-c14b5a32f762';
try {
  const { result, ...httpResponse } = await spendbackController.cancelSpendbackQuote(spendbackToken);
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
  "token": "spnd-4c414196-d3dd-4233-a729-6fc2da0810eb",
  "amount": 300,
  "autoAcceptQuote": false,
  "clientSpendbackId": "08c6d59d-a04d-4603-8104-10c9d4c61f0d",
  "created": "2022-05-02T16:45:09Z",
  "currency": "USD",
  "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
  "memo": "Spendback 1 Memo",
  "note": "Spendback 1 Note",
  "purpose": "EXPENSE",
  "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
  "status": "PENDING_ACCEPTANCE",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/spend-back/spnd-4c414196-d3dd-4233-a729-6fc2da0810eb",
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


# Create Spendback Quote

Create a [spendback](page:working-with-resources/spendbacks) quote.

```ts
async createSpendbackQuote(
  body?: CreateSpendbackQuote,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SpendbackResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateSpendbackQuote \| undefined`](../../doc/models/create-spendback-quote.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SpendbackResult`](../../doc/models/spendback-result.md)

## Example Usage

```ts
const contentType = null;
const body: CreateSpendbackQuote = {};
body.amount = 300;
body.currency = 'USD';
body.sourceToken = 'user-ae92315b-6190-4e56-bdf5-c0189ac420a1';
body.destinationToken = 'acct-3908ab5a-6ce1-474d-8b80-a63a7b147860';
body.memo = 'Spendback 1 Memo';
body.note = 'Spendback 1 Note';
body.purpose = 'EXPENSE';
body.clientSpendbackId = '3f038854-1bd6-4af9-9a02-c529104fc728';
body.autoAcceptQuote = false;

try {
  const { result, ...httpResponse } = await spendbackController.createSpendbackQuote(body);
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
  "token": "spnd-4c414196-d3dd-4233-a729-6fc2da0810eb",
  "amount": 300,
  "autoAcceptQuote": false,
  "clientSpendbackId": "08c6d59d-a04d-4603-8104-10c9d4c61f0d",
  "created": "2022-05-02T16:45:09Z",
  "currency": "USD",
  "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
  "memo": "Spendback 1 Memo",
  "note": "Spendback 1 Note",
  "purpose": "EXPENSE",
  "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
  "status": "PENDING_ACCEPTANCE",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/spend-back/spnd-4c414196-d3dd-4233-a729-6fc2da0810eb",
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


# Fully Refund Spendback

Perform a [spendback](page:working-with-resources/spendbacks) refund for the full amount.

```ts
async fullyRefundSpendback(
  spendbackToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OperationResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `spendbackToken` | `string` | Template, Required | Auto-generated unique identifier representing an individual spend back transaction and quote, prefixed with `spnd-`.<br>**Constraints**: *Pattern*: `^spnd-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OperationResult`](../../doc/models/operation-result.md)

## Example Usage

```ts
const spendbackToken = 'spnd-c39437e1-dc80-4293-8211-c14b5a32f762';
try {
  const { result, ...httpResponse } = await spendbackController.fullyRefundSpendback(spendbackToken);
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
  "result": true,
  "meta": {
    "timezone": "GMT"
  }
}
```


# List Spendbacks

Retrieve a list of [spendbacks](page:working-with-resources/spendbacks) that supports filtering, sorting, and pagination through existing mechanisms.

```ts
async listSpendbacks(
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SpendbackListResult>>
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

[`SpendbackListResult`](../../doc/models/spendback-list-result.md)

## Example Usage

```ts
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await spendbackController.listSpendbacks(page, pageSize, None, None, language);
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
      "token": "spnd-c62fd949-78ef-4f32-aef7-5de8d0c6f4a7",
      "amount": 300,
      "autoAcceptQuote": false,
      "clientSpendbackId": "8c3b61d7-1f5a-4bb9-8ffc-ac756c27a3e1",
      "created": "2021-06-08T19:30:03Z",
      "currency": "USD",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "memo": "Spendback 1 Memo",
      "note": "Spendback 1 Note",
      "purpose": "EXPENSE",
      "sourceToken": "user-b41dee0e-f1ca-4e1b-9e1e-e95d13ad8fa2",
      "status": "ACCEPTED",
      "receiptToken": "rcpt-4aaa0738-24d9-40bd-a548-18932a6c7f5c",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/spend-back/spnd-c62fd949-78ef-4f32-aef7-5de8d0c6f4a7",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "spnd-9d769a60-4d59-4905-bb46-8f6856121f2a",
      "amount": 35,
      "autoAcceptQuote": false,
      "clientSpendbackId": "37ebee96-eb48-4689-8079-b650e2a4e753",
      "created": "2021-06-08T19:31:56Z",
      "currency": "USD",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "memo": "Spendback 1 Memo",
      "note": "Spendback 1 Note",
      "purpose": "EXPENSE",
      "sourceToken": "user-b41dee0e-f1ca-4e1b-9e1e-e95d13ad8fa2",
      "status": "CANCELLED",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/spend-back/spnd-9d769a60-4d59-4905-bb46-8f6856121f2a",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "spnd-bc16fb78-e391-4796-8a82-4fe7d7473c1a",
      "amount": 100,
      "autoAcceptQuote": true,
      "clientSpendbackId": "35bc04d0-e98f-4ca9-817b-d62c3b320d6f",
      "created": "2021-06-08T19:33:18Z",
      "currency": "USD",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "memo": "Spendback 1 Memo",
      "note": "Spendback 1 Note",
      "purpose": "EXPENSE",
      "sourceToken": "user-b41dee0e-f1ca-4e1b-9e1e-e95d13ad8fa2",
      "status": "ACCEPTED",
      "receiptToken": "rcpt-6dbd9a70-75c9-49b7-aff6-34708ed491df",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/spend-back/spnd-bc16fb78-e391-4796-8a82-4fe7d7473c1a",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "spnd-4d14117c-3e8b-4275-9863-f85762ac32fb",
      "amount": 100,
      "autoAcceptQuote": true,
      "clientSpendbackId": "SPENDBACKRETURN-79f6126943bd451f99bb38649da1ea10",
      "created": "2021-06-08T19:34:33Z",
      "currency": "USD",
      "destinationToken": "acct-70739320-c917-425c-a77a-d647c65fd175",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "status": "FAILED",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/spend-back/spnd-4d14117c-3e8b-4275-9863-f85762ac32fb",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "spnd-25b877b2-fb00-4c9a-a464-f91a6597e752",
      "amount": 20,
      "autoAcceptQuote": true,
      "clientSpendbackId": "9b97af1c-53b6-42a0-b19c-eaffdc48a854",
      "created": "2021-06-08T19:35:00Z",
      "currency": "USD",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "memo": "Spendback 1 Memo",
      "note": "Spendback 1 Note",
      "purpose": "EXPENSE",
      "sourceToken": "user-b41dee0e-f1ca-4e1b-9e1e-e95d13ad8fa2",
      "status": "ACCEPTED",
      "receiptToken": "rcpt-e69b9edb-23c3-4a47-900c-60b7addbbae2",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/spend-back/spnd-25b877b2-fb00-4c9a-a464-f91a6597e752",
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
    "pageCount": "13",
    "recordCount": "64",
    "timezone": "GMT"
  },
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/spend-back?page=1&pageSize=5&language=en-US",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# Partially Refund Spendback

Perform a [spendback](page:working-with-resources/spendbacks) refund for a partial amount.

```ts
async partiallyRefundSpendback(
  spendbackToken: string,
  body?: PartialSpendbackRefund,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OperationResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `spendbackToken` | `string` | Template, Required | Auto-generated unique identifier representing an individual spend back transaction and quote, prefixed with `spnd-`.<br>**Constraints**: *Pattern*: `^spnd-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `body` | [`PartialSpendbackRefund \| undefined`](../../doc/models/partial-spendback-refund.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OperationResult`](../../doc/models/operation-result.md)

## Example Usage

```ts
const spendbackToken = 'spnd-c39437e1-dc80-4293-8211-c14b5a32f762';
const contentType = null;
const body: PartialSpendbackRefund = {};
body.amount = 1.13;

try {
  const { result, ...httpResponse } = await spendbackController.partiallyRefundSpendback(spendbackToken, body);
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
  "result": true,
  "meta": {
    "timezone": "GMT"
  }
}
```


# Retrieve Spendback

Retrieve a single [spendbacks](page:working-with-resources/spendbacks) quote using the spendback token.

```ts
async retrieveSpendback(
  spendbackToken: string,
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SpendbackResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `spendbackToken` | `string` | Template, Required | Auto-generated unique identifier representing an individual spend back transaction and quote, prefixed with `spnd-`.<br>**Constraints**: *Pattern*: `^spnd-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `page` | `number` | Query, Required | Page number of specific page to return<br>**Constraints**: `>= 1` |
| `pageSize` | `number` | Query, Required | Number of items to be displayed per page<br>**Constraints**: `>= 1`, `<= 50` |
| `filter` | `string \| undefined` | Query, Optional | Filter request results by specific criteria. |
| `sort` | `string \| undefined` | Query, Optional | Sort request results by specific attribute. |
| `language` | [`Languages \| undefined`](../../doc/models/languages.md) | Query, Optional | Filter results by language type. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SpendbackResult`](../../doc/models/spendback-result.md)

## Example Usage

```ts
const spendbackToken = 'spnd-c39437e1-dc80-4293-8211-c14b5a32f762';
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await spendbackController.retrieveSpendback(spendbackToken, page, pageSize, None, None, language);
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
  "token": "spnd-4c414196-d3dd-4233-a729-6fc2da0810eb",
  "amount": 300,
  "autoAcceptQuote": false,
  "clientSpendbackId": "08c6d59d-a04d-4603-8104-10c9d4c61f0d",
  "created": "2022-05-02T16:45:09Z",
  "currency": "USD",
  "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
  "memo": "Spendback 1 Memo",
  "note": "Spendback 1 Note",
  "purpose": "EXPENSE",
  "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
  "status": "PENDING_ACCEPTANCE",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/spend-back/spnd-4c414196-d3dd-4233-a729-6fc2da0810eb",
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

