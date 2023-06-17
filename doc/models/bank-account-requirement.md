
# Bank Account Requirement

Classifies the bank account [required](#/rest/models/structures/bank-account-requirement) information

## Structure

`BankAccountRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankCountry` | [`Countries \| undefined`](../../doc/models/countries.md) | Optional | Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.<br><br>The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience. |
| `bankCurrency` | [`Currencies \| undefined`](../../doc/models/currencies.md) | Optional | [Currency code type](#/rest/models/structures/country) for the object<br>**Default**: `Currencies.USD` |
| `quote` | [`BankAccountRequirementQuote \| undefined`](../../doc/models/bank-account-requirement-quote.md) | Optional | - |
| `sourceCountry` | [`Countries \| undefined`](../../doc/models/countries.md) | Optional | Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.<br><br>The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience. |
| `sourceCurrency` | [`Currencies \| undefined`](../../doc/models/currencies.md) | Optional | [Currency code type](#/rest/models/structures/country) for the object<br>**Default**: `Currencies.USD` |
| `requirements` | [`BankAccountRequiredFields[] \| undefined`](../../doc/models/bank-account-required-fields.md) | Optional | - |

## Example (as JSON)

```json
{
  "bankCurrency": "USD",
  "sourceCurrency": "USD",
  "bankCountry": "WS",
  "quote": {
    "category": "COMPANY",
    "destinationCountry": "MEX",
    "destinationCurrency": "KRW",
    "distribution": [
      {
        "amount": 243.33,
        "currency": "CAD",
        "description": [
          {
            "language": "fr-CA",
            "translation": "translation6"
          },
          {
            "language": "pt-PT",
            "translation": "translation7"
          }
        ],
        "formattedAmount": "formattedAmount5",
        "percentage": 48.29
      },
      {
        "amount": 243.34,
        "currency": "CDF",
        "description": [
          {
            "language": "pt-PT",
            "translation": "translation7"
          },
          {
            "language": "es-MX",
            "translation": "translation8"
          },
          {
            "language": "en-GB",
            "translation": "translation9"
          }
        ],
        "formattedAmount": "formattedAmount6",
        "percentage": 48.3
      }
    ],
    "source": "TRANSACTION"
  },
  "sourceCountry": "MQ"
}
```

