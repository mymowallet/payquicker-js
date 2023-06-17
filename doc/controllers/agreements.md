# Agreements

# Agreements

---


The *Agreements* resource is a document that the user agrees to as part of opening an account with PayQuicker.

Users need to agree to the terms of the account, which includes fees, privacy policy, esign, and consent.

If the user does not agree to these terms, an account will not be opened.

With this resource, you can perform the following requests:

* `POST`: Accept a single agreement
* `GET`: Retrieve an agreement or list of agreements

For more information, see [Agreements](page:working-with-resources/agreements).

```ts
const agreementsController = new AgreementsController(client);
```

## Class Name

`AgreementsController`

## Methods

* [Accept Agreement](../../doc/controllers/agreements.md#accept-agreement)
* [List Agreements](../../doc/controllers/agreements.md#list-agreements)
* [Retrieve Program Agreement](../../doc/controllers/agreements.md#retrieve-program-agreement)


# Accept Agreement

Accept a single program [agreement](page:working-with-resources/agreements).

```ts
async acceptAgreement(
  userToken: string,
  agreementToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `agreementToken` | `string` | Template, Required | Auto-generated unique identifier representing a program agreement, prefixed with `agmt-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^agmt-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const agreementToken = 'agmt-45901a10-5b22-4e30-028a-45901a10baa9';
try {
  const { result, ...httpResponse } = await agreementsController.acceptAgreement(userToken, agreementToken);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Agreements

Retrieve a list of program [agreements](page:working-with-resources/agreements) that supports filtering, sorting, and pagination through existing mechanisms.

```ts
async listAgreements(
  programToken: string,
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AgreementListResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `programToken` | `string` | Template, Required | Auto-generated unique identifier representing a program, prefixed with `prog-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^prog-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `page` | `number` | Query, Required | Page number of specific page to return<br>**Constraints**: `>= 1` |
| `pageSize` | `number` | Query, Required | Number of items to be displayed per page<br>**Constraints**: `>= 1`, `<= 50` |
| `filter` | `string \| undefined` | Query, Optional | Filter request results by specific criteria. |
| `sort` | `string \| undefined` | Query, Optional | Sort request results by specific attribute. |
| `language` | [`Languages \| undefined`](../../doc/models/languages.md) | Query, Optional | Filter results by language type. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AgreementListResult`](../../doc/models/agreement-list-result.md)

## Example Usage

```ts
const programToken = 'prog-4525ab9c-5b22-4e30-028a-45901a10aa0c';
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await agreementsController.listAgreements(programToken, page, pageSize, None, None, language);
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
      "token": "agmt-b33d420f-6c1b-4a93-9455-d6585552b97d",
      "content": "<html><head>Agreement HTML content...</head></html>",
      "url": "https://cdn.mypayquicker.build/content/Agreements/Cardholder/v1/Languages_EN_US/CardholderAgreement-Consumer-ACH-20k-MCB-USD.pdf",
      "type": "CARD_HOLDER_AGREEMENT",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/programs/prog-6a272eca-9487-d83a-c9e4-8df8c9a7f6eb/agreements/agmt-b33d420f-6c1b-4a93-9455-d6585552b97d",
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
      "href": "https://platform.mypayquicker.build/api/v2/programs/prog-6a272eca-9487-d83a-c9e4-8df8c9a7f6eb/agreements",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# Retrieve Program Agreement

Retrieve a single program [agreement](page:working-with-resources/agreements).

```ts
async retrieveProgramAgreement(
  programToken: string,
  agreementToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AgreementResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `programToken` | `string` | Template, Required | Auto-generated unique identifier representing a program, prefixed with `prog-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^prog-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `agreementToken` | `string` | Template, Required | Auto-generated unique identifier representing a program agreement, prefixed with `agmt-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^agmt-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AgreementResult`](../../doc/models/agreement-result.md)

## Example Usage

```ts
const programToken = 'prog-4525ab9c-5b22-4e30-028a-45901a10aa0c';
const agreementToken = 'agmt-45901a10-5b22-4e30-028a-45901a10baa9';
try {
  const { result, ...httpResponse } = await agreementsController.retrieveProgramAgreement(programToken, agreementToken);
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
  "token": "agmt-b33d420f-6c1b-4a93-9455-d6585552b97d",
  "content": "<html>content.......content........content</html>",
  "url": "https://cdn.mypayquicker.build/content/Agreements/Cardholder/v1/Languages_EN_US/CardholderAgreement-Consumer-ACH-20k-MCB-USD.pdf",
  "type": "CARD_HOLDER_AGREEMENT",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/programs/prog-6a272eca-9487-d83a-c9e4-8df8c9a7f6eb/agreements/agmt-b33d420f-6c1b-4a93-9455-d6585552b97d",
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

