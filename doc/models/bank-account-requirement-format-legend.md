
# Bank Account Requirement Format Legend

Classifies the [legend format](#/rest/models/structures/bank-account-requirement-format-legend) of the required information for a bank account

## Structure

`BankAccountRequirementFormatLegend`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string \| undefined` | Optional | - |
| `descriptions` | [`Translation[] \| undefined`](../../doc/models/translation.md) | Optional | Localized requirement description for display purposes |

## Example (as JSON)

```json
{
  "key": "key0",
  "descriptions": [
    {
      "language": "ko-KR",
      "translation": "translation1"
    },
    {
      "language": "nl-NL",
      "translation": "translation0"
    }
  ]
}
```

