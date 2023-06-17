
# User Result

## Structure

`UserResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string \| undefined` | Optional | [Token](#/rest/models/structures/token) representing the resource |
| `addressLine1` | `string \| undefined` | Optional | Address Line 1<br>**Constraints**: *Maximum Length*: `255` |
| `businessAddressLine1` | `string \| undefined` | Optional | Business address line 1<br>**Constraints**: *Maximum Length*: `255` |
| `businessAddressLine2` | `string \| undefined` | Optional | Business address line 2<br>**Constraints**: *Maximum Length*: `255` |
| `businessAddressType` | [`Addresses \| undefined`](../../doc/models/addresses.md) | Optional | Classifies the [address](#/rest/models/structures/address) type (*Home*, *Business*, *Billing*, *Shipping*) |
| `businessCity` | `string \| undefined` | Optional | Business city<br>**Constraints**: *Maximum Length*: `50` |
| `businessContactRole` | [`BusinessContactRoles \| undefined`](../../doc/models/business-contact-roles.md) | Optional | Business contact role<br>**Constraints**: *Maximum Length*: `20` |
| `businessCountry` | [`Countries \| undefined`](../../doc/models/countries.md) | Optional | Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.<br><br>The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience. |
| `businessName` | `string \| undefined` | Optional | Business name |
| `businessPostalCode` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `50` |
| `businessRegion` | `string \| undefined` | Optional | Region that the business is based out of |
| `city` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `50` |
| `country` | [`Countries \| undefined`](../../doc/models/countries.md) | Optional | Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.<br><br>The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience. |
| `countryOfBirth` | [`Countries \| undefined`](../../doc/models/countries.md) | Optional | Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.<br><br>The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience. |
| `countryOfNationality` | [`Countries \| undefined`](../../doc/models/countries.md) | Optional | Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.<br><br>The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience. |
| `createdOn` | `string \| undefined` | Optional | Time object was [created](#/rest/models/structures/created-on)(#/rest/models/structures/created-on) |
| `currency` | [`Currencies \| undefined`](../../doc/models/currencies.md) | Optional | [Currency code type](#/rest/models/structures/country) for the object<br>**Default**: `Currencies.USD` |
| `dateOfBirth` | `string \| undefined` | Optional | - |
| `email` | `string \| undefined` | Optional | Contact [email address](#/rest/models/structures/email-address) for the user account for the user account<br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `100`, *Pattern*: `^.+@.+\..+` |
| `employerId` | `string \| undefined` | Optional | Employer id |
| `firstName` | `string \| undefined` | Optional | First name<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `gender` | [`Genders \| undefined`](../../doc/models/genders.md) | Optional | [Gender](#/rest/models/structures/gender) as a user identifies |
| `governmentId` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `20` |
| `governmentIdType` | [`GovernmentIds \| undefined`](../../doc/models/government-ids.md) | Optional | Indicates the type of ID submitted for user verification purposes. |
| `language` | [`Languages \| undefined`](../../doc/models/languages.md) | Optional | The [Language](#/rest/models/structures/language) type in IETF's BCP 47 format |
| `lastName` | `string \| undefined` | Optional | Last name<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `mailingAddressLine1` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `255` |
| `mailingCity` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `50` |
| `mailingCountry` | [`Countries \| undefined`](../../doc/models/countries.md) | Optional | Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.<br><br>The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience. |
| `mailingPostalCode` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3` |
| `mailingRegion` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `50` |
| `mobileNumber` | `string \| undefined` | Optional | - |
| `mobileNumberCountry` | [`Countries \| undefined`](../../doc/models/countries.md) | Optional | Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.<br><br>The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience. |
| `occupationTitle` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `20` |
| `occupationType` | [`Occupations \| undefined`](../../doc/models/occupations.md) | Optional | [Type of occupation](#/rest/models/structures/occupation) for the user |
| `phoneNumber` | `string \| undefined` | Optional | - |
| `phoneNumberCountry` | [`Countries \| undefined`](../../doc/models/countries.md) | Optional | Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.<br><br>The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience. |
| `postalCode` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `50` |
| `programUserId` | `string \| undefined` | Optional | [Program identifier](#/rest/models/structures/program-user-id) for the user<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `100` |
| `region` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `50` |
| `taxResidentStatus` | [`TaxResidentStatuses \| undefined`](../../doc/models/tax-resident-statuses.md) | Optional | Tax [resident status type](#/rest/models/structures/tax-resident-status) |
| `userType` | [`UserTypes \| undefined`](../../doc/models/user-types.md) | Optional | Account holder's profile [type](#/rest/models/structures/user-type) |
| `links` | [`HateoasSelfRef[] \| undefined`](../../doc/models/hateoas-self-ref.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `meta` | [`MetadataObject \| undefined`](../../doc/models/metadata-object.md) | Optional | - |

## Example (as JSON)

```json
{
  "currency": "USD",
  "token": "token6",
  "addressLine1": "addressLine18",
  "businessAddressLine1": "businessAddressLine14",
  "businessAddressLine2": "businessAddressLine22",
  "businessAddressType": "BUSINESS"
}
```

