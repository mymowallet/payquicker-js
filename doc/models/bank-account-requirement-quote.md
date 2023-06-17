
# Bank Account Requirement Quote

## Structure

`BankAccountRequirementQuote`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `category` | [`CategoryTypes \| undefined`](../../doc/models/category-types.md) | Optional | Category types |
| `destinationCountry` | [`CountriesAlphaCode3 \| undefined`](../../doc/models/countries-alpha-code-3.md) | Optional | 3 Character symbol for country |
| `destinationCurrency` | [`Currencies \| undefined`](../../doc/models/currencies.md) | Optional | [Currency code type](#/rest/models/structures/country) for the object<br>**Default**: `Currencies.USD` |
| `distribution` | [`FeeDistribution[] \| undefined`](../../doc/models/fee-distribution.md) | Optional | - |
| `source` | [`FeeSources \| undefined`](../../doc/models/fee-sources.md) | Optional | Fee source types |
| `totalAmount` | `number \| undefined` | Optional | - |
| `transactionAmount` | `number \| undefined` | Optional | Allocated money to be sent in the transaction.<br>**Default**: `1.02` |
| `type` | [`Fees \| undefined`](../../doc/models/fees.md) | Optional | Fee types |
| `valueAmount` | `number \| undefined` | Optional | Allocated money to be sent in the transaction.<br>**Default**: `1.02` |
| `valueType` | [`FeeValues \| undefined`](../../doc/models/fee-values.md) | Optional | Fee value types |

## Example (as JSON)

```json
{
  "destinationCurrency": "USD",
  "transactionAmount": 1.02,
  "valueAmount": 1.02,
  "category": "COMPANY",
  "destinationCountry": "KGZ",
  "distribution": [
    {
      "amount": 225.53,
      "currency": "BAM",
      "description": [
        {
          "language": "nl-NL",
          "translation": "translation6"
        },
        {
          "language": "pl-PL",
          "translation": "translation7"
        }
      ],
      "formattedAmount": "formattedAmount5",
      "percentage": 30.49
    },
    {
      "amount": 225.54,
      "currency": "BBD",
      "description": [
        {
          "language": "pl-PL",
          "translation": "translation7"
        },
        {
          "language": "pt-BR",
          "translation": "translation8"
        },
        {
          "language": "ru-RU",
          "translation": "translation9"
        }
      ],
      "formattedAmount": "formattedAmount6",
      "percentage": 30.5
    }
  ],
  "source": "TRANSACTION"
}
```

