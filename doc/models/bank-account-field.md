
# Bank Account Field

1...N required [fields](#/rest/models/structures/key-value-pair-bank-field-types-string) as determined by call to get requirements

## Structure

`BankAccountField`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | [`BankAccountFields`](../../doc/models/bank-account-fields.md) | Required | Classifies bank account [field types](#/rest/models/structures/bank-account-fields) |
| `value` | `string` | Required | - |

## Example (as JSON)

```json
{
  "key": "BANK_TRANSIT_CODE",
  "value": "value2"
}
```

