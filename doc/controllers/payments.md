# Payments

# Payments

---


The *Payments* resource allows you to list, retrieve, and retract payments, as well as create, accept and cancel payment quotes.

A payment is a type of transfer that goes from the funding account to the user's wallet and the only transfer type to support the `autoAccept` property so that the transfer is performed synchronously as opposed to other transfer types that must first be quoted and then accepted in a seperate API call. By default, payments are queued for immediate processing; however, a future processing date can be specified in the request.

With this resource, you can perform the following requests:

* `POST`: Create a new payment quote
* `POST`: Accept a payment quote via the payment token
* `PUT`: Retract a payment quote via the payment token
* `GET`: Retrieve a payment quote or list of payment quotes
* `DELETE`: Cancel a payment quote via the payment token

For more information, see [Payments](page:working-with-resources/payments).

```ts
const paymentsController = new PaymentsController(client);
```

## Class Name

`PaymentsController`

## Methods

* [Accept Payment Quote](../../doc/controllers/payments.md#accept-payment-quote)
* [Cancel Payment Quote](../../doc/controllers/payments.md#cancel-payment-quote)
* [Create Payment Quote](../../doc/controllers/payments.md#create-payment-quote)
* [List Payments](../../doc/controllers/payments.md#list-payments)
* [Retract Payment](../../doc/controllers/payments.md#retract-payment)
* [Retrieve Payment](../../doc/controllers/payments.md#retrieve-payment)


# Accept Payment Quote

Accept an open [payment](page:working-with-resources/payments) quote.

```ts
async acceptPaymentQuote(
  paymentToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentToken` | `string` | Template, Required | Auto-generated unique identifier representing an individual payment transaction and quote, prefixed with `pmnt-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^pmnt-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentResult`](../../doc/models/payment-result.md)

## Example Usage

```ts
const paymentToken = 'pmnt-d3ff8a0d-aec9-49a6-a95b-6191aebeca20';
try {
  const { result, ...httpResponse } = await paymentsController.acceptPaymentQuote(paymentToken);
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
  "token": "pmnt-37be18b6-301a-4a37-8723-ddf645abcdb7",
  "amount": -1500,
  "autoAcceptQuote": false,
  "clientPaymentId": "de6269af-e3b0-4d4b-801d-367776b32f63",
  "created": "2022-04-26T15:16:18Z",
  "currency": "USD",
  "destinationToken": "dest-2bbfc967-d12e-4647-a887-d905172fb4bc",
  "memo": "Payment 1 Memo",
  "note": "Payment 1 Note",
  "purpose": "INCOME",
  "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
  "status": "ACCEPTED",
  "receiptToken": "rcpt-30bfaaf3-69bc-4ed5-ad6a-d38705cf0281",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/payments/pmnt-37be18b6-301a-4a37-8723-ddf645abcdb7",
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


# Cancel Payment Quote

Cancel an open [payment](page:working-with-resources/payments) quote.

```ts
async cancelPaymentQuote(
  paymentToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentToken` | `string` | Template, Required | Auto-generated unique identifier representing an individual payment transaction and quote, prefixed with `pmnt-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^pmnt-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentResult`](../../doc/models/payment-result.md)

## Example Usage

```ts
const paymentToken = 'pmnt-d3ff8a0d-aec9-49a6-a95b-6191aebeca20';
try {
  const { result, ...httpResponse } = await paymentsController.cancelPaymentQuote(paymentToken);
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
  "token": "pmnt-37be18b6-301a-4a37-8723-ddf645abcdb7",
  "amount": -1500,
  "autoAcceptQuote": false,
  "clientPaymentId": "de6269af-e3b0-4d4b-801d-367776b32f63",
  "created": "2022-04-26T15:16:18Z",
  "currency": "USD",
  "destinationToken": "dest-2bbfc967-d12e-4647-a887-d905172fb4bc",
  "memo": "Payment 1 Memo",
  "note": "Payment 1 Note",
  "purpose": "INCOME",
  "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
  "status": "ACCEPTED",
  "receiptToken": "rcpt-30bfaaf3-69bc-4ed5-ad6a-d38705cf0281",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/payments/pmnt-37be18b6-301a-4a37-8723-ddf645abcdb7",
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


# Create Payment Quote

Create a [payment](page:working-with-resources/payments) quote.

```ts
async createPaymentQuote(
  body?: CreatePaymentQuote,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreatePaymentQuote \| undefined`](../../doc/models/create-payment-quote.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentResult`](../../doc/models/payment-result.md)

## Example Usage

```ts
const contentType = null;
const body: CreatePaymentQuote = {};
body.amount = 1500;
body.currency = 'USD';
body.sourceToken = 'acct-3908ab5a-6ce1-474d-8b80-a63a7b147860';
body.destinationToken = 'dest-ae92315b-6190-4e56-bdf5-c0189ac420a1';
body.note = 'Payment 1 Note';
body.memo = 'Payment 1 Memo';
body.purpose = 'INCOME';
body.clientPaymentId = '929fcf00-5a4f-4613-bd78-ed8dc33797b9';
body.autoAcceptQuote = false;
body.notBefore = '2022-04-26T15:16:18Z';
body.notAfter = '2022-04-26T15:19:20Z';

try {
  const { result, ...httpResponse } = await paymentsController.createPaymentQuote(body);
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
  "token": "pmnt-37be18b6-301a-4a37-8723-ddf645abcdb7",
  "amount": -1500,
  "autoAcceptQuote": false,
  "clientPaymentId": "de6269af-e3b0-4d4b-801d-367776b32f63",
  "created": "2022-04-26T15:16:18Z",
  "currency": "USD",
  "destinationToken": "dest-2bbfc967-d12e-4647-a887-d905172fb4bc",
  "memo": "Payment 1 Memo",
  "note": "Payment 1 Note",
  "purpose": "INCOME",
  "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
  "status": "ACCEPTED",
  "receiptToken": "rcpt-30bfaaf3-69bc-4ed5-ad6a-d38705cf0281",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/payments/pmnt-37be18b6-301a-4a37-8723-ddf645abcdb7",
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


# List Payments

Retrieve a list of [payments](page:working-with-resources/payments) that supports filtering, sorting, and pagination through existing mechanisms.

```ts
async listPayments(
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentListResult>>
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

[`PaymentListResult`](../../doc/models/payment-list-result.md)

## Example Usage

```ts
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await paymentsController.listPayments(page, pageSize, None, None, language);
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
      "token": "pmnt-9ed0cd25-aaf5-4683-9a29-b02a9dc40400",
      "amount": -1500,
      "autoAcceptQuote": false,
      "clientPaymentId": "3cdb0e3f-666a-4a32-86e3-676c8593262a",
      "created": "2021-06-08T19:25:13Z",
      "currency": "USD",
      "destinationToken": "user-b41dee0e-f1ca-4e1b-9e1e-e95d13ad8fa2",
      "memo": "Payment 1 Memo",
      "note": "Payment 1 Note",
      "purpose": "INCOME",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "status": "ACCEPTED",
      "receiptToken": "rcpt-c05ac500-c5b0-4870-8e66-1004eee26e4b",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/payments/pmnt-9ed0cd25-aaf5-4683-9a29-b02a9dc40400",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "pmnt-5cd70578-fabd-4bed-8e60-af69addb21a1",
      "amount": 120,
      "autoAcceptQuote": false,
      "clientPaymentId": "6739f368-fa91-46d3-a221-5cd0d75be85a",
      "created": "2021-06-08T19:26:04Z",
      "currency": "USD",
      "destinationToken": "user-b41dee0e-f1ca-4e1b-9e1e-e95d13ad8fa2",
      "memo": "Payment 1 Memo",
      "note": "Payment 1 Note",
      "purpose": "INCOME",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "status": "CANCELLED",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/payments/pmnt-5cd70578-fabd-4bed-8e60-af69addb21a1",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "pmnt-cb279676-6ecf-46e5-b5c8-96f0b6b9ae59",
      "amount": -50,
      "autoAcceptQuote": true,
      "clientPaymentId": "9422dab5-2ea8-47af-8d25-a10aef6efa50",
      "created": "2021-06-08T19:26:26Z",
      "currency": "USD",
      "destinationToken": "user-b41dee0e-f1ca-4e1b-9e1e-e95d13ad8fa2",
      "memo": "Payment 1 Memo",
      "note": "Payment 1 Note",
      "purpose": "INCOME",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "status": "ACCEPTED",
      "receiptToken": "rcpt-b1d53179-dd25-4f53-b9ae-d3f23832b7a8",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/payments/pmnt-cb279676-6ecf-46e5-b5c8-96f0b6b9ae59",
          "params": {
            "rel": "self"
          }
        }
      ]
    }
  ],
  "meta": {
    "pageNo": "1",
    "pageSize": "3",
    "pageCount": "99",
    "recordCount": "296",
    "timezone": "GMT"
  },
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/payments?page=1&pageSize=3&language=en-US",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# Retract Payment

Perform a [payment](page:working-with-resources/payments) retraction for the full payment amount.

```ts
async retractPayment(
  paymentToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OperationResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentToken` | `string` | Template, Required | Auto-generated unique identifier representing an individual payment transaction and quote, prefixed with `pmnt-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^pmnt-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OperationResult`](../../doc/models/operation-result.md)

## Example Usage

```ts
const paymentToken = 'pmnt-d3ff8a0d-aec9-49a6-a95b-6191aebeca20';
try {
  const { result, ...httpResponse } = await paymentsController.retractPayment(paymentToken);
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


# Retrieve Payment

Retrieve a single [payment](page:working-with-resources/payments).

```ts
async retrievePayment(
  paymentToken: string,
  filter?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentToken` | `string` | Template, Required | Auto-generated unique identifier representing an individual payment transaction and quote, prefixed with `pmnt-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^pmnt-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `filter` | `string \| undefined` | Query, Optional | Filter request results by specific criteria. |
| `language` | [`Languages \| undefined`](../../doc/models/languages.md) | Query, Optional | Filter results by language type. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentResult`](../../doc/models/payment-result.md)

## Example Usage

```ts
const paymentToken = 'pmnt-d3ff8a0d-aec9-49a6-a95b-6191aebeca20';
const language = 'en-US';
try {
  const { result, ...httpResponse } = await paymentsController.retrievePayment(paymentToken, None, language);
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
  "token": "pmnt-37be18b6-301a-4a37-8723-ddf645abcdb7",
  "amount": -1500,
  "autoAcceptQuote": false,
  "clientPaymentId": "de6269af-e3b0-4d4b-801d-367776b32f63",
  "created": "2022-04-26T15:16:18Z",
  "currency": "USD",
  "destinationToken": "dest-2bbfc967-d12e-4647-a887-d905172fb4bc",
  "memo": "Payment 1 Memo",
  "note": "Payment 1 Note",
  "purpose": "INCOME",
  "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
  "status": "ACCEPTED",
  "receiptToken": "rcpt-30bfaaf3-69bc-4ed5-ad6a-d38705cf0281",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/payments/pmnt-37be18b6-301a-4a37-8723-ddf645abcdb7",
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

