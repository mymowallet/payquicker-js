
# User Document Requirement

## Structure

`UserDocumentRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `countryOfBirth` | `string \| undefined` | Optional | - |
| `countryOfNationality` | `string \| undefined` | Optional | - |
| `documents` | [`Document[] \| undefined`](../../doc/models/document.md) | Optional | - |

## Example (as JSON)

```json
{
  "countryOfBirth": "countryOfBirth0",
  "countryOfNationality": "countryOfNationality6",
  "documents": [
    {
      "exampleImage": "exampleImage7",
      "supplementalDocuments": [
        {
          "exampleImage": "exampleImage9",
          "status": "REJECTED",
          "type": "RESIDENTIAL_DIRECTORY_LISTING"
        },
        {
          "exampleImage": "exampleImage0",
          "status": "APPROVED",
          "type": "PROCESSED_CHECK"
        }
      ],
      "metadata": [
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
        },
        {
          "dataType": "dataType9",
          "fieldType": "fieldType9",
          "name": [
            {
              "language": "language9",
              "translation": "translation7"
            }
          ]
        }
      ],
      "status": "PROVIDED",
      "type": "NATIONAL_IDENTITY_CARD"
    },
    {
      "exampleImage": "exampleImage8",
      "supplementalDocuments": [
        {
          "exampleImage": "exampleImage0",
          "status": "APPROVED",
          "type": "PROCESSED_CHECK"
        },
        {
          "exampleImage": "exampleImage1",
          "status": "UNDER_REVIEW",
          "type": "LOAN_ACCOUNT_STATEMENT"
        },
        {
          "exampleImage": "exampleImage2",
          "status": "PROVIDED",
          "type": "BANK_OR_CREDIT_CARD_STATEMENT2"
        }
      ],
      "metadata": [
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
        }
      ],
      "status": "NOT_PROVIDED",
      "type": "MATRICULA_CONSULAR_ID_CARD"
    },
    {
      "exampleImage": "exampleImage9",
      "supplementalDocuments": [
        {
          "exampleImage": "exampleImage1",
          "status": "UNDER_REVIEW",
          "type": "LOAN_ACCOUNT_STATEMENT"
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
      "type": "MARRIAGE_LICENSE_NAME_CHANGE"
    }
  ]
}
```

