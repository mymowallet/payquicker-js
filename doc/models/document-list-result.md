
# Document List Result

## Structure

`DocumentListResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payload` | [`DocumentObject[]`](../../doc/models/document-object.md) | Required | - |
| `meta` | [`ListMetadataObject \| undefined`](../../doc/models/list-metadata-object.md) | Optional | - |
| `links` | [`HateoasSelfRef[]`](../../doc/models/hateoas-self-ref.md) | Required | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |

## Example (as JSON)

```json
{
  "payload": [
    {
      "createDate": "2016-03-13T12:52:32.123Z",
      "filename": "exampleFile.jpg",
      "mimeType": "image/jpeg",
      "token": "docu-2053aaad-c1a5-45e2-a2da-f71287f32800",
      "links": [
        {
          "href": "string",
          "params": {
            "rel": "self"
          }
        }
      ],
      "fields": [
        {
          "key": "STATUS",
          "value": "value8"
        },
        {
          "key": "TYPE",
          "value": "value9"
        }
      ]
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

