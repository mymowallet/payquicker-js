
# Prepaid Card List Result

## Structure

`PrepaidCardListResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payload` | [`PrepaidCardObject[]`](../../doc/models/prepaid-card-object.md) | Required | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `meta` | [`ListMetadataObject`](../../doc/models/list-metadata-object.md) | Required | - |
| `links` | [`HateoasSelfRef[]`](../../doc/models/hateoas-self-ref.md) | Required | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |

## Example (as JSON)

```json
{
  "payload": [
    {
      "cardNumber": "483318******4628",
      "cardPackage": "71290",
      "currency": "USD",
      "userToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "token": "token2",
      "cardNetwork": "MASTER_CARD",
      "country": "TW"
    }
  ],
  "meta": {
    "pageNo": "1",
    "pageSize": "10",
    "pageCount": "1",
    "recordCount": "recordCount6",
    "timezone": "timezone2"
  },
  "links": [
    {
      "href": "string",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```

