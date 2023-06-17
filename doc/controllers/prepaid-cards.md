# Prepaid Cards

```ts
const prepaidCardsController = new PrepaidCardsController(client);
```

## Class Name

`PrepaidCardsController`

## Methods

* [List Card Authorizations](../../doc/controllers/prepaid-cards.md#list-card-authorizations)
* [List Prepaid Cards](../../doc/controllers/prepaid-cards.md#list-prepaid-cards)
* [Order Prepaid Card](../../doc/controllers/prepaid-cards.md#order-prepaid-card)
* [Replace Prepaid Card](../../doc/controllers/prepaid-cards.md#replace-prepaid-card)
* [Retrieve Prepaid Card](../../doc/controllers/prepaid-cards.md#retrieve-prepaid-card)
* [Update Prepaid Card](../../doc/controllers/prepaid-cards.md#update-prepaid-card)


# List Card Authorizations

TODO

```ts
async listCardAuthorizations(
  userToken: string,
  destinationToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AuthorizationListResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `destinationToken` | `string` | Template, Required | Auto-generated unique identifier representing a transfer destination, including prepaid cards, bank accounts, paper checks, and other users, prefixed with `dest-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^dest-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthorizationListResult`](../../doc/models/authorization-list-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const destinationToken = 'dest-4aed86e2-4929-45bf-814d-9030aef21e79';
try {
  const { result, ...httpResponse } = await prepaidCardsController.listCardAuthorizations(userToken, destinationToken);
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
      "type": "UNSETTLED_AUTHORIZATION",
      "createdOn": "2022-05-04T13:22:53Z",
      "sign": "DEBIT",
      "sourceToken": "dest-8e35fc1b-82f4-4bf5-93d1-27f71a192bc2",
      "amount": -35,
      "currency": "USD",
      "status": "UNSETTLED",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Completed Bank Transfer Request"
        }
      ],
      "authDate": "2022-05-04T13:22:53Z",
      "reference": "CC008AB44895"
    }
  ],
  "meta": {
    "pageNo": "1",
    "pageSize": "100",
    "pageCount": "0",
    "recordCount": "0",
    "timezone": "GMT"
  },
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-cf6244d7-f6b8-4625-906a-9f21fc8c774b/prepaid-cards/dest-8e35fc1b-82f4-4bf5-93d1-27f71a192bc2/authorizations",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# List Prepaid Cards

Retrieve a list of [prepaid cards](page:working-with-resources/prepaid-cards) by user token that supports filtering, sorting, and pagination through existing mechanisms.

```ts
async listPrepaidCards(
  userToken: string,
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PrepaidCardListResult>>
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

[`PrepaidCardListResult`](../../doc/models/prepaid-card-list-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await prepaidCardsController.listPrepaidCards(userToken, page, pageSize, None, None, language);
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
      "token": "dest-b61bc870-8ab8-4870-a209-6398b60269d5",
      "cardNetwork": "VISA",
      "cardNumber": "483318******3940",
      "cardPackage": "712940",
      "country": "US",
      "createdOn": "2022-04-20T18:43:15Z",
      "currency": "USD",
      "cvv": "***",
      "expires": "04/2025",
      "status": "PENDING_ACTIVATION",
      "bankInDetails": [
        {
          "key": "BANK_ACH_ABA",
          "value": "026014892"
        },
        {
          "key": "BANK_BBAN",
          "value": "8037390305203"
        }
      ],
      "capabilities": [
        "BANK_IN",
        "SET_PIN",
        "APPLEPAY",
        "GOOGLEPAY",
        "SAMSUNGPAY"
      ],
      "userToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/prepaid-cards/dest-b61bc870-8ab8-4870-a209-6398b60269d5",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "dest-9a8f1dc9-5e59-4ce5-a919-fc586d85d6e5",
      "cardNetwork": "VISA",
      "cardNumber": "483318******4628",
      "cardPackage": "712940",
      "country": "US",
      "createdOn": "2022-04-20T18:42:47Z",
      "currency": "USD",
      "cvv": "***",
      "expires": "06/2025",
      "status": "CLOSED_LOST_STOLEN_DAMAGED",
      "capabilities": [
        "BANK_IN",
        "SET_PIN",
        "APPLEPAY",
        "GOOGLEPAY",
        "SAMSUNGPAY"
      ],
      "userToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/prepaid-cards/dest-9a8f1dc9-5e59-4ce5-a919-fc586d85d6e5",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "dest-d9c6edab-ddec-4941-b980-f33cfe2f9f6b",
      "cardNetwork": "VISA",
      "cardNumber": "483318******1805",
      "cardPackage": "712940",
      "country": "US",
      "createdOn": "2022-04-20T18:36:16Z",
      "currency": "USD",
      "cvv": "***",
      "expires": "10/2025",
      "status": "CLOSED_LOST_STOLEN_DAMAGED",
      "capabilities": [
        "BANK_IN",
        "SET_PIN",
        "APPLEPAY",
        "GOOGLEPAY",
        "SAMSUNGPAY"
      ],
      "userToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/prepaid-cards/dest-d9c6edab-ddec-4941-b980-f33cfe2f9f6b",
          "params": {
            "rel": "self"
          }
        }
      ]
    }
  ],
  "meta": {
    "pageNo": "1",
    "pageSize": "100",
    "pageCount": "1",
    "recordCount": "3",
    "timezone": "GMT"
  },
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/prepaid-cards",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# Order Prepaid Card

Order a [prepaid card](page:working-with-resources/prepaid-cards) for the user by specifying a cardPackage.

Assign a prepaid card to a user when a program token and card reference number are supplied.

```ts
async orderPrepaidCard(
  userToken: string,
  payload?: Payload,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PrepaidCardResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `payload` | [`Payload \| undefined`](../../doc/models/payload.md) | Form, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PrepaidCardResult`](../../doc/models/prepaid-card-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const payload: Payload = {};
payload.cardPackage = '71290';
payload.programToken = 'prog-6a272eca-9487-d83a-c9e4-8df8c9a7f6eb';

try {
  const { result, ...httpResponse } = await prepaidCardsController.orderPrepaidCard(userToken, payload);
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
  "token": "dest-fcd31b51-0968-4537-8722-f486bdd5cd74",
  "cardNetwork": "VISA",
  "cardNumber": "483318******2127",
  "cardPackage": "712940",
  "country": "US",
  "createdOn": "2022-05-06T18:14:52Z",
  "currency": "USD",
  "cvv": "***",
  "expires": "06/2025",
  "status": "PENDING_ACTIVATION",
  "bankInDetails": [
    {
      "key": "BANK_ACH_ABA",
      "value": "026014892"
    },
    {
      "key": "BANK_BBAN",
      "value": "8037390853101"
    }
  ],
  "capabilities": [
    "BANK_IN",
    "SET_PIN",
    "APPLEPAY",
    "GOOGLEPAY",
    "SAMSUNGPAY"
  ],
  "userToken": "user-ae92315b-6190-4e56-bdf5-c0189ac420a1",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-ae92315b-6190-4e56-bdf5-c0189ac420a1/prepaid-cards/dest-fcd31b51-0968-4537-8722-f486bdd5cd74",
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


# Replace Prepaid Card

Replace a [prepaid card](page:working-with-resources/prepaid-cards) by destination token.

```ts
async replacePrepaidCard(
  userToken: string,
  destinationToken: string,
  payload?: Payload1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PrepaidCardResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `destinationToken` | `string` | Template, Required | Auto-generated unique identifier representing a transfer destination, including prepaid cards, bank accounts, paper checks, and other users, prefixed with `dest-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^dest-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `payload` | [`Payload1 \| undefined`](../../doc/models/payload-1.md) | Form, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PrepaidCardResult`](../../doc/models/prepaid-card-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const destinationToken = 'dest-4aed86e2-4929-45bf-814d-9030aef21e79';
const payload: Payload1 = {};
payload.cardPackage = '71290';

try {
  const { result, ...httpResponse } = await prepaidCardsController.replacePrepaidCard(userToken, destinationToken, payload);
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
  "token": "dest-fcd31b51-0968-4537-8722-f486bdd5cd74",
  "cardNetwork": "VISA",
  "cardNumber": "483318******2127",
  "cardPackage": "712940",
  "country": "US",
  "createdOn": "2022-05-06T18:14:52Z",
  "currency": "USD",
  "cvv": "***",
  "expires": "06/2025",
  "status": "PENDING_ACTIVATION",
  "bankInDetails": [
    {
      "key": "BANK_ACH_ABA",
      "value": "026014892"
    },
    {
      "key": "BANK_BBAN",
      "value": "8037390853101"
    }
  ],
  "capabilities": [
    "BANK_IN",
    "SET_PIN",
    "APPLEPAY",
    "GOOGLEPAY",
    "SAMSUNGPAY"
  ],
  "userToken": "user-ae92315b-6190-4e56-bdf5-c0189ac420a1",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-ae92315b-6190-4e56-bdf5-c0189ac420a1/prepaid-cards/dest-fcd31b51-0968-4537-8722-f486bdd5cd74",
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


# Retrieve Prepaid Card

Retrieve [prepaid card](page:working-with-resources/prepaid-cards) details by destination token.

```ts
async retrievePrepaidCard(
  userToken: string,
  destinationToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PrepaidCardResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `destinationToken` | `string` | Template, Required | Auto-generated unique identifier representing a transfer destination, including prepaid cards, bank accounts, paper checks, and other users, prefixed with `dest-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^dest-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PrepaidCardResult`](../../doc/models/prepaid-card-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const destinationToken = 'dest-4aed86e2-4929-45bf-814d-9030aef21e79';
try {
  const { result, ...httpResponse } = await prepaidCardsController.retrievePrepaidCard(userToken, destinationToken);
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
  "token": "dest-fcd31b51-0968-4537-8722-f486bdd5cd74",
  "cardNetwork": "VISA",
  "cardNumber": "483318******2127",
  "cardPackage": "712940",
  "country": "US",
  "createdOn": "2022-05-06T18:14:52Z",
  "currency": "USD",
  "cvv": "***",
  "expires": "06/2025",
  "status": "PENDING_ACTIVATION",
  "bankInDetails": [
    {
      "key": "BANK_ACH_ABA",
      "value": "026014892"
    },
    {
      "key": "BANK_BBAN",
      "value": "8037390853101"
    }
  ],
  "capabilities": [
    "BANK_IN",
    "SET_PIN",
    "APPLEPAY",
    "GOOGLEPAY",
    "SAMSUNGPAY"
  ],
  "userToken": "user-ae92315b-6190-4e56-bdf5-c0189ac420a1",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-ae92315b-6190-4e56-bdf5-c0189ac420a1/prepaid-cards/dest-fcd31b51-0968-4537-8722-f486bdd5cd74",
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


# Update Prepaid Card

Partial [prepaid card](page:working-with-resources/prepaid-cards) update.

```ts
async updatePrepaidCard(
  userToken: string,
  destinationToken: string,
  payload?: Payload2,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PrepaidCardResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `destinationToken` | `string` | Template, Required | Auto-generated unique identifier representing a transfer destination, including prepaid cards, bank accounts, paper checks, and other users, prefixed with `dest-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^dest-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `payload` | [`Payload2 \| undefined`](../../doc/models/payload-2.md) | Form, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PrepaidCardResult`](../../doc/models/prepaid-card-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const destinationToken = 'dest-4aed86e2-4929-45bf-814d-9030aef21e79';
const payload: Payload2 = {};
payload.cardPackage = '71290';

try {
  const { result, ...httpResponse } = await prepaidCardsController.updatePrepaidCard(userToken, destinationToken, payload);
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
  "token": "dest-fcd31b51-0968-4537-8722-f486bdd5cd74",
  "cardNetwork": "VISA",
  "cardNumber": "483318******2127",
  "cardPackage": "712940",
  "country": "US",
  "createdOn": "2022-05-06T18:14:52Z",
  "currency": "USD",
  "cvv": "***",
  "expires": "06/2025",
  "status": "PENDING_ACTIVATION",
  "bankInDetails": [
    {
      "key": "BANK_ACH_ABA",
      "value": "026014892"
    },
    {
      "key": "BANK_BBAN",
      "value": "8037390853101"
    }
  ],
  "capabilities": [
    "BANK_IN",
    "SET_PIN",
    "APPLEPAY",
    "GOOGLEPAY",
    "SAMSUNGPAY"
  ],
  "userToken": "user-ae92315b-6190-4e56-bdf5-c0189ac420a1",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-ae92315b-6190-4e56-bdf5-c0189ac420a1/prepaid-cards/dest-fcd31b51-0968-4537-8722-f486bdd5cd74",
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

