
# Bank Account Requirement List Result

## Structure

`BankAccountRequirementListResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payload` | [`BankAccountRequirement[] \| undefined`](../../doc/models/bank-account-requirement.md) | Optional | - |
| `links` | [`HateoasSelfRef[] \| undefined`](../../doc/models/hateoas-self-ref.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `meta` | [`ListMetadataObject \| undefined`](../../doc/models/list-metadata-object.md) | Optional | - |

## Example (as JSON)

```json
{
  "payload": [
    {
      "bankCountry": "MO",
      "bankCurrency": "UNDEFINED",
      "quote": {
        "category": "COMPANY",
        "destinationCountry": "BRB",
        "destinationCurrency": "RON",
        "distribution": [
          {
            "amount": 203.87,
            "currency": "IQD",
            "description": [
              {
                "language": "fr-CA",
                "translation": "translation0"
              },
              {
                "language": "pt-PT",
                "translation": "translation1"
              }
            ],
            "formattedAmount": "formattedAmount9",
            "percentage": 8.83
          },
          {
            "amount": 203.88,
            "currency": "IRR",
            "description": [
              {
                "language": "pt-PT",
                "translation": "translation1"
              },
              {
                "language": "es-MX",
                "translation": "translation2"
              },
              {
                "language": "en-GB",
                "translation": "translation3"
              }
            ],
            "formattedAmount": "formattedAmount0",
            "percentage": 8.84
          }
        ],
        "source": "TRANSACTION"
      },
      "sourceCountry": "CX",
      "sourceCurrency": "CNH"
    }
  ],
  "links": [
    {
      "href": "href8",
      "params": {
        "rel": "rel6"
      }
    },
    {
      "href": "href9",
      "params": {
        "rel": "rel7"
      }
    },
    {
      "href": "href0",
      "params": {
        "rel": "rel8"
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

