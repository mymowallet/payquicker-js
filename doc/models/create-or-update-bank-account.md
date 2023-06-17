
# Create or Update Bank Account

## Structure

`CreateOrUpdateBankAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountOwnershipType` | [`BankAccountOwnership \| undefined`](../../doc/models/bank-account-ownership.md) | Optional | Account [ownership types](#/rest/models/structures/bank-account-ownership) |
| `bankCountry` | [`Countries \| undefined`](../../doc/models/countries.md) | Optional | Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.<br><br>The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience. |
| `bankCurrency` | [`Currencies \| undefined`](../../doc/models/currencies.md) | Optional | [Currency code type](#/rest/models/structures/country) for the object<br>**Default**: `Currencies.USD` |
| `description` | `string \| undefined` | Optional | User-supplied description of the bank account for reference |
| `fields` | [`BankAccountField[] \| undefined`](../../doc/models/bank-account-field.md) | Optional | - |
| `type` | [`BankAccountTypes \| undefined`](../../doc/models/bank-account-types.md) | Optional | Financial purpose of the [bank account](#/rest/models/structures/bank-account-type) |

## Example (as JSON)

```json
{
  "bankCurrency": "USD",
  "bankAccountOwnershipType": "BUSINESS",
  "bankCountry": "WS",
  "description": "description0",
  "fields": [
    {
      "key": "UNDEFINED",
      "value": "value4"
    },
    {
      "key": "BANK_ACH_ABA",
      "value": "value5"
    }
  ]
}
```

