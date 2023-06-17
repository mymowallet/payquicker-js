# Compliance

Compliance-related operations

```ts
const complianceController = new ComplianceController(client);
```

## Class Name

`ComplianceController`

## Methods

* [List Identity Checks](../../doc/controllers/compliance.md#list-identity-checks)
* [Retrieve Identity Check](../../doc/controllers/compliance.md#retrieve-identity-check)


# List Identity Checks

Retrieve a list of [IDV checks](page:working-with-resources/user#list-user-idv-checks) by user token that supports filtering, sorting, and pagination through existing mechanisms.

```ts
async listIdentityChecks(
  userToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IdvCheckListResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IdvCheckListResult`](../../doc/models/idv-check-list-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
try {
  const { result, ...httpResponse } = await complianceController.listIdentityChecks(userToken);
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
      "idvProviderReference": "yPV0h4o1Yw3QzdLAvA7a",
      "idvResult": "PASS",
      "idvSubResult": "HARD",
      "idvProvider": "HOOYU",
      "createdOn": "2020-02-21T22:00:00Z",
      "raw": "<RAW IDV processor output, for informational /debugging purposes only>",
      "idvCheckType": "NON_DOCUMENTARY",
      "idvDisposition": "FINAL",
      "token": "idvc-7e7567e0-c2db-485d-896d-45901a10baa9",
      "links": [
        {
          "params": {
            "rel": "self"
          },
          "href": "https://platform.mypayquicker.com/api/v2/users/user-f012bc86-4d42-415b-a8b2-be5e0b90e59a/idv-checks/idvc-7e7567e0-c2db-485d-896d-45901a10baa9"
        }
      ]
    }
  ],
  "links": [
    {
      "params": {
        "rel": "self"
      },
      "href": "https://platform.mypayquicker.com/api/v2/users/user-f012bc86-4d42-415b-a8b2-be5e0b90e59a/idv-checks"
    }
  ]
}
```


# Retrieve Identity Check

Retrieve a list of [IDV checks](page:working-with-resources/user#retrieve-user-idv-check) by IDVC token that supports filtering, sorting, and pagination through existing mechanisms.

```ts
async retrieveIdentityCheck(
  userToken: string,
  idvcToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IdvCheckResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `idvcToken` | `string` | Template, Required | Auto-generated unique identifier representing a user IDV check, prefixed with `idvc-`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IdvCheckResult`](../../doc/models/idv-check-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const idvcToken = 'idvc-6e7567e0-c2db-485d-896d-45901a10aaaa';
try {
  const { result, ...httpResponse } = await complianceController.retrieveIdentityCheck(userToken, idvcToken);
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
  "createdOn": "2022-04-20T17:34:50Z",
  "idvCheckType": "PII",
  "idvDispostion": "UNDEFINED",
  "idvProvider": "FISIDOLOGY",
  "idvResult": "PASS",
  "idvSubResult": "HARD",
  "token": "idvc-5a04bacf-f99c-4962-8c02-d8e744c625d6",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/idv-checks/idvc-5a04bacf-f99c-4962-8c02-d8e744c625d6",
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

