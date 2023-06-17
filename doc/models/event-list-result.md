
# Event List Result

## Structure

`EventListResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payload` | [`EventObject[]`](../../doc/models/event-object.md) | Required | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `meta` | [`ListMetadataObject`](../../doc/models/list-metadata-object.md) | Required | - |
| `links` | [`HateoasSelfRef[]`](../../doc/models/hateoas-self-ref.md) | Required | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |

## Example (as JSON)

```json
{
  "payload": [
    {
      "token": "token2",
      "canBeCancelled": false,
      "eventRequirementCategoryType": "ACKNOWLEDGEMENT",
      "eventRequirementType": "AGREEMENTS_ACCEPTED",
      "eventStatus": "COMPLETED",
      "event": "WALLET_REGISTRATION"
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

