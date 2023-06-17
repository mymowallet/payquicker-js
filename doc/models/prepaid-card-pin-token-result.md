
# Prepaid Card Pin Token Result

## Structure

`PrepaidCardPinTokenResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardProcessorType` | [`CardProcessors \| undefined`](../../doc/models/card-processors.md) | Optional | The processor type for the prepaid card |
| `cardPinToken` | `string \| undefined` | Optional | [Token](#/rest/models/structures/prepaid-card-pin-token) used as part of a two-leg card PIN reveal request sent directly from the client that generally involves a second piece of data, such as the CVV code on the back of the card. |
| `token` | `string \| undefined` | Optional | [Token](#/rest/models/structures/token) representing the resource |
| `url` | `string \| undefined` | Optional | Full path of the URI to perform the request action against a prepaid card that replaces the need to build the URL with query params. |
| `links` | [`HateoasSelfRef[] \| undefined`](../../doc/models/hateoas-self-ref.md) | Optional | - |
| `meta` | [`MetadataObject \| undefined`](../../doc/models/metadata-object.md) | Optional | - |

## Example (as JSON)

```json
{
  "cardProcessorType": "CardProcessorType_FIS",
  "cardPinToken": "cardPinToken4",
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
  ]
}
```

