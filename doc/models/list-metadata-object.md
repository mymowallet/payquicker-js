
# List Metadata Object

## Structure

`ListMetadataObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pageNo` | `string` | Required | **Default**: `'1'` |
| `pageSize` | `string` | Required | **Default**: `'10'` |
| `pageCount` | `string` | Required | **Default**: `'1'` |
| `recordCount` | `string` | Required | - |
| `timezone` | `string` | Required | Timezone of the datetime objects in the response |

## Example (as JSON)

```json
{
  "pageNo": "1",
  "pageSize": "10",
  "pageCount": "1",
  "recordCount": "recordCount6",
  "timezone": "timezone0"
}
```

