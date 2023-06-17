
# Prepaid Card Result

## Structure

`PrepaidCardResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string \| undefined` | Optional | [Token](#/rest/models/structures/token) representing the resource |
| `cardNetwork` | [`CardNetworks \| undefined`](../../doc/models/card-networks.md) | Optional | Major [credit card network](#/rest/models/structures/card-network) types |
| `cardNumber` | `string \| undefined` | Optional | Unique number on the prepaid card |
| `cardPackage` | `string \| undefined` | Optional | [Package](#/rest/models/structures/prepaid-card-package) for the card being displayed, including artwork, packaging, and delivery method |
| `country` | [`Countries \| undefined`](../../doc/models/countries.md) | Optional | Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.<br><br>The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience. |
| `createdOn` | `string \| undefined` | Optional | Time object was [created](#/rest/models/structures/created-on)(#/rest/models/structures/created-on) |
| `currency` | [`Currencies \| undefined`](../../doc/models/currencies.md) | Optional | [Currency code type](#/rest/models/structures/country) for the object<br>**Default**: `Currencies.USD` |
| `cvv` | `string \| undefined` | Optional | Three- or four-digit [Card Verification Value (CVV)](#/rest/models/structures/cvv) number displayed on the back of a credit or debit card |
| `expires` | `string \| undefined` | Optional | Date and time the object will [expire](#/rest/models/structures/expiration) |
| `status` | [`PrepaidCardStatuses \| undefined`](../../doc/models/prepaid-card-statuses.md) | Optional | Current [status](#/rest/models/structures/prepaid-card-status) of the prepaid card |
| `bankInDetails` | [`BankAccountField[] \| undefined`](../../doc/models/bank-account-field.md) | Optional | - |
| `capabilities` | [`PrepaidCardCapabilities[] \| undefined`](../../doc/models/prepaid-card-capabilities.md) | Optional | - |
| `userToken` | `string \| undefined` | Optional | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `links` | [`HateoasSelfRef[] \| undefined`](../../doc/models/hateoas-self-ref.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `meta` | [`MetadataObject \| undefined`](../../doc/models/metadata-object.md) | Optional | - |

## Example (as JSON)

```json
{
  "cardNumber": "483318******4628",
  "cardPackage": "71290",
  "currency": "USD",
  "userToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
  "token": "token6",
  "cardNetwork": "MASTER_CARD",
  "country": "FO"
}
```

