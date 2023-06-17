
# Bank Account Requirement Validator

[Validator type](#/rest/models/structures/bank-account-requirement-validator) that for the required bank account information.

## Structure

`BankAccountRequirementValidator`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `validatorType` | [`ValidatorTypes \| undefined`](../../doc/models/validator-types.md) | Optional | [Validator types](#/rest/models/structures/bank-account-requirement-validator) for the required bank account information. |
| `expression` | `string` | Required | Validation regular expression |

## Example (as JSON)

```json
{
  "validatorType": "UNDEFINED",
  "expression": "expression2"
}
```

