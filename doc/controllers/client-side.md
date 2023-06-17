# Client Side

```ts
const clientSideController = new ClientSideController(client);
```

## Class Name

`ClientSideController`

## Methods

* [Create Card Data Token](../../doc/controllers/client-side.md#create-card-data-token)
* [Create Card PIN Token](../../doc/controllers/client-side.md#create-card-pin-token)
* [Retrieve Card Data](../../doc/controllers/client-side.md#retrieve-card-data)
* [Retrieve Card PIN](../../doc/controllers/client-side.md#retrieve-card-pin)
* [Update Card PIN](../../doc/controllers/client-side.md#update-card-pin)


# Create Card Data Token

Generate a token used to reveal [prepaid card](page:working-with-resources/prepaid-cards) information in the form of image data (base64) or JSON.

```ts
async createCardDataToken(
  userToken: string,
  destinationToken: string,
  format: Format,
  side?: Side,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PrepaidCardDataTokenResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `destinationToken` | `string` | Template, Required | Auto-generated unique identifier representing a transfer destination, including prepaid cards, bank accounts, paper checks, and other users, prefixed with `dest-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^dest-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `format` | [`Format`](../../doc/models/format.md) | Query, Required | Desired format for the prepaid card data. |
| `side` | [`Side \| undefined`](../../doc/models/side.md) | Query, Optional | Side to specify when retrieving a prepaid card's image data. *Required if IMAGE format specified. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PrepaidCardDataTokenResult`](../../doc/models/prepaid-card-data-token-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const destinationToken = 'dest-4aed86e2-4929-45bf-814d-9030aef21e79';
const format = 'TEXT';
try {
  const { result, ...httpResponse } = await clientSideController.createCardDataToken(userToken, destinationToken, format);
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
  "cardProcessorType": "CardProcessorType_FIS",
  "resourceValue": "b61bc8708ab84870a2096398b60269d5",
  "token": "iEureKuLW1gZQ7d3/2ijX4+6bDZuUwpp2QmhPfedarncS2Cde1Ebmby+dxfeP7+Iaty9YYCLFwY42HHOm03dliH7Jp0Yo/sjOb/FmSQ3IOVYpNSYBcZYGmgpyBEG9gPa2HRIKK8+NcPVjjb+0gfqFAI52Emk0P+VPaBZ2NgsENV/I4MuIkWsUXha3QZh49a0EK3wO14jwR4BosY/rk0/9F5uJEWUjv8gvPej+dCFyMnybjj6jPK9f/gFlPUYVHuS",
  "tokenPurposeType": "UserTokenPurposeType_GetPrepaidCardData",
  "url": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/prepaid-cards/dest-b61bc870-8ab8-4870-a209-6398b60269d5/pci?token=iEureKuLW1gZQ7d3%2f2ijX4%2b6bDZuUwpp2QmhPfedarncS2Cde1Ebmby%2bdxfeP7%2bIaty9YYCLFwY42HHOm03dliH7Jp0Yo%2fsjOb%2fFmSQ3IOVYpNSYBcZYGmgpyBEG9gPa2HRIKK8%2bNcPVjjb%2b0gfqFAI52Emk0P%2bVPaBZ2NgsENV%2fI4MuIkWsUXha3QZh49a0EK3wO14jwR4BosY%2frk0%2f9F5uJEWUjv8gvPej%2bdCFyMnybjj6jPK9f%2fgFlPUYVHuS&format=TEXT",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/prepaid-cards/dest-b61bc870-8ab8-4870-a209-6398b60269d5/pci/iEureKuLW1gZQ7d3/2ijX4+6bDZuUwpp2QmhPfedarncS2Cde1Ebmby+dxfeP7+Iaty9YYCLFwY42HHOm03dliH7Jp0Yo/sjOb/FmSQ3IOVYpNSYBcZYGmgpyBEG9gPa2HRIKK8+NcPVjjb+0gfqFAI52Emk0P+VPaBZ2NgsENV/I4MuIkWsUXha3QZh49a0EK3wO14jwR4BosY/rk0/9F5uJEWUjv8gvPej+dCFyMnybjj6jPK9f/gFlPUYVHuS",
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


# Create Card PIN Token

Retrieve one part of a two-part token required to reveal or set a client side [prepaid card](page:working-with-resources/prepaid-cards) PIN.

```ts
async createCardPINToken(
  userToken: string,
  destinationToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PrepaidCardPinTokenResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `destinationToken` | `string` | Template, Required | Auto-generated unique identifier representing a transfer destination, including prepaid cards, bank accounts, paper checks, and other users, prefixed with `dest-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^dest-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PrepaidCardPinTokenResult`](../../doc/models/prepaid-card-pin-token-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const destinationToken = 'dest-4aed86e2-4929-45bf-814d-9030aef21e79';
try {
  const { result, ...httpResponse } = await clientSideController.createCardPINToken(userToken, destinationToken);
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
  "cardProcessorType": "CardProcessorType_FIS",
  "cardPinToken": "/YnZvwn9Q5TczQhubfjB8Sq1inIVtMGnKT9ywAcan60uavrMNeMAR1RGyuWj7N8XOiy7W2QrEXGzM/668UIJMzTFOlVqSrkQSn22ErWCb5BQTYXl04sF1nW73u8aykRHi1c4lGhu3kSrTKxqqN/GtEJTcDV+SfBj/huWQZrdWTxdbnN2XX5jqNkGUHbfkFU0s9oxxwX6cYYreBbtmo0WFSLS0o2RT+LGAtiEqgPvT5T6NlZlNa+TF17gbgxHi0sG",
  "token": "dest-b61bc870-8ab8-4870-a209-6398b60269d5",
  "url": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/prepaid-cards/dest-b61bc870-8ab8-4870-a209-6398b60269d5/pin?token=%2fYnZvwn9Q5TczQhubfjB8Sq1inIVtMGnKT9ywAcan60uavrMNeMAR1RGyuWj7N8XOiy7W2QrEXGzM%2f668UIJMzTFOlVqSrkQSn22ErWCb5BQTYXl04sF1nW73u8aykRHi1c4lGhu3kSrTKxqqN%2fGtEJTcDV%2bSfBj%2fhuWQZrdWTxdbnN2XX5jqNkGUHbfkFU0s9oxxwX6cYYreBbtmo0WFSLS0o2RT%2bLGAtiEqgPvT5T6NlZlNa%2bTF17gbgxHi0sG",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/prepaid-cards/dest-b61bc870-8ab8-4870-a209-6398b60269d5/pin",
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


# Retrieve Card Data

Return [prepaid card](page:working-with-resources/prepaid-cards) data in the form of image data, text, or both.

```ts
async retrieveCardData(
  userToken: string,
  destinationToken: string,
  format: Format,
  side?: Side,
  body?: RetrieveCardData,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PrepaidCardDataResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `destinationToken` | `string` | Template, Required | Auto-generated unique identifier representing a transfer destination, including prepaid cards, bank accounts, paper checks, and other users, prefixed with `dest-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^dest-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `format` | [`Format`](../../doc/models/format.md) | Query, Required | Desired format for the prepaid card data. |
| `side` | [`Side \| undefined`](../../doc/models/side.md) | Query, Optional | Side to specify when retrieving a prepaid card's image data. *Required if IMAGE format specified. |
| `body` | [`RetrieveCardData \| undefined`](../../doc/models/retrieve-card-data.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PrepaidCardDataResult`](../../doc/models/prepaid-card-data-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const destinationToken = 'dest-4aed86e2-4929-45bf-814d-9030aef21e79';
const format = 'TEXT';
const contentType = null;
const body: RetrieveCardData = {};
body.token = 'iEureKuLW1gZQ7d3/2ijX4+6bDZuUwpp2QmhPfedarncS2Cde1Ebmby+dxfeP7+Iaty9YYCLFwY42HHOm03dliH7Jp0Yo/sjOb/FmSQ3IOVYpNSYBcZYGmgpyBEG9gPa2HRIKK8+NcPVjjb+0gfqFAI52Emk0P+VPaBZ2NgsENV/I4MuIkWsUXha3QZh49a0EK3wO14jwR4BosY/rk0/9F5uJEWUjv8gvPej+dCFyMnybjj6jPK9f/gFlPUYVHuS';

try {
  const { result, ...httpResponse } = await clientSideController.retrieveCardData(userToken, destinationToken, format, None, body);
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
  "cardNumber": 4833180000103940,
  "cvvNumber": "709",
  "expiration": "04/25",
  "nameOnCard": "SIDNEY MAYER",
  "token": "dest-b61bc870-8ab8-4870-a209-6398b60269d5",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/prepaid-cards/dest-b61bc870-8ab8-4870-a209-6398b60269d5/pci",
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


# Retrieve Card PIN

Reveal a [PIN](#/rest/models/structures/prepaid-card-pin) for a [prepaid card](page:working-with-resources/prepaid-cards).

```ts
async retrieveCardPIN(
  userToken: string,
  destinationToken: string,
  body?: RetrieveCardPin,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PrepaidCardPinResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `destinationToken` | `string` | Template, Required | Auto-generated unique identifier representing a transfer destination, including prepaid cards, bank accounts, paper checks, and other users, prefixed with `dest-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^dest-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `body` | [`RetrieveCardPin \| undefined`](../../doc/models/retrieve-card-pin.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PrepaidCardPinResult`](../../doc/models/prepaid-card-pin-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const destinationToken = 'dest-4aed86e2-4929-45bf-814d-9030aef21e79';
const contentType = null;
const body: RetrieveCardPin = {};
body.cardPinToken = 'IzPQ55SGbTumVRn7xscpjL9zgFV29503mQ+GJuKAzCYl8DhLkJKZSBqPLWx6rBf/ky9FRqZCptCCVmZ3ZT+sR6sVmBDT9vfK+8Bbv/6Kftz+Pu9DJOXTwd7Hcs9PuaU5qirAq9rp3P5pKL5Ilg+ZkU8b7TP2ZMBIchxYHZG5aJ3b96BdlMyEB4bu1UATKOjS2+vYFLUFprtwbnwp94QuaiFALG9NMClQ3CqWJqot/Z1DSbTnPqIq+BRzA8Xdbh1j';

try {
  const { result, ...httpResponse } = await clientSideController.retrieveCardPIN(userToken, destinationToken, body);
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
  "cardPin": "4444",
  "token": "dest-b61bc870-8ab8-4870-a209-6398b60269d5",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/prepaid-cards/dest-b61bc870-8ab8-4870-a209-6398b60269d5/pin",
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


# Update Card PIN

Set a [PIN](#/rest/models/structures/prepaid-card-pin) for a [prepaid card](page:working-with-resources/prepaid-cards), if supported by program.

```ts
async updateCardPIN(
  userToken: string,
  destinationToken: string,
  body?: UpdateCardPin,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OperationResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `destinationToken` | `string` | Template, Required | Auto-generated unique identifier representing a transfer destination, including prepaid cards, bank accounts, paper checks, and other users, prefixed with `dest-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^dest-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `body` | [`UpdateCardPin \| undefined`](../../doc/models/update-card-pin.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OperationResult`](../../doc/models/operation-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const destinationToken = 'dest-4aed86e2-4929-45bf-814d-9030aef21e79';
const contentType = null;
const body: UpdateCardPin = {};
body.cardPinToken = '05OQkdzRkzjP+qlhTrsko00cb58gGERv+g1Nd7/xK+Ol2+vJaOJnjQgdFA0Jqf5TFdYZrjO7dw/2l1V9k8xNGVr3MyKHrQh/CZ+HMz2gdI3VkJVj0x50PStECnN0t1P4eXTZqmh93O24fXRyvLn8XvmfyV7nF94IEwzwVe6Xdvl6mHQyyyNwtSNKHtNGGpM88hoX5PAvbqgYrsy5tBYi3CcN+Ld5Ia8+nFq9pDAXs6dCLsidU9XJRzLLcWWdhzxR';
body.cardPin = '4444';

try {
  const { result, ...httpResponse } = await clientSideController.updateCardPIN(userToken, destinationToken, body);
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

