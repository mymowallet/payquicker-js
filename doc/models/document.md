
# Document

## Structure

`Document`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exampleImage` | `string \| undefined` | Optional | Full path of the URI used for this object |
| `supplementalDocuments` | [`SupplementalDocument[] \| undefined`](../../doc/models/supplemental-document.md) | Optional | - |
| `metadata` | [`Metadatum[] \| undefined`](../../doc/models/metadatum.md) | Optional | - |
| `status` | [`DocumentStatusTypes \| undefined`](../../doc/models/document-status-types.md) | Optional | Status Type of a document |
| `type` | [`DocumentTypes \| undefined`](../../doc/models/document-types.md) | Optional | Indicates the enums for KYC. |

## Example (as JSON)

```json
{
  "exampleImage": "exampleImage0",
  "supplementalDocuments": [
    {
      "exampleImage": "exampleImage2",
      "status": "PROVIDED",
      "type": "HOME_OR_AUTO_INSURANCE_CERTIFICATE_OR_SCHEDULE"
    }
  ],
  "metadata": [
    {
      "dataType": "dataType5",
      "fieldType": "fieldType5",
      "name": [
        {
          "language": "language5",
          "translation": "translation3"
        }
      ]
    },
    {
      "dataType": "dataType6",
      "fieldType": "fieldType6",
      "name": [
        {
          "language": "language6",
          "translation": "translation4"
        },
        {
          "language": "language7",
          "translation": "translation5"
        }
      ]
    },
    {
      "dataType": "dataType7",
      "fieldType": "fieldType7",
      "name": [
        {
          "language": "language7",
          "translation": "translation5"
        },
        {
          "language": "language8",
          "translation": "translation6"
        },
        {
          "language": "language9",
          "translation": "translation7"
        }
      ]
    }
  ],
  "status": "APPROVED",
  "type": "DEED_POLL_NAME_CHANGE"
}
```

