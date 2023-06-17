
# Document Result

## Structure

`DocumentResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createDate` | `string` | Required | Time object was [created](#/rest/models/structures/created-on)(#/rest/models/structures/created-on) |
| `fields` | [`DocumentDetails[] \| undefined`](../../doc/models/document-details.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `filename` | `string \| undefined` | Optional | The name given to a computer file in order to distinguish it from other files |
| `mimeType` | `string \| undefined` | Optional | A label used to identify a type of data.  Acts like a file extension on the internet. |
| `token` | `string` | Required | [Token](#/rest/models/structures/token) representing the document<br>**Default**: `'docu-2053aaad-c1a5-45e2-a2da-f71287f32800'`<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^docu-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `links` | [`HateoasSelfRef[]`](../../doc/models/hateoas-self-ref.md) | Required | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `meta` | [`MetadataObject \| undefined`](../../doc/models/metadata-object.md) | Optional | - |

## Example (as JSON)

```json
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
      "value": "value4"
    },
    {
      "key": "TYPE",
      "value": "value5"
    }
  ],
  "meta": {
    "timezone": "timezone2"
  }
}
```

