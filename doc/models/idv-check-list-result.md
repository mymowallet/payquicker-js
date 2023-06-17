
# Idv Check List Result

## Structure

`IdvCheckListResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payload` | [`IdvCheckObject[]`](../../doc/models/idv-check-object.md) | Required | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `meta` | [`ListMetadataObject \| undefined`](../../doc/models/list-metadata-object.md) | Optional | - |
| `links` | [`HateoasSelfRef[]`](../../doc/models/hateoas-self-ref.md) | Required | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |

## Example (as JSON)

```json
{
  "payload": [
    {
      "token": "token2",
      "idvProviderReference": "idvProviderReference6",
      "idvResult": "SERVICE_OFFLINE",
      "idvSubResult": "HARD",
      "idvProvider": "HOOYU"
    }
  ],
  "links": [
    {
      "href": "string",
      "params": {
        "rel": "self"
      }
    }
  ],
  "meta": {
    "pageNo": "pageNo0",
    "pageSize": "pageSize4",
    "pageCount": "pageCount6",
    "recordCount": "recordCount6",
    "timezone": "timezone2"
  }
}
```

