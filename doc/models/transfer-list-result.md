
# Transfer List Result

## Structure

`TransferListResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payload` | [`TransferObject[]`](../../doc/models/transfer-object.md) | Required | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `meta` | [`ListMetadataObject`](../../doc/models/list-metadata-object.md) | Required | - |
| `links` | [`HateoasSelfRef[]`](../../doc/models/hateoas-self-ref.md) | Required | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |

## Example (as JSON)

```json
{
  "payload": [
    {
      "destinationCurrency": "USD",
      "destinationToken": "dest-631b200f-665d-4dbe-bd01-3063c9dec97d",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "receiptToken": "rcpt-b7fda294-8d3a-48e8-9a11-ef7be07a732c",
      "token": "token2",
      "clientTransferId": "clientTransferId6",
      "created": "2016-03-13T12:52:32.123Z",
      "destinationAmount": 177.6
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

