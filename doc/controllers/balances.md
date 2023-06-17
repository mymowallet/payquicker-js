# Balances

# Balances

---


The *Balances* resource represents your user, prepaid card, and account balances.

With this resource, you can perform the following request:

* `GET`: Retrieve a list of User, Prepaid Card, and Account balances.

For more information, see [Balances](page:working-with-resources/balances).

```ts
const balancesController = new BalancesController(client);
```

## Class Name

`BalancesController`

## Methods

* [List Account Balances](../../doc/controllers/balances.md#list-account-balances)
* [List User Balances](../../doc/controllers/balances.md#list-user-balances)
* [Retrieve Card Balance](../../doc/controllers/balances.md#retrieve-card-balance)


# List Account Balances

Retrieve a list of bank account [balances](page:working-with-resources/balances) that supports filtering, sorting, and pagination through existing mechanisms.

```ts
async listAccountBalances(
  accountToken: string,
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalanceListResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountToken` | `string` | Template, Required | Auto-generated unique identifier representing a company account, prefixed with `acct-`.<br>**Constraints**: *Pattern*: `^acct-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `page` | `number` | Query, Required | Page number of specific page to return<br>**Constraints**: `>= 1` |
| `pageSize` | `number` | Query, Required | Number of items to be displayed per page<br>**Constraints**: `>= 1`, `<= 50` |
| `filter` | `string \| undefined` | Query, Optional | Filter request results by specific criteria. |
| `sort` | `string \| undefined` | Query, Optional | Sort request results by specific attribute. |
| `language` | [`Languages \| undefined`](../../doc/models/languages.md) | Query, Optional | Filter results by language type. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BalanceListResult`](../../doc/models/balance-list-result.md)

## Example Usage

```ts
const accountToken = 'acct-b3f0570a-6586-4e00-8d6e-8a2bf93cfae4';
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await balancesController.listAccountBalances(accountToken, page, pageSize, None, None, language);
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
      "amount": 0,
      "currency": "USD",
      "formattedAmount": "$0.00 USD",
      "token": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/accounts/acct-3908ab5a-6ce1-474d-8b80-a63a7b147860/balances",
          "params": {
            "rel": "self"
          }
        }
      ]
    }
  ],
  "meta": {
    "pageNo": "1",
    "pageSize": "20",
    "pageCount": "0",
    "recordCount": "0",
    "timezone": "GMT"
  },
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/accounts/acct-3908ab5a-6ce1-474d-8b80-a63a7b147860/balances?page=1&pageSize=20&language=en-US",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# List User Balances

Retrieve a list of user [balances](page:working-with-resources/balances) that supports filtering, sorting, and pagination through existing mechanisms.

```ts
async listUserBalances(
  userToken: string,
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalanceListResult>>
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

[`BalanceListResult`](../../doc/models/balance-list-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await balancesController.listUserBalances(userToken, page, pageSize, None, None, language);
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
      "amount": 0,
      "currency": "USD",
      "formattedAmount": "$0.00 USD",
      "token": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/accounts/acct-3908ab5a-6ce1-474d-8b80-a63a7b147860/balances",
          "params": {
            "rel": "self"
          }
        }
      ]
    }
  ],
  "meta": {
    "pageNo": "1",
    "pageSize": "20",
    "pageCount": "0",
    "recordCount": "0",
    "timezone": "GMT"
  },
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/accounts/acct-3908ab5a-6ce1-474d-8b80-a63a7b147860/balances?page=1&pageSize=20&language=en-US",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# Retrieve Card Balance

Retrieve a [prepaid card](page:working-with-resources/prepaid-cards) [balances](page:working-with-resources/balances) by destination token that supports filtering, sorting, and pagination through existing mechanisms.

```ts
async retrieveCardBalance(
  userToken: string,
  destinationToken: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalanceResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `destinationToken` | `string` | Template, Required | Auto-generated unique identifier representing a transfer destination, including prepaid cards, bank accounts, paper checks, and other users, prefixed with `dest-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^dest-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `language` | [`Languages \| undefined`](../../doc/models/languages.md) | Query, Optional | Filter results by language type. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BalanceResult`](../../doc/models/balance-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const destinationToken = 'dest-4aed86e2-4929-45bf-814d-9030aef21e79';
const language = 'en-US';
try {
  const { result, ...httpResponse } = await balancesController.retrieveCardBalance(userToken, destinationToken, language);
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
  "amount": 0,
  "currency": "USD",
  "formattedAmount": "$0.00 USD",
  "token": "dest-2de9ddbf-2631-4c94-a699-90917f113b24",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-ae92315b-6190-4e56-bdf5-c0189ac420a1/prepaid-cards/dest-2de9ddbf-2631-4c94-a699-90917f113b24/balances",
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

