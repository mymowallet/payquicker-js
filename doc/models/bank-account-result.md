
# Bank Account Result

## Structure

`BankAccountResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string \| undefined` | Optional | Unique identifier representing the [destination of funds](#/rest/models/structures/destination-token)<br>**Default**: `'dest-631b200f-665d-4dbe-bd01-3063c9dec97d'`<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^(acct\|dest\|user)-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `bankAccountOwnershipType` | [`BankAccountOwnership \| undefined`](../../doc/models/bank-account-ownership.md) | Optional | Account [ownership types](#/rest/models/structures/bank-account-ownership) |
| `bankCountry` | [`Countries \| undefined`](../../doc/models/countries.md) | Optional | Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.<br><br>The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience. |
| `bankCurrency` | [`Currencies \| undefined`](../../doc/models/currencies.md) | Optional | [Currency code type](#/rest/models/structures/country) for the object<br>**Default**: `Currencies.USD` |
| `createdOn` | `string \| undefined` | Optional | Time object was [created](#/rest/models/structures/created-on)(#/rest/models/structures/created-on) |
| `description` | `string \| undefined` | Optional | User-supplied description of the bank account for reference |
| `fields` | [`BankAccountField[] \| undefined`](../../doc/models/bank-account-field.md) | Optional | - |
| `status` | [`BankAccountStatuses \| undefined`](../../doc/models/bank-account-statuses.md) | Optional | Current verification status type of the [bank account](#/rest/models/structures/bank-account-status) |
| `type` | [`BankAccountTypes \| undefined`](../../doc/models/bank-account-types.md) | Optional | Financial purpose of the [bank account](#/rest/models/structures/bank-account-type) |
| `links` | [`HateoasSelfRef[] \| undefined`](../../doc/models/hateoas-self-ref.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `meta` | [`MetadataObject`](../../doc/models/metadata-object.md) | Required | - |

## Example (as JSON)

```json
{
  "token": "dest-631b200f-665d-4dbe-bd01-3063c9dec97d",
  "bankCurrency": "USD",
  "meta": {
    "timezone": "timezone2"
  },
  "bankAccountOwnershipType": "BUSINESS",
  "bankCountry": "WS",
  "createdOn": "2016-03-13T12:52:32.123Z"
}
```

