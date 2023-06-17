
# Document Requirements List Result

## Structure

`DocumentRequirementsListResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | [`UserDocumentRequirement[] \| undefined`](../../doc/models/user-document-requirement.md) | Optional | - |
| `meta` | [`MetadataObject \| undefined`](../../doc/models/metadata-object.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": [
    {
      "countryOfBirth": "countryOfBirth0",
      "countryOfNationality": "countryOfNationality6",
      "documents": [
        {
          "exampleImage": "exampleImage9",
          "supplementalDocuments": [
            {
              "exampleImage": "exampleImage1",
              "status": "UNDER_REVIEW",
              "type": "PROOF_OF_AGE_CARD_BACK"
            }
          ],
          "metadata": [
            {
              "dataType": "dataType6",
              "fieldType": "fieldType6",
              "name": [
                {
                  "language": "language6",
                  "translation": "translation4"
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
                }
              ]
            },
            {
              "dataType": "dataType8",
              "fieldType": "fieldType8",
              "name": [
                {
                  "language": "language8",
                  "translation": "translation6"
                },
                {
                  "language": "language9",
                  "translation": "translation7"
                },
                {
                  "language": "language0",
                  "translation": "translation8"
                }
              ]
            }
          ],
          "status": "REJECTED",
          "type": "BANK_REFERENCE_LETTER"
        },
        {
          "exampleImage": "exampleImage0",
          "supplementalDocuments": [
            {
              "exampleImage": "exampleImage2",
              "status": "PROVIDED",
              "type": "HEALTH_ID_CARD_BACK"
            },
            {
              "exampleImage": "exampleImage3",
              "status": "NOT_PROVIDED",
              "type": "TAX_DOCUMENT"
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
                },
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
              "dataType": "dataType6",
              "fieldType": "fieldType6",
              "name": [
                {
                  "language": "language6",
                  "translation": "translation4"
                }
              ]
            }
          ],
          "status": "APPROVED",
          "type": "BANK_OR_CREDIT_CARD_STATEMENT"
        }
      ]
    }
  ],
  "meta": {
    "timezone": "timezone2"
  }
}
```

