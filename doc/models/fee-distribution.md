
# Fee Distribution

## Structure

`FeeDistribution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number \| undefined` | Optional | Allocated money to be sent in the transaction.<br>**Default**: `1.02` |
| `currency` | [`Currencies \| undefined`](../../doc/models/currencies.md) | Optional | [Currency code type](#/rest/models/structures/country) for the object<br>**Default**: `Currencies.USD` |
| `description` | [`ReceiptDescriptions[] \| undefined`](../../doc/models/receipt-descriptions.md) | Optional | - |
| `formattedAmount` | `string \| undefined` | Optional | Combination of the bank account amount and currency type<br>**Default**: `'$0.05 USD'` |
| `percentage` | `number \| undefined` | Optional | Fee percentage that the responsible account pays |
| `responsibility` | [`FeeResponsibilityParties \| undefined`](../../doc/models/fee-responsibility-parties.md) | Optional | Fee responsibility types |
| `responsibilitySource` | [`FeeResponsibilitySources \| undefined`](../../doc/models/fee-responsibility-sources.md) | Optional | Fee responsibility source types |
| `sourceToken` | `string \| undefined` | Optional | Unique identifier representing the [source of funds](#/rest/models/structures/source-token)<br>**Default**: `'acct-3908ab5a-6ce1-474d-8b80-a63a7b147860'`<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^(acct\|user\|dest)-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |

## Example (as JSON)

```json
{
  "amount": 1.02,
  "currency": "USD",
  "formattedAmount": "$0.05 USD",
  "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
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
  "percentage": 4.18
}
```

