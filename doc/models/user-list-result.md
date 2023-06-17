
# User List Result

## Structure

`UserListResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payload` | [`UserObject[]`](../../doc/models/user-object.md) | Required | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `meta` | [`ListMetadataObject`](../../doc/models/list-metadata-object.md) | Required | - |
| `links` | [`HateoasSelfRef[]`](../../doc/models/hateoas-self-ref.md) | Required | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |

## Example (as JSON)

```json
{
  "payload": [
    {
      "currency": "USD",
      "token": "token2",
      "addressLine1": "addressLine16",
      "businessAddressLine1": "businessAddressLine10",
      "businessAddressLine2": "businessAddressLine26",
      "businessAddressType": "RESIDENTIAL"
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

