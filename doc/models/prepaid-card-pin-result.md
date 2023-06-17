
# Prepaid Card Pin Result

## Structure

`PrepaidCardPinResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardPin` | `string \| undefined` | Optional | [Card PIN](#/rest/models/structures/prepaid-card-pin) for ATM and Debit usage |
| `token` | `string \| undefined` | Optional | [Token](#/rest/models/structures/prepaid-card-pin-token) used as part of a two-leg card PIN reveal request sent directly from the client that generally involves a second piece of data, such as the CVV code on the back of the card. |
| `links` | [`HateoasSelfRef[] \| undefined`](../../doc/models/hateoas-self-ref.md) | Optional | - |
| `meta` | [`MetadataObject \| undefined`](../../doc/models/metadata-object.md) | Optional | - |

## Example (as JSON)

```json
{
  "cardPin": "cardPin4",
  "token": "token6",
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

