
# Balance List Result

## Structure

`BalanceListResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payload` | [`BalanceObject[]`](../../doc/models/balance-object.md) | Required | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `meta` | [`ListMetadataObject`](../../doc/models/list-metadata-object.md) | Required | - |
| `links` | [`HateoasSelfRef[]`](../../doc/models/hateoas-self-ref.md) | Required | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |

## Example (as JSON)

```json
{
  "payload": [
    {
      "amount": 0.0,
      "currency": "USD",
      "formattedAmount": "$0.05 USD",
      "token": "token2",
      "links": [
        {
          "href": "href2",
          "params": {
            "rel": "rel0"
          }
        },
        {
          "href": "href3",
          "params": {
            "rel": "rel1"
          }
        },
        {
          "href": "href4",
          "params": {
            "rel": "rel2"
          }
        }
      ]
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

