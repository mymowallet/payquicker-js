
# Authorization List Result

## Structure

`AuthorizationListResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payload` | [`AuthorizationObject[]`](../../doc/models/authorization-object.md) | Required | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `meta` | [`ListMetadataObject`](../../doc/models/list-metadata-object.md) | Required | - |
| `links` | [`HateoasSelfRef[]`](../../doc/models/hateoas-self-ref.md) | Required | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |

## Example (as JSON)

```json
{
  "payload": [
    {
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": 1.02,
      "currency": "USD",
      "type": "PAYMENT",
      "createdOn": "2016-03-13T12:52:32.123Z",
      "sign": "DEBIT"
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

