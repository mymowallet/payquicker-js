
# Prepaid Card Data Token Result

## Structure

`PrepaidCardDataTokenResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardProcessorType` | [`CardProcessors`](../../doc/models/card-processors.md) | Required | The processor type for the prepaid card |
| `resourceValue` | `string \| undefined` | Optional | Value of the target resource |
| `token` | `string \| undefined` | Optional | [Token](#/rest/models/structures/token) representing the resource |
| `tokenPurposeType` | [`TokenPurposes`](../../doc/models/token-purposes.md) | Required | Purpose of the token |
| `url` | `string \| undefined` | Optional | Full path of the URI to perform the request action against a prepaid card that replaces the need to build the URL with query params. |
| `links` | [`HateoasSelfRef[] \| undefined`](../../doc/models/hateoas-self-ref.md) | Optional | - |
| `meta` | [`MetadataObject \| undefined`](../../doc/models/metadata-object.md) | Optional | - |

## Example (as JSON)

```json
{
  "cardProcessorType": "CardProcessorType_FIS",
  "tokenPurposeType": "UserTokenPurposeType_UNDEFINED",
  "resourceValue": "resourceValue6",
  "token": "token6",
  "url": "url4",
  "links": [
    {
      "href": "href8",
      "params": {
        "rel": "rel6"
      }
    },
    {
      "href": "href9",
      "params": {
        "rel": "rel7"
      }
    },
    {
      "href": "href0",
      "params": {
        "rel": "rel8"
      }
    }
  ],
  "meta": {
    "timezone": "timezone2"
  }
}
```

