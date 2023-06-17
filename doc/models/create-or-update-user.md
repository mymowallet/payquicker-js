
# Create or Update User

## Structure

`CreateOrUpdateUser`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | [`Currencies \| undefined`](../../doc/models/currencies.md) | Optional | [Currency code type](#/rest/models/structures/country) for the object<br>**Default**: `Currencies.USD` |
| `programUserId` | `string \| undefined` | Optional | [Program identifier](#/rest/models/structures/program-user-id) for the user<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `100` |
| `email` | `string \| undefined` | Optional | Contact [email address](#/rest/models/structures/email-address) for the user account for the user account<br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `100`, *Pattern*: `^.+@.+\..+` |
| `firstName` | `string \| undefined` | Optional | First name<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `lastName` | `string \| undefined` | Optional | Last name<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `dateOfBirth` | `string \| undefined` | Optional | - |
| `taxResidentStatus` | [`TaxResidentStatuses \| undefined`](../../doc/models/tax-resident-statuses.md) | Optional | Tax [resident status type](#/rest/models/structures/tax-resident-status) |
| `phoneNumber` | `string \| undefined` | Optional | - |
| `mobileNumber` | `string \| undefined` | Optional | - |
| `phoneNumberCountry` | [`Countries \| undefined`](../../doc/models/countries.md) | Optional | Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.<br><br>The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience. |
| `mobileNumberCountry` | [`Countries \| undefined`](../../doc/models/countries.md) | Optional | Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.<br><br>The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience. |
| `addressLine1` | `string \| undefined` | Optional | Address Line 1<br>**Constraints**: *Maximum Length*: `255` |
| `city` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `50` |
| `region` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `50` |
| `country` | [`Countries \| undefined`](../../doc/models/countries.md) | Optional | Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.<br><br>The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience. |
| `postalCode` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `50` |
| `gender` | [`Genders \| undefined`](../../doc/models/genders.md) | Optional | [Gender](#/rest/models/structures/gender) as a user identifies |
| `userType` | [`UserTypes \| undefined`](../../doc/models/user-types.md) | Optional | Account holder's profile [type](#/rest/models/structures/user-type) |
| `language` | [`Languages \| undefined`](../../doc/models/languages.md) | Optional | The [Language](#/rest/models/structures/language) type in IETF's BCP 47 format |
| `countryOfBirth` | [`Countries \| undefined`](../../doc/models/countries.md) | Optional | Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.<br><br>The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience. |
| `countryOfNationality` | [`Countries \| undefined`](../../doc/models/countries.md) | Optional | Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.<br><br>The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience. |
| `businessContactRole` | [`BusinessContactRoles \| undefined`](../../doc/models/business-contact-roles.md) | Optional | Business contact role<br>**Constraints**: *Maximum Length*: `20` |
| `governmentIdType` | [`GovernmentIds \| undefined`](../../doc/models/government-ids.md) | Optional | Indicates the type of ID submitted for user verification purposes. |
| `governmentId` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `20` |
| `occupationTitle` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `20` |
| `addressLine2` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `255` |
| `occupationType` | [`Occupations \| undefined`](../../doc/models/occupations.md) | Optional | [Type of occupation](#/rest/models/structures/occupation) for the user |
| `mailingAddressLine1` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `255` |
| `mailingCountry` | [`Countries \| undefined`](../../doc/models/countries.md) | Optional | Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.<br><br>The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience. |
| `mailingCity` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `50` |
| `mailingRegion` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `50` |
| `mailingPostalCode` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3` |
| `businessAddressLine1` | `string \| undefined` | Optional | Business address line 1<br>**Constraints**: *Maximum Length*: `255` |
| `businessAddressLine2` | `string \| undefined` | Optional | Business address line 2<br>**Constraints**: *Maximum Length*: `255` |
| `businessCountry` | [`Countries \| undefined`](../../doc/models/countries.md) | Optional | Throughout the PayQuicker API, the usage of the 2-letter alpha code is used in place of the country name, e.g., for bank country or residential country.<br><br>The 2-letter codes adhere to the ISO 3166-1 spec and are listed here for convenience. |
| `businessCity` | `string \| undefined` | Optional | Business city<br>**Constraints**: *Maximum Length*: `50` |
| `businessRegion` | `string \| undefined` | Optional | Region that the business is based out of |
| `businessPostalCode` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `50` |
| `premiseNumber` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `50` |
| `programToken` | `string \| undefined` | Optional | Auto-generated unique identifier representing a program, prefixed with prog-<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^prog-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `primaryUserToken` | `string \| undefined` | Optional | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |

## Example (as JSON)

```json
{
  "currency": "USD",
  "programToken": "prog-6a272eca-9487-d83a-c9e4-8df8c9a7f6eb",
  "primaryUserToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
  "programUserId": "programUserId4",
  "email": "email6",
  "firstName": "firstName4",
  "lastName": "lastName4"
}
```

