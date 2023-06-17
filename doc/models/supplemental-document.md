
# Supplemental Document

## Structure

`SupplementalDocument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exampleImage` | `string \| undefined` | Optional | Full path of the URI used for this object |
| `status` | [`DocumentStatusTypes \| undefined`](../../doc/models/document-status-types.md) | Optional | Status Type of a document |
| `type` | [`DocumentTypes \| undefined`](../../doc/models/document-types.md) | Optional | Indicates the enums for KYC. |

## Example (as JSON)

```json
{
  "exampleImage": "exampleImage0",
  "status": "APPROVED",
  "type": "DEED_POLL_NAME_CHANGE"
}
```

