
# Spendback Fee

## Structure

`SpendbackFee`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `category` | [`CategoryTypes \| undefined`](../../doc/models/category-types.md) | Optional | Category types |
| `distribution` | [`FeeDistribution[] \| undefined`](../../doc/models/fee-distribution.md) | Optional | - |
| `source` | [`FeeSources \| undefined`](../../doc/models/fee-sources.md) | Optional | Fee source types |
| `totalAmount` | `number \| undefined` | Optional | Total amount of money for all transactions |
| `transactionAmount` | `number \| undefined` | Optional | Total amount of money for the transaction |
| `type` | [`Fees \| undefined`](../../doc/models/fees.md) | Optional | Fee types |
| `valueAmount` | `string \| undefined` | Optional | Value of the target resource |
| `valueType` | [`FeeValues \| undefined`](../../doc/models/fee-values.md) | Optional | Fee value types |

## Example (as JSON)

```json
{
  "category": "COMPANY",
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
  "source": "TRANSACTION",
  "totalAmount": 136.84,
  "transactionAmount": 98.08
}
```

