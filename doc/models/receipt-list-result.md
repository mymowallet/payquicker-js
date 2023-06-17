
# Receipt List Result

## Structure

`ReceiptListResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payload` | [`ReceiptObject[]`](../../doc/models/receipt-object.md) | Required | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `meta` | [`ListMetadataObject`](../../doc/models/list-metadata-object.md) | Required | - |
| `links` | [`HateoasSelfRef[]`](../../doc/models/hateoas-self-ref.md) | Required | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |

## Example (as JSON)

```json
{
  "payload": [
    {
      "token": "rcpt-b7fda294-8d3a-48e8-9a11-ef7be07a732c",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "dest-631b200f-665d-4dbe-bd01-3063c9dec97d",
      "amount": 1.02,
      "currency": "USD",
      "type": "PREPAID_CARD_UNLOAD",
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

