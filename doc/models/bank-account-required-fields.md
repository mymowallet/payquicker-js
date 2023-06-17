
# Bank Account Required Fields

Classifies the required [bank account field](#/rest/models/structures/bank-account-required-fields) objects

## Structure

`BankAccountRequiredFields`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `format` | [`BankAccountRequirementFormat \| undefined`](../../doc/models/bank-account-requirement-format.md) | Optional | Classifies the [format](#/rest/models/structures/bank-account-requirement-format) of the required information for a bank account |
| `requirement` | [`BankAccountFields \| undefined`](../../doc/models/bank-account-fields.md) | Optional | Classifies bank account [field types](#/rest/models/structures/bank-account-fields) |
| `description` | [`Translation[] \| undefined`](../../doc/models/translation.md) | Optional | Localized requirement description for display purposes |
| `validators` | [`BankAccountRequirementValidator[] \| undefined`](../../doc/models/bank-account-requirement-validator.md) | Optional | - |

## Example (as JSON)

```json
{
  "format": {
    "example": "example8",
    "legend": [
      {
        "key": "key3",
        "descriptions": [
          {
            "language": "fr-FR",
            "translation": "translation4"
          },
          {
            "language": "it-IT",
            "translation": "translation3"
          }
        ]
      },
      {
        "key": "key4",
        "descriptions": [
          {
            "language": "it-IT",
            "translation": "translation3"
          },
          {
            "language": "ja-JP",
            "translation": "translation2"
          },
          {
            "language": "ko-KR",
            "translation": "translation1"
          }
        ]
      },
      {
        "key": "key5",
        "descriptions": [
          {
            "language": "ja-JP",
            "translation": "translation2"
          }
        ]
      }
    ]
  },
  "requirement": "BANK_NUBAN",
  "description": [
    {
      "language": "pl-PL",
      "translation": "translation5"
    },
    {
      "language": "pt-BR",
      "translation": "translation4"
    },
    {
      "language": "ru-RU",
      "translation": "translation3"
    }
  ],
  "validators": [
    {
      "validatorType": "RANGE",
      "expression": "expression0"
    },
    {
      "validatorType": "REGEX",
      "expression": "expression9"
    }
  ]
}
```

