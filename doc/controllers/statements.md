# Statements

Statement-related operations

```ts
const statementsController = new StatementsController(client);
```

## Class Name

`StatementsController`

## Methods

* [List Prepaid Card Statements](../../doc/controllers/statements.md#list-prepaid-card-statements)
* [List Statements](../../doc/controllers/statements.md#list-statements)
* [Retrieve Prepaid Card Statement](../../doc/controllers/statements.md#retrieve-prepaid-card-statement)
* [Retrieve Statement](../../doc/controllers/statements.md#retrieve-statement)


# List Prepaid Card Statements

List Prepaid Card Statements for specific user

```ts
async listPrepaidCardStatements(
  userToken: string,
  destinationToken: string,
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StatementListResult>>
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

[`StatementListResult`](../../doc/models/statement-list-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const destinationToken = 'dest-4aed86e2-4929-45bf-814d-9030aef21e79';
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await statementsController.listPrepaidCardStatements(userToken, destinationToken, page, pageSize, None, None, language);
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
      "token": "docu-17a0da7e-dd4a-44ab-9bc5-73554d9c4b48",
      "userToken": "user-02e4d25a-af16-4e74-8b8d-6fa45b78af72",
      "prepaidCardToken": "dest-0aeed588-494c-444a-8c76-d5df54bdc435",
      "from": "2021-10-18T00:00:00Z",
      "to": "2021-11-17T00:00:00Z",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-631b200f-665d-4dbe-bd01-3063c9dec97d/prepaid-cards/dest-0aeed588-494c-444a-8c76-d5df54bdc435/statements/docu-17a0da7e-dd4a-44ab-9bc5-73554d9c4b48",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "docu-b4879d40-372f-4dc5-ac85-c83b662a240e",
      "userToken": "user-02e4d25a-af16-4e74-8b8d-6fa45b78af72",
      "prepaidCardToken": "dest-0aeed588-494c-444a-8c76-d5df54bdc435",
      "from": "2021-11-18T00:00:00Z",
      "to": "2021-12-17T00:00:00Z",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-631b200f-665d-4dbe-bd01-3063c9dec97d/prepaid-cards/dest-0aeed588-494c-444a-8c76-d5df54bdc435/statements/docu-b4879d40-372f-4dc5-ac85-c83b662a240e",
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
    "pageCount": "0",
    "recordCount": "0",
    "timezone": "GMT"
  },
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-631b200f-665d-4dbe-bd01-3063c9dec97d/prepaid-cards/dest-0aeed588-494c-444a-8c76-d5df54bdc435/statements",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# List Statements

Returns all statements for the specified user

```ts
async listStatements(
  userToken: string,
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StatementListResult>>
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

[`StatementListResult`](../../doc/models/statement-list-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await statementsController.listStatements(userToken, page, pageSize, None, None, language);
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
      "token": "docu-17a0da7e-dd4a-44ab-9bc5-73554d9c4b48",
      "userToken": "user-02e4d25a-af16-4e74-8b8d-6fa45b78af72",
      "prepaidCardToken": "dest-0aeed588-494c-444a-8c76-d5df54bdc435",
      "from": "2021-10-18T00:00:00Z",
      "to": "2021-11-17T00:00:00Z",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-631b200f-665d-4dbe-bd01-3063c9dec97d/prepaid-cards/dest-0aeed588-494c-444a-8c76-d5df54bdc435/statements/docu-17a0da7e-dd4a-44ab-9bc5-73554d9c4b48",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "docu-b4879d40-372f-4dc5-ac85-c83b662a240e",
      "userToken": "user-02e4d25a-af16-4e74-8b8d-6fa45b78af72",
      "prepaidCardToken": "dest-0aeed588-494c-444a-8c76-d5df54bdc435",
      "from": "2021-11-18T00:00:00Z",
      "to": "2021-12-17T00:00:00Z",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-631b200f-665d-4dbe-bd01-3063c9dec97d/prepaid-cards/dest-0aeed588-494c-444a-8c76-d5df54bdc435/statements/docu-b4879d40-372f-4dc5-ac85-c83b662a240e",
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
    "pageCount": "0",
    "recordCount": "0",
    "timezone": "GMT"
  },
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-631b200f-665d-4dbe-bd01-3063c9dec97d/prepaid-cards/dest-0aeed588-494c-444a-8c76-d5df54bdc435/statements",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# Retrieve Prepaid Card Statement

Retrieve a single prepaid card agreement.

```ts
async retrievePrepaidCardStatement(
  userToken: string,
  destinationToken: string,
  documentToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StatementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `destinationToken` | `string` | Template, Required | Auto-generated unique identifier representing a transfer destination, including prepaid cards, bank accounts, paper checks, and other users, prefixed with `dest-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^dest-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `documentToken` | `string` | Template, Required | Auto-generated unique identifier representing an uploaded document, prefixed with `docu-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^docu-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StatementResult`](../../doc/models/statement-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const destinationToken = 'dest-4aed86e2-4929-45bf-814d-9030aef21e79';
const documentToken = 'docu-6e582242-5dd4-4883-b0c2-488e09a26595';
try {
  const { result, ...httpResponse } = await statementsController.retrievePrepaidCardStatement(userToken, destinationToken, documentToken);
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
  "fileContents": "JVBERi0xLj........QKg2MjcKJSVFT0YK",
  "filename": "Statement-9506c668-11-17-2021.pdf",
  "mimeType": "application/pdf",
  "token": "docu-17a0da7e-dd4a-44ab-9bc5-73554d9c4b48",
  "userToken": "user-02e4d25a-af16-4e74-8b8d-6fa45b78af72",
  "prepaidCardToken": "dest-0aeed588-494c-444a-8c76-d5df54bdc435",
  "from": "2021-10-18T00:00:00Z",
  "to": "2021-11-17T00:00:00Z",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-ae92315b-6190-4e56-bdf5-c0189ac420a1/prepaid-cards/dest-0aeed588-494c-444a-8c76-d5df54bdc435/statements/docu-17a0da7e-dd4a-44ab-9bc5-73554d9c4b48",
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


# Retrieve Statement

Return a specific statement

```ts
async retrieveStatement(
  userToken: string,
  documentToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StatementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `documentToken` | `string` | Template, Required | Auto-generated unique identifier representing an uploaded document, prefixed with `docu-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^docu-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StatementResult`](../../doc/models/statement-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const documentToken = 'docu-6e582242-5dd4-4883-b0c2-488e09a26595';
try {
  const { result, ...httpResponse } = await statementsController.retrieveStatement(userToken, documentToken);
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
  "fileContents": "JVBERi0xLj........QKg2MjcKJSVFT0YK",
  "filename": "Statement-9506c668-11-17-2021.pdf",
  "mimeType": "application/pdf",
  "token": "docu-17a0da7e-dd4a-44ab-9bc5-73554d9c4b48",
  "userToken": "user-02e4d25a-af16-4e74-8b8d-6fa45b78af72",
  "prepaidCardToken": "dest-0aeed588-494c-444a-8c76-d5df54bdc435",
  "from": "2021-10-18T00:00:00Z",
  "to": "2021-11-17T00:00:00Z",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-ae92315b-6190-4e56-bdf5-c0189ac420a1/prepaid-cards/dest-0aeed588-494c-444a-8c76-d5df54bdc435/statements/docu-17a0da7e-dd4a-44ab-9bc5-73554d9c4b48",
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

