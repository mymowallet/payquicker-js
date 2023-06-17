# Bank Accounts

```ts
const bankAccountsController = new BankAccountsController(client);
```

## Class Name

`BankAccountsController`

## Methods

* [Create Bank Account](../../doc/controllers/bank-accounts.md#create-bank-account)
* [Delete Bank Account](../../doc/controllers/bank-accounts.md#delete-bank-account)
* [List Bank Accounts](../../doc/controllers/bank-accounts.md#list-bank-accounts)
* [Retrieve Bank Account](../../doc/controllers/bank-accounts.md#retrieve-bank-account)
* [Retrieve Creation Requirements](../../doc/controllers/bank-accounts.md#retrieve-creation-requirements)
* [Update Bank Account](../../doc/controllers/bank-accounts.md#update-bank-account)


# Create Bank Account

Create a quote for a [bank account](page:working-with-resources/bank-accounts) using a user token.

```ts
async createBankAccount(
  userToken: string,
  body?: CreateOrUpdateBankAccount,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BankAccountResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `body` | [`CreateOrUpdateBankAccount \| undefined`](../../doc/models/create-or-update-bank-account.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BankAccountResult`](../../doc/models/bank-account-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const contentType = null;
const body: CreateOrUpdateBankAccount = {};
body.bankAccountOwnershipType = 'BUSINESS';
body.bankCountry = 'US';
body.bankCurrency = 'USD';
body.description = 'Official USD Testing Bank Account 1';
body.type = 'SAVINGS';

try {
  const { result, ...httpResponse } = await bankAccountsController.createBankAccount(userToken, body);
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
  "token": "dest-41579f58-35dd-4f7b-9252-aa3e337a2eb4",
  "bankAccountOwnershipType": "BUSINESS",
  "bankCountry": "US",
  "bankCurrency": "USD",
  "createdOn": "2022-05-20T15:48:54Z",
  "description": "Official USD Testing Bank Account 1",
  "fields": [
    {
      "key": "BANK_BBAN",
      "value": "****7890"
    },
    {
      "key": "BANK_ACH_ABA",
      "value": "****5678"
    },
    {
      "key": "BENEFICIARY_NAME",
      "value": "Dennis Bruen"
    },
    {
      "key": "BANK_NAME",
      "value": "API V2 USD BANK 1"
    }
  ],
  "status": "VERIFIED",
  "type": "SAVINGS",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-ae92315b-6190-4e56-bdf5-c0189ac420a1/bank-accounts/dest-41579f58-35dd-4f7b-9252-aa3e337a2eb4",
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


# Delete Bank Account

Delete (cloak) a user [bank account](page:working-with-resources/bank-accounts).

```ts
async deleteBankAccount(
  userToken: string,
  destinationToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OperationResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `destinationToken` | `string` | Template, Required | Auto-generated unique identifier representing a transfer destination, including prepaid cards, bank accounts, paper checks, and other users, prefixed with `dest-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^dest-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OperationResult`](../../doc/models/operation-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const destinationToken = 'dest-4aed86e2-4929-45bf-814d-9030aef21e79';
try {
  const { result, ...httpResponse } = await bankAccountsController.deleteBankAccount(userToken, destinationToken);
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


# List Bank Accounts

Retrieve a list of [bank accounts](page:working-with-resources/bank-accounts) that supports filtering, sorting, and pagination through existing mechanisms.

```ts
async listBankAccounts(
  userToken: string,
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BankAccountListResult>>
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

[`BankAccountListResult`](../../doc/models/bank-account-list-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await bankAccountsController.listBankAccounts(userToken, page, pageSize, None, None, language);
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
      "token": "dest-969daa60-c743-4e4f-8609-559874f26d6c",
      "bankAccountOwnershipType": "BUSINESS",
      "bankCountry": "US",
      "bankCurrency": "USD",
      "createdOn": "2022-05-20T16:26:25Z",
      "description": "Official USD Testing Bank Account 2",
      "fields": [
        {
          "key": "BANK_BBAN",
          "value": "****7899"
        },
        {
          "key": "BANK_ACH_ABA",
          "value": "****5688"
        },
        {
          "key": "BENEFICIARY_NAME",
          "value": "Harry Grady"
        },
        {
          "key": "BANK_NAME",
          "value": "API V2 USD BANK 2"
        }
      ],
      "status": "VERIFIED",
      "type": "SAVINGS",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-ae92315b-6190-4e56-bdf5-c0189ac420a1/bank-accounts/dest-969daa60-c743-4e4f-8609-559874f26d6c",
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
      "href": "https://platform.mypayquicker.build/api/v2/users/user-ae92315b-6190-4e56-bdf5-c0189ac420a1/bank-accounts?page=1&pageSize=5&language=en-US",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# Retrieve Bank Account

Retrieve a single [bank account](page:working-with-resources/bank-accounts) using a destination token.

```ts
async retrieveBankAccount(
  userToken: string,
  destinationToken: string,
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BankAccountResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `destinationToken` | `string` | Template, Required | Auto-generated unique identifier representing a transfer destination, including prepaid cards, bank accounts, paper checks, and other users, prefixed with `dest-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^dest-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `page` | `number` | Query, Required | Page number of specific page to return<br>**Constraints**: `>= 1` |
| `pageSize` | `number` | Query, Required | Number of items to be displayed per page<br>**Constraints**: `>= 1`, `<= 50` |
| `filter` | `string \| undefined` | Query, Optional | Filter request results by specific criteria. |
| `sort` | `string \| undefined` | Query, Optional | Sort request results by specific attribute. |
| `language` | [`Languages \| undefined`](../../doc/models/languages.md) | Query, Optional | Filter results by language type. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BankAccountResult`](../../doc/models/bank-account-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const destinationToken = 'dest-4aed86e2-4929-45bf-814d-9030aef21e79';
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await bankAccountsController.retrieveBankAccount(userToken, destinationToken, page, pageSize, None, None, language);
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
  "token": "dest-41579f58-35dd-4f7b-9252-aa3e337a2eb4",
  "bankAccountOwnershipType": "BUSINESS",
  "bankCountry": "US",
  "bankCurrency": "USD",
  "createdOn": "2022-05-20T15:48:54Z",
  "description": "Official USD Testing Bank Account 1",
  "fields": [
    {
      "key": "BANK_BBAN",
      "value": "****7890"
    },
    {
      "key": "BANK_ACH_ABA",
      "value": "****5678"
    },
    {
      "key": "BENEFICIARY_NAME",
      "value": "Dennis Bruen"
    },
    {
      "key": "BANK_NAME",
      "value": "API V2 USD BANK 1"
    }
  ],
  "status": "VERIFIED",
  "type": "SAVINGS",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-ae92315b-6190-4e56-bdf5-c0189ac420a1/bank-accounts/dest-41579f58-35dd-4f7b-9252-aa3e337a2eb4",
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


# Retrieve Creation Requirements

Retrieve requirements for adding a [bank account](page:working-with-resources/bank-accounts) using the parameters provided.

```ts
async retrieveCreationRequirements(
  userToken: string,
  country?: Countries,
  currency?: Currencies,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BankAccountRequirementListResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `country` | [`Countries \| undefined`](../../doc/models/countries.md) | Query, Optional | Filter results by country. |
| `currency` | [`Currencies \| undefined`](../../doc/models/currencies.md) | Query, Optional | Filter results by currency. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BankAccountRequirementListResult`](../../doc/models/bank-account-requirement-list-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const country = 'US';
const currency = 'USD';
try {
  const { result, ...httpResponse } = await bankAccountsController.retrieveCreationRequirements(userToken, country, currency);
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
      "bankCountry": "IT",
      "bankCurrency": "EUR",
      "requirements": [
        {
          "requirement": "BANK_IBAN",
          "format": {
            "example": "IT43K0310412701000000820420",
            "legend": [
              {
                "key": "IT43K0310412701000000820420",
                "descriptions": [
                  {
                    "language": "en-US",
                    "translation": "Example IBAN"
                  },
                  {
                    "language": "it-IT",
                    "translation": "Esempio IBAN"
                  }
                ]
              }
            ]
          },
          "description": [
            {
              "language": "en-US",
              "translation": "IBAN"
            },
            {
              "language": "it-IT",
              "translation": "IBAN"
            }
          ],
          "validators": [
            {
              "validatorType": "REGEX",
              "expression": "^IT\\\\d{2}[A-Z]\\\\d{10}[0-9A-Z]{12}$"
            }
          ]
        },
        {
          "requirement": "BANK_SWIFT_BIC",
          "format": {
            "example": "01234567890",
            "legend": [
              {
                "key": "01234567890",
                "descriptions": [
                  {
                    "language": "en-US",
                    "translation": "Example Swift/BIC"
                  },
                  {
                    "language": "it-IT",
                    "translation": "Esempio Swift/BIC"
                  }
                ]
              }
            ]
          },
          "description": [
            {
              "language": "en-US",
              "translation": "Swift/BIC"
            },
            {
              "language": "it-IT",
              "translation": "Swift/BIC"
            }
          ],
          "validators": [
            {
              "validatorType": "REGEX",
              "expression": "^[a-z0-9A-Z]{8,11}$"
            }
          ]
        }
      ],
      "quote": {
        "formattedAmount": "$4.32 USD (USD, en-US), 0,00 â‚¬ EUR (EUR, fr-FR)",
        "amount": 4.32,
        "currency": "USD"
      },
      "links": [
        {
          "params": {
            "rel": "self"
          },
          "href": "string"
        }
      ]
    }
  ],
  "links": [
    {
      "params": {
        "rel": "self"
      },
      "href": "string"
    }
  ]
}
```


# Update Bank Account

Update a [bank account](page:working-with-resources/bank-accounts).

```ts
async updateBankAccount(
  userToken: string,
  destinationToken: string,
  body?: CreateOrUpdateBankAccount,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BankAccountResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `destinationToken` | `string` | Template, Required | Auto-generated unique identifier representing a transfer destination, including prepaid cards, bank accounts, paper checks, and other users, prefixed with `dest-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^dest-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `body` | [`CreateOrUpdateBankAccount \| undefined`](../../doc/models/create-or-update-bank-account.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BankAccountResult`](../../doc/models/bank-account-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const destinationToken = 'dest-4aed86e2-4929-45bf-814d-9030aef21e79';
const contentType = null;
const body: CreateOrUpdateBankAccount = {};
body.bankAccountOwnershipType = 'BUSINESS';
body.bankCountry = 'US';
body.bankCurrency = 'USD';
body.description = 'Official USD Testing Bank Account 1';
body.type = 'SAVINGS';

try {
  const { result, ...httpResponse } = await bankAccountsController.updateBankAccount(userToken, destinationToken, body);
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
  "token": "dest-41579f58-35dd-4f7b-9252-aa3e337a2eb4",
  "bankAccountOwnershipType": "BUSINESS",
  "bankCountry": "US",
  "bankCurrency": "USD",
  "createdOn": "2022-05-20T15:48:54Z",
  "description": "Official USD Testing Bank Account 1",
  "fields": [
    {
      "key": "BANK_BBAN",
      "value": "****7890"
    },
    {
      "key": "BANK_ACH_ABA",
      "value": "****5678"
    },
    {
      "key": "BENEFICIARY_NAME",
      "value": "Dennis Bruen"
    },
    {
      "key": "BANK_NAME",
      "value": "API V2 USD BANK 1"
    }
  ],
  "status": "VERIFIED",
  "type": "SAVINGS",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-ae92315b-6190-4e56-bdf5-c0189ac420a1/bank-accounts/dest-41579f58-35dd-4f7b-9252-aa3e337a2eb4",
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

