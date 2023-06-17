# Program

# Program

---


The *Program* resource allows you to list and retrieve program configurations and program agreements.

With this resource, you can perform the following request:

* `GET`: Retrieve a single program or list of programs.
* `POST`: Accept program agreements

For more information, see [Programs](page:working-with-resources/programs).

```ts
const programController = new ProgramController(client);
```

## Class Name

`ProgramController`

## Methods

* [List Programs](../../doc/controllers/program.md#list-programs)
* [Retrieve Program](../../doc/controllers/program.md#retrieve-program)


# List Programs

Retrieve a list of [programs](page:working-with-resources/programs) that supports filtering, sorting, and pagination through existing mechanisms.

```ts
async listPrograms(
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProgramListResult>>
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

[`ProgramListResult`](../../doc/models/program-list-result.md)

## Example Usage

```ts
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await programController.listPrograms(page, pageSize, None, None, language);
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
      "token": "prog-0146a716-4055-2598-ce14-df5ece519a98",
      "currency": "USD",
      "bank": "PATHWARD",
      "type": "COMMERCIAL",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/programs/prog-0146a716-4055-2598-ce14-df5ece519a98",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "prog-dbfe1489-f3ba-3f5a-6904-9b9ad91ceaf6",
      "currency": "MXN",
      "bank": "PATHWARD",
      "type": "COMMERCIAL",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/programs/prog-dbfe1489-f3ba-3f5a-6904-9b9ad91ceaf6",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "prog-8a9e37bf-d9a9-a40a-96c4-e286d1fa8fc5",
      "currency": "USD",
      "bank": "PATHWARD",
      "type": "COMMERCIAL",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/programs/prog-8a9e37bf-d9a9-a40a-96c4-e286d1fa8fc5",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "prog-76f58bb0-c8ae-d0fa-d1e4-15143ffb53fa",
      "currency": "EUR",
      "bank": "PPS",
      "type": "COMMERCIAL",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/programs/prog-76f58bb0-c8ae-d0fa-d1e4-15143ffb53fa",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "prog-bbde39a9-04ca-1c0a-5d74-758a4ad47b84",
      "currency": "GBP",
      "bank": "PPS",
      "type": "COMMERCIAL",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/programs/prog-bbde39a9-04ca-1c0a-5d74-758a4ad47b84",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "prog-8136128b-3f5b-2f69-15a4-f25592ebce51",
      "currency": "MXN",
      "bank": "PATHWARD",
      "type": "COMMERCIAL",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/programs/prog-8136128b-3f5b-2f69-15a4-f25592ebce51",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "prog-42469a3e-15c8-11f8-02a4-1053f176700e",
      "currency": "EUR",
      "bank": "PATHWARD",
      "type": "COMMERCIAL",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/programs/prog-42469a3e-15c8-11f8-02a4-1053f176700e",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "prog-f8725c56-b289-8f4b-1f94-cd27f2963cbf",
      "currency": "HKD",
      "bank": "PATHWARD",
      "type": "COMMERCIAL",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/programs/prog-f8725c56-b289-8f4b-1f94-cd27f2963cbf",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "prog-95753dc7-0b4a-65a9-7bd4-6504b6774cb9",
      "currency": "USD",
      "bank": "MCB",
      "type": "CONSUMER_GPR",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/programs/prog-95753dc7-0b4a-65a9-7bd4-6504b6774cb9",
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
      "href": "https://platform.mypayquicker.build/api/v2/programs",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# Retrieve Program

Retrieve a single [program](page:working-with-resources/programs) by its program token.

```ts
async retrieveProgram(
  programToken: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProgramResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `programToken` | `string` | Template, Required | Auto-generated unique identifier representing a program, prefixed with `prog-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^prog-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `language` | [`Languages \| undefined`](../../doc/models/languages.md) | Query, Optional | Filter results by language type. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProgramResult`](../../doc/models/program-result.md)

## Example Usage

```ts
const programToken = 'prog-4525ab9c-5b22-4e30-028a-45901a10aa0c';
const language = 'en-US';
try {
  const { result, ...httpResponse } = await programController.retrieveProgram(programToken, language);
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
  "token": "prog-6a272eca-9487-d83a-c9e4-8df8c9a7f6eb",
  "currency": "USD",
  "bank": "MCB",
  "type": "CONSUMER_GPR",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/programs/prog-6a272eca-9487-d83a-c9e4-8df8c9a7f6eb",
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

