
# Bank Account Requirement Format

Classifies the [format](#/rest/models/structures/bank-account-requirement-format) of the required information for a bank account

## Structure

`BankAccountRequirementFormat`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `example` | `string \| undefined` | Optional | Example of a requirement generated from the validator(s) |
| `legend` | [`BankAccountRequirementFormatLegend[] \| undefined`](../../doc/models/bank-account-requirement-format-legend.md) | Optional | - |

## Example (as JSON)

```json
{
  "example": "example4",
  "legend": [
    {
      "key": "key9",
      "descriptions": [
        {
          "language": "nl-NL",
          "translation": "translation8"
        },
        {
          "language": "pl-PL",
          "translation": "translation7"
        },
        {
          "language": "pt-BR",
          "translation": "translation6"
        }
      ]
    }
  ]
}
```

