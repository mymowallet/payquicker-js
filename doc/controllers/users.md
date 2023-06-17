# Users

# Users

---


The *Users* resource represents an individual or a business that can receive payments, such as employees, survey participants, contractors, or distributors.

Users can withdraw funds using any of PayQuicker supported payout options, including bank accounts, debit cards, prepaid cards, or paper checks. All payout options for a user are attached to their resource.

With this resource, you can perform the following calls:

* `POST`: Create a new user
* `GET`: Retrieve a user or list of users
* `PUT`: Update a user

For more information, see [Users](page:working-with-resources/user).

```ts
const usersController = new UsersController(client);
```

## Class Name

`UsersController`

## Methods

* [Create User](../../doc/controllers/users.md#create-user)
* [Get All V2 Enums](../../doc/controllers/users.md#get-all-v2-enums)
* [List Users](../../doc/controllers/users.md#list-users)
* [Retrieve User](../../doc/controllers/users.md#retrieve-user)
* [Update User](../../doc/controllers/users.md#update-user)


# Create User

Create a new [user](page:working-with-resources/user).

```ts
async createUser(
  body?: CreateOrUpdateUser,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateOrUpdateUser \| undefined`](../../doc/models/create-or-update-user.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserResult`](../../doc/models/user-result.md)

## Example Usage

```ts
const contentType = null;
const body: CreateOrUpdateUser = {};

try {
  const { result, ...httpResponse } = await usersController.createUser(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "token": "user-91acd009-36d5-40d9-b8b1-39a3704b577e",
  "addressLine1": "4179 BUFFALO ROAD",
  "businessAddressLine1": "99 Office Park",
  "businessAddressLine2": "Suite 293",
  "businessAddressType": "BUSINESS",
  "businessCity": "Modesto",
  "businessContactRole": "OTHER",
  "businessCountry": "US",
  "businessName": "Api V2 Company LLC",
  "businessPostalCode": "99700",
  "businessRegion": "CA",
  "city": "NORTH CHILI",
  "country": "US",
  "countryOfBirth": "US",
  "countryOfNationality": "US",
  "createdOn": "2022-04-08T19:44:16Z",
  "currency": "USD",
  "dateOfBirth": "1991-04-13T00:00:00Z",
  "email": "PQTESTEMAIL+Emanuel_Carroll@GMAIL.COM",
  "employerId": "1",
  "firstName": "Timothy",
  "gender": "MALE",
  "governmentId": "111111111",
  "governmentIdType": "SSN",
  "language": "en-US",
  "lastName": "Mueller",
  "mailingAddressLine1": "128 Maple Lane",
  "mailingCity": "Rochester",
  "mailingCountry": "US",
  "mailingPostalCode": "14625",
  "mailingRegion": "NY",
  "mobileNumber": "+15859876543",
  "mobileNumberCountry": "US",
  "occupationTitle": "TESTER",
  "occupationType": "GOVERNMENT",
  "phoneNumber": "+15859876543",
  "phoneNumberCountry": "US",
  "postalCode": "14514",
  "programUserId": "Kaylee.Howe8",
  "region": "NY",
  "taxResidentStatus": "YES",
  "userType": "INDIVIDUAL",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-91acd009-36d5-40d9-b8b1-39a3704b577e",
      "params": {
        "rel": "self"
      }
    }
  ],
  "meta": {
    "timezone": "GMT"
  }
}
```


# Get All V2 Enums

This is an internal call that gets all V2 Enums.  The Enums are used for test cases.  The Internal option should be selected for this.

```ts
async getAllV2Enums(
  requestOptions?: RequestOptions
): Promise<ApiResponse<SdkV2TestingGetEnumsResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SdkV2TestingGetEnumsResult`](../../doc/models/sdk-v2-testing-get-enums-result.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await usersController.getAllV2Enums();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "adressTypes": [
    "AddressType_UNDEFINED",
    "AddressType_Residential",
    "AddressType_Mailing",
    "AddressType_Business"
  ],
  "agreementTypes": [
    "AgreementType_UNDEFINED",
    "AgreementType_Privacy_Policy",
    "AgreementType_ESign_PayQuicker",
    "AgreementType_Terms_of_Use",
    "AgreementType_CardholderAgreementConsumerACH_Enabled10KMBUSD",
    "AgreementType_CardholderAgreementConsumerStandard10KMBUSD",
    "AgreementType_CardholderAgreementConsumerACH_Enabled150KMBUSD",
    "AgreementType_CardholderAgreementConsumerStandard150KMBUSD",
    "AgreementType_CardholderAgreementCommercial15MMetaUSD",
    "AgreementType_CardholderAgreementConsumer10KCBUSD",
    "AgreementType_CardholderAgreementConsumer50KCBUSD",
    "AgreementType_CardholderAgreementCommercial15MCBUSD",
    "AgreementType_CardholderAgreementConsumer10KCBHKD",
    "AgreementType_CardholderAgreementConsumer50KCBHKD",
    "AgreementType_CardholderAgreementCommercial15MCBHKD",
    "AgreementType_CardholderAgreementConsumer10KCBCAD",
    "AgreementType_CardholderAgreementConsumer50KCBCAD",
    "AgreementType_CardholderAgreementCommercial15MCBCAD",
    "AgreementType_CardholderAgreementConsumer10KCBAUD",
    "AgreementType_CardholderAgreementConsumer50KCBAUD",
    "AgreementType_CardholderAgreementCommercial15MCBAUD",
    "AgreementType_CardholderAgreementConsumer10KCBGBP",
    "AgreementType_CardholderAgreementConsumer50KCBGBP",
    "AgreementType_CardholderAgreementCommercial15MCBGBP",
    "AgreementType_CardholderAgreementConsumer10KCBEUR",
    "AgreementType_CardholderAgreementConsumer50KCBEUR",
    "AgreementType_CardholderAgreementCommercial15MCBEUR",
    "AgreementType_CardholderAgreementConsumer10KCBMXN",
    "AgreementType_CardholderAgreementConsumer50KCBMXN",
    "AgreementType_CardholderAgreementCommercial15MCBMXN",
    "AgreementType_CardholderAgreementRewards",
    "AgreementType_CardholderAgreementConsumer10KCBNZD",
    "AgreementType_CardholderAgreementConsumer50KCBNZD",
    "AgreementType_CardholderAgreementCommercial15MCBNZD",
    "AgreementType_CardholderAgreementConsumerXXFBAUD",
    "AgreementType_CardholderAgreementConsumerXXFBCAD",
    "AgreementType_CardholderAgreementConsumerXXFBEUR",
    "AgreementType_CardholderAgreementConsumerXXFBGBP",
    "AgreementType_CardholderAgreementConsumerXXFBHKD",
    "AgreementType_CardholderAgreementConsumerXXFBMXN",
    "AgreementType_CardholderAgreementConsumerXXFBNZD",
    "AgreementType_CardholderAgreementConsumerXXFBUSD",
    "AgreementType_Privacy_Policy_Addendum",
    "AgreementType_CardholderAgreementConsumer10KPeoplesCAD",
    "AgreementType_Privacy_Policy_Peoples",
    "AgreementType_CardHolderAgreementConsentPeoples",
    "AgreementType_ESign_Account",
    "AgreementType_TermsOfUsePeoples",
    "AgreementType_Privacy_Policy_Addendum_Meta",
    "AgreementType_Privacy_Policy_Fee_Agreement",
    "AgreementType_Card_Limits_Agreement",
    "AgreementType_CardholderAgreementConsumerXXFBKRW",
    "AgreementType_CardholderAgreementConsumerXXFBCNY",
    "AgreementType_CardholderAgreementConsumerXXFBCOP",
    "AgreementType_CardholderAgreementConsumerXXFBSGD",
    "AgreementType_CardholderAgreementConsumerBINStandard20KMCBUSD"
  ],
  "bankAccountFieldTypes": [
    "AccountNumber",
    "AccountNumberConfirm",
    "BranchCode",
    "RoutingNumber",
    "Currency"
  ],
  "bankAccountStatusTypes": [
    "UNKNOWN",
    "VERIFIED",
    "DELETED",
    "PENDING_VERIFICATION",
    "ACTIVE"
  ],
  "bankAccountTypes": [
    "BankAccountType_UNDEFINED",
    "BankAccountType_Savings",
    "BankAccountType_Checking",
    "BankAccountType_MoneyMarket"
  ],
  "bankTypes": [
    "BankType_UNDEFINED",
    "BankType_MetaBank",
    "BankType_ChoiceLtd",
    "BankType_PayQuicker_Rewards",
    "BankType_Facade",
    "BankType_Facade",
    "BankType_PPS",
    "BankType_Peoples",
    "BankType_TOKA",
    "BankType_MCB",
    "BankType_ARS"
  ],
  "businessContactRoleTypes": [
    "OWNER",
    "MANAGER",
    "PARTNER",
    "OTHER"
  ],
  "cardNetworkTypes": [
    "CardNetworkType_Visa",
    "CardNetworkTypes_MasterCard"
  ],
  "cardProcessorTypes": [
    "CardProcessorType_UNDEFINED",
    "CardProcessorType_FIS",
    "CardProcessorType_FUTURE",
    "CardProcessorType_Rewards",
    "CardProcessorType_Flex",
    "CardProcessorType_PPS",
    "CardProcessorType_TOKA"
  ],
  "countryTypes": [
    "AF",
    "AL",
    "AQ",
    "DZ",
    "AS",
    "AD",
    "AO",
    "AG",
    "AZ",
    "AR",
    "AU",
    "AT",
    "BS",
    "BH",
    "BD",
    "AM",
    "BB",
    "BE",
    "BM",
    "BT",
    "BO",
    "BA",
    "BW",
    "BV",
    "BR",
    "BZ",
    "IO",
    "SB",
    "VG",
    "BN",
    "BG",
    "MM",
    "BI",
    "BY",
    "KH",
    "CM",
    "CA",
    "CV",
    "KY",
    "CF",
    "LK",
    "TD",
    "CL",
    "CN",
    "TW",
    "CX",
    "CC",
    "CO",
    "KM",
    "YT",
    "CG",
    "CD",
    "CK",
    "CR",
    "HR",
    "CU",
    "CY",
    "CZ",
    "BJ",
    "DK",
    "DM",
    "DO",
    "EC",
    "SV",
    "CI",
    "GQ",
    "ET",
    "ER",
    "EE",
    "FO",
    "FK",
    "GS",
    "FJ",
    "FI",
    "AX",
    "FR",
    "GF",
    "PF",
    "TF",
    "DJ",
    "GA",
    "GE",
    "GM",
    "PS",
    "DE",
    "GH",
    "GI",
    "KI",
    "GR",
    "GL",
    "GD",
    "GP",
    "GU",
    "GT",
    "GN",
    "GY",
    "HT",
    "HM",
    "VA",
    "HN",
    "HK",
    "HU",
    "IS",
    "IN",
    "ID",
    "IR",
    "IQ",
    "IE",
    "IL",
    "IT",
    "JM",
    "JP",
    "KZ",
    "JO",
    "KE",
    "KP",
    "KR",
    "KW",
    "KG",
    "LA",
    "LB",
    "LS",
    "LV",
    "LR",
    "LY",
    "LI",
    "LT",
    "LU",
    "MO",
    "MG",
    "MW",
    "MY",
    "MV",
    "ML",
    "MT",
    "MQ",
    "MR",
    "MU",
    "MX",
    "MC",
    "MN",
    "MD",
    "ME",
    "MS",
    "MA",
    "MZ",
    "OM",
    "NA",
    "NR",
    "NP",
    "NL",
    "AN",
    "CW",
    "AW",
    "SX",
    "BQ",
    "NC",
    "VU",
    "NZ",
    "NI",
    "NE",
    "NG",
    "NU",
    "NF",
    "NO",
    "MP",
    "UM",
    "FM",
    "MH",
    "PW",
    "PK",
    "PA",
    "PG",
    "PY",
    "PE",
    "PH",
    "PN",
    "PL",
    "PT",
    "GW",
    "TL",
    "PR",
    "QA",
    "RE",
    "RO",
    "RU",
    "RW",
    "BL",
    "SH",
    "KN",
    "AI",
    "LC",
    "MF",
    "PM",
    "VC",
    "SM",
    "ST",
    "SA",
    "SN",
    "RS",
    "SC",
    "SL",
    "SG",
    "SK",
    "VN",
    "SI",
    "SO",
    "ZA",
    "ZW",
    "ES",
    "SS",
    "EH",
    "SD",
    "SR",
    "SJ",
    "SZ",
    "SE",
    "CH",
    "SY",
    "TJ",
    "TH",
    "TG",
    "TK",
    "TO",
    "TT",
    "AE",
    "TN",
    "TR",
    "TM",
    "TC",
    "TV",
    "UG",
    "UA",
    "MK",
    "EG",
    "GB",
    "GG",
    "JE",
    "IM",
    "TZ",
    "US",
    "VI",
    "BF",
    "UY",
    "UZ",
    "VE",
    "WF",
    "WS",
    "YE",
    "ZM"
  ],
  "currencyTypes": [
    "UNDEFINED",
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTN",
    "BWP",
    "BYR",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CUC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KMF",
    "KPW",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRO",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLL",
    "SOS",
    "SPL",
    "SRD",
    "STD",
    "SVC",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TVD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "UYU",
    "UZS",
    "VEF",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XCD",
    "XDR",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMW",
    "ZWD",
    "CNH",
    "CXX"
  ],
  "documentTypes": [
    "UNDEFINED",
    "ARMED_FORCES_ID_CARD",
    "BANK_OR_CREDIT_CARD_STATEMENT",
    "BANK_REFERENCE_LETTER",
    "BIRTH_CERTIFICATE",
    "DEED_POLL",
    "DEED_POLL_NAME_CHANGE",
    "DRIVERS_LICENSE",
    "DRIVERS_LICENSE_BACK",
    "DRIVERS_LICENSE_NAME_CHANGE",
    "FIREARMS_LICENSE",
    "HEALTH_ID_CARD",
    "HIGH_QUALITY_HEADSHOT",
    "MARRIAGE_LICENSE",
    "MARRIAGE_LICENSE_NAME_CHANGE",
    "MATRICULA_CONSULAR_ID_CARD",
    "NATIONAL_IDENTITY_CARD",
    "NATIONAL_IDENTITY_CARD_FRONT",
    "NATIONAL_IDENTITY_CARD_BACK",
    "NATIONAL_INSURANCE_CARD",
    "OFFICIAL_NAME_CHANGE_DOCUMENT",
    "OTHER_GOVERNMENT_ISSUED_ID",
    "PASSPORT",
    "PAY_STUB",
    "PROOF_OF_AGE_CARD",
    "PROVISIONAL_DRIVERS_LICENSE",
    "PUBLIC_SERVICE_CARD_FRONT",
    "PUBLIC_SERVICE_CARD_BACK",
    "RESIDENT_CARD",
    "RESIDENT_IMMIGRATION_CARD",
    "SOCIAL_SECURITY_CARD",
    "TAX_IDENTIFICATION_CARD_OR_LETTER",
    "TAX_STATEMENT",
    "UTILITY_BILL",
    "VOTERS_CARD",
    "ARMED_FORCES_ID_CARD_BACK",
    "TAX_DOCUMENT",
    "HEALTH_ID_CARD_BACK",
    "PROOF_OF_AGE_CARD_BACK",
    "INDEPENDENT_PERSONAL_REFERENCE_DOCUMENT",
    "VIDEO_CALL_FILE",
    "HOME_OR_AUTO_INSURANCE_CERTIFICATE_OR_SCHEDULE",
    "DIVORCE_DECREE_NAME_CHANGE",
    "CIVIL_PARTNERSHIP_REGISTRATION_NAME_CHANGE",
    "RENT_AGREEMENT",
    "VEHICLE_REGISTRATION",
    "BENEFITS_CONFIRMATION_LETTER",
    "RESIDENT_CARD_BACK",
    "BANK_OR_CREDIT_CARD_STATEMENT2",
    "LOAN_ACCOUNT_STATEMENT",
    "PROCESSED_CHECK",
    "RESIDENTIAL_DIRECTORY_LISTING",
    "GENERIC_DOCUMENT",
    "GOVERNMENT_ISSUED_PHOTOID",
    "GOVERNMENT_ISSUED_PHOTO_ID_BACK",
    "SOCIAL_INSURANCE_NUMBER_CARD",
    "SOCIAL_INSURANCE_NUMBER_LETTER",
    "OTHER_SOCIAL_INSURANCE_NUMBER_DOCUMENT",
    "PLASTIC_CARD_CUSTOM_IMAGE"
  ],
  "eventRequirementCategoryTypes": [
    "CATEGORY_UNDEFINED",
    "KYC",
    "TAX",
    "EXTERNAL_REFERENCE_KYC",
    "VIDEO_CALL_KYC",
    "GEO_IP_VERIFICATION",
    "ACKNOWLEDGEMENT"
  ],
  "eventRequirementsTypes": [
    "REQUIRED",
    "OPTIONAL"
  ],
  "eventStatusesTypes": [
    "UNDEFINED",
    "PENDING",
    "IN_PROGRESS",
    "COMPLETED",
    "CANCELLED",
    "SUSPENDED"
  ],
  "eventTypes": [
    "EventType_UNDEFINED",
    "EventType_Required",
    "EventType_OneTime",
    "EventType_OptionalRecurrent"
  ],
  "feeResponsiblePariesTypes": [
    "NotOverridden",
    "Company",
    "PayQuicker"
  ],
  "feeTypes": [
    "FeeType_UNDEFINED",
    "FeeType_Account",
    "FeeType_Transaction"
  ],
  "feeSourceTypes": [
    "GetDescriptionFromStringsDatabase",
    "GetDescriptionFromDaybreakDatabaseComment"
  ],
  "feeValueTypes": [
    "FeeValueType_UNDEFINED",
    "FeeValueType_ChargedAsPercentage",
    "FeeValueType_ChargedAsFixedAmount"
  ],
  "genderTypes": [
    "GenderType_UNDEFINED",
    "GenderType_Male",
    "GenderType_Female",
    "GenderType_NOT_SPECIFIED",
    "GenderType_Gender_Neutral"
  ],
  "governmentIdTypes": [
    "PASSPORT",
    "NATIONAL_ID_CARD",
    "CURP",
    "SSN"
  ],
  "identityVerificationProviderTypes": [
    "IdentityVerificationProviderType_UNDEFINED",
    "IdentityVerificationProviderType_FISIDology",
    "IdentityVerificationProviderType_OfacAnalyzer",
    "IdentityVerificationProviderType_LexisNexisIvi",
    "IdentityVerificationProviderType_W2",
    "IdentityVerificationProviderType_Equifax",
    "IdentityVerificationProviderType_HooYu"
  ],
  "identityVerificationResultTypes": [
    "IdentityVerificationResultType_UNDEFINED",
    "IdentityVerificationResultType_Pass",
    "IdentityVerificationResultType_Fail",
    "IdentityVerificationResultType_ServiceOffline",
    "IdentityVerificationResultType_Processing",
    "IdentityVerificationResultType_NotYetExecuted",
    "IdentityVerificationResultType_Expired"
  ],
  "languageTypes": [
    "Languages_UNDEFINED",
    "Languages_EN_US",
    "Languages_CS_CZ",
    "Languages_DE_DE",
    "Languages_ES_ES",
    "Languages_FI_FI",
    "Languages_FR_FR",
    "Languages_IT_IT",
    "Languages_JA_JP",
    "Languages_KO_KR",
    "Languages_NL_NL",
    "Languages_PL_PL",
    "Languages_PT_BR",
    "Languages_RU_RU",
    "Languages_SV_SE",
    "Languages_ZH_CHS",
    "Languages_ZH_CHT",
    "Languages_FR_CA",
    "Languages_PT_PT",
    "Languages_ES_MX",
    "Languages_EN_GB"
  ],
  "occupationTypes": [
    "Independent_Business_Owner",
    "Science",
    "Technology",
    "Engineering",
    "Math",
    "Healthcare",
    "Social_Services",
    "Media",
    "Finance",
    "Government",
    "Manufacturing",
    "Law",
    "Hospitality_And_Tourism",
    "Sales",
    "Arts",
    "Design",
    "Office_And_Admin_Support",
    "Education"
  ],
  "prepaidCardReplacementTypes": [
    "LOST",
    "STOLEN",
    "DAMAGED",
    "COMPROMISED",
    "EXPIRED"
  ],
  "prepaidCardStatusTypes": [
    "CardStatusType_UNDEFINED",
    "CardStatusType_PendingActivation",
    "CardStatusType_Active",
    "CardStatusType_Closed",
    "CardStatusType_Suspended",
    "CardStatusType_ClosedLost",
    "CardStatusType_ClosedReplaced",
    "CardStatusType_ClosedExpired",
    "CardStatusType_ClosedRevoked",
    "CardStatusType_ClosedByCustomer",
    "CardStatusType_ClosedFraud",
    "CardStatusType_SuspendedPotentialFraud",
    "CardStatusType_SuspendedDeceased",
    "CardStatusType_ActiveWarning",
    "CardStatusType_ActiveDormant",
    "CardStatusType_ActiveSpecial",
    "CardStatusType_ClosedMisuse",
    "CardStatusType_ClosedVoid",
    "CardStatusType_ClosedNonRenewal",
    "CardStatusType_ClosedDestroyed",
    "CardStatusType_ActiveUnsuspended",
    "CardStatusType_ClosedLastStatement",
    "CardStatusType_ClosedChargeOff",
    "CardStatusType_ClosedMinimumBalance",
    "CardStatusType_PendingOrder",
    "CardStatusType_ClosedStolen",
    "CardStatusType_PendingRelease"
  ],
  "programTypes": [
    "Undefined",
    "Commercial",
    "Consumer",
    "CommercialAndConsumer"
  ],
  "signTypes": [
    "SignType_UNDEFINED",
    "SignType_Credit",
    "SignType_Debit"
  ],
  "taxResidentStatusTypes": [
    "TaxResidentOutsideCanadaStatusTypes_UNDEFINED",
    "TaxResidentOutsideCanadaStatusTypes_Yes",
    "TaxResidentOutsideCanadaStatusTypes_No"
  ],
  "tokenPurposeTypes": [
    "UserTokenPurposeType_UNDEFINED",
    "UserTokenPurposeType_CardReveal",
    "UserTokenPurposeType_GetOrSetCardPin",
    "UserTokenPurposeType_SensitiveData",
    "UserTokenPurposeType_GetPrepaidCardData",
    "UserTokenPurposeType_CardRevealSensitiveDataOverlay"
  ],
  "uploadFieldTypes": [
    "EXPIRATION_DATE",
    "TYPE",
    "STATUS"
  ],
  "userTypes": [
    "INDIVIDUAL",
    "BUSINESS"
  ],
  "validatorTypes": [
    "ValidatorType_UNDEFINED",
    "ValidatorType_Required",
    "ValidatorType_Range",
    "ValidatorType_Length",
    "ValidatorType_Regex"
  ],
  "meta": {
    "timezone": "GMT"
  }
}
```


# List Users

Retrieve a list of [users](page:working-with-resources/user) that supports filtering, sorting, and pagination through existing mechanisms.

```ts
async listUsers(
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserListResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number` | Query, Required | Page number of specific page to return<br>**Constraints**: `>= 1` |
| `pageSize` | `number` | Query, Required | Number of items to be displayed per page<br>**Constraints**: `>= 1`, `<= 50` |
| `filter` | `string \| undefined` | Query, Optional | Filter request results by specific criteria. |
| `sort` | `string \| undefined` | Query, Optional | Sort request results by specific attribute. |
| `language` | [`Languages \| undefined`](../../doc/models/languages.md) | Query, Optional | Filter results by language type. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserListResult`](../../doc/models/user-list-result.md)

## Example Usage

```ts
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await usersController.listUsers(page, pageSize, None, None, language);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "payload": [
    {
      "token": "user-19c60cc6-71c3-4db0-9092-4d422410c87e",
      "addressLine1": "400 Linden Oaks",
      "addressLine2": "Rochester, NY 14625-2818",
      "city": "Rochester",
      "country": "US",
      "countryOfBirth": "US",
      "countryOfNationality": "US",
      "createdOn": "2021-06-07T21:23:41Z",
      "dateOfBirth": "1991-04-13T00:00:00Z",
      "email": "PQTESTEMAIL+Caden_Aufderhar@GMAIL.COM",
      "firstName": "Susie",
      "gender": "MALE",
      "language": "en-US",
      "lastName": "Fadel",
      "mobileNumber": "+1 585-987-6543",
      "mobileNumberCountry": "US",
      "phoneNumber": "+1 585-987-6543",
      "phoneNumberCountry": "US",
      "postalCode": "14625",
      "premiseNumber": "400",
      "programUserId": "Haley_Ryan",
      "region": "NY",
      "status": "ACTIVE",
      "userType": "INDIVIDUAL",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-19c60cc6-71c3-4db0-9092-4d422410c87e",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "user-2d926d31-a609-40e1-b28a-a32e0aeb6a79",
      "addressLine1": "400 Linden Oaks",
      "addressLine2": "Rochester, NY 14625-2818",
      "city": "Rochester",
      "country": "US",
      "countryOfBirth": "US",
      "countryOfNationality": "US",
      "createdOn": "2021-06-08T16:04:54Z",
      "dateOfBirth": "1991-04-13T00:00:00Z",
      "email": "PQTESTEMAIL+Milton_Cronin9@GMAIL.COM",
      "firstName": "Alycia",
      "gender": "MALE",
      "language": "en-US",
      "lastName": "McLaughlin",
      "mobileNumber": "+1 585-987-6543",
      "mobileNumberCountry": "US",
      "phoneNumber": "+1 585-987-6543",
      "phoneNumberCountry": "US",
      "postalCode": "14625",
      "premiseNumber": "400",
      "programUserId": "Elliot.Sawayn",
      "region": "NY",
      "status": "ACTIVE",
      "userType": "INDIVIDUAL",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2d926d31-a609-40e1-b28a-a32e0aeb6a79",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "user-80df50a2-3cc8-462d-87c8-cf3e266994c8",
      "addressLine1": "400 Linden Oaks",
      "addressLine2": "Rochester, NY 14625-2818",
      "city": "Rochester",
      "country": "US",
      "countryOfBirth": "US",
      "countryOfNationality": "US",
      "createdOn": "2021-06-08T16:13:53Z",
      "dateOfBirth": "1991-04-13T00:00:00Z",
      "email": "PQTESTEMAIL+Meta50@GMAIL.COM",
      "firstName": "Trisha",
      "gender": "MALE",
      "governmentId": "000000000",
      "language": "en-US",
      "lastName": "Leffler",
      "mobileNumber": "+1 585-987-6543",
      "mobileNumberCountry": "US",
      "phoneNumber": "+1 585-987-6543",
      "phoneNumberCountry": "US",
      "postalCode": "14625",
      "premiseNumber": "400",
      "programUserId": "Nona49",
      "region": "NY",
      "status": "ACTIVE",
      "userType": "INDIVIDUAL",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-80df50a2-3cc8-462d-87c8-cf3e266994c8",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "user-b26db8d1-ebb1-4367-aad4-3ffb6f0f17cf",
      "addressLine1": "400 Linden Oaks",
      "addressLine2": "Rochester, NY 14625-2818",
      "city": "Rochester",
      "country": "US",
      "countryOfBirth": "US",
      "countryOfNationality": "US",
      "createdOn": "2021-06-08T16:21:54Z",
      "dateOfBirth": "1991-04-13T00:00:00Z",
      "email": "PQTESTEMAIL+Frankie_Stoltenberg@GMAIL.COM",
      "firstName": "Kevon",
      "gender": "MALE",
      "governmentId": "000000000",
      "language": "en-US",
      "lastName": "Waelchi",
      "mobileNumber": "+1 585-987-6543",
      "mobileNumberCountry": "US",
      "phoneNumber": "+1 585-987-6543",
      "phoneNumberCountry": "US",
      "postalCode": "14625",
      "premiseNumber": "400",
      "programUserId": "Lydia_Jacobi13",
      "region": "NY",
      "status": "ACTIVE",
      "userType": "INDIVIDUAL",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-b26db8d1-ebb1-4367-aad4-3ffb6f0f17cf",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "user-61b12c1f-7cff-42e3-9c56-09ba2b08d2ed",
      "addressLine1": "4179 BUFFALO ROAD",
      "businessAddressLine1": "400 Linden Oaks",
      "businessAddressType": "BUSINESS",
      "businessCity": "Rochester",
      "businessCountry": "US",
      "businessName": "Api V2 Company LLC",
      "businessOperatingName": "Api V2 Company LLC",
      "businessPostalCode": "14625",
      "businessRegion": "NY",
      "businessRegistrationCountry": "US",
      "businessRegistrationRegion": "NY",
      "city": "NORTH CHILI",
      "country": "US",
      "countryOfBirth": "US",
      "countryOfNationality": "US",
      "createdOn": "2021-06-08T16:36:05Z",
      "dateOfBirth": "1991-04-13T00:00:00Z",
      "email": "PQTESTEMAIL+Helena.Skiles24@GMAIL.COM",
      "firstName": "Westley",
      "gender": "MALE",
      "governmentId": "000000000",
      "language": "en-US",
      "lastName": "Westley",
      "mobileNumber": "+1 585-987-6543",
      "mobileNumberCountry": "US",
      "phoneNumber": "+1 585-987-6543",
      "phoneNumberCountry": "US",
      "postalCode": "14514",
      "premiseNumber": "400",
      "programUserId": "Nicholas94",
      "region": "NY",
      "status": "ACTIVE",
      "userType": "BUSINESS",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-61b12c1f-7cff-42e3-9c56-09ba2b08d2ed",
          "params": {
            "rel": "self"
          }
        }
      ]
    }
  ],
  "meta": {
    "pageNo": "1",
    "pageSize": "5",
    "pageCount": "124",
    "recordCount": "618",
    "timezone": "GMT"
  },
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users?pageSize=5&page=1",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# Retrieve User

Retrieve a single [user](page:working-with-resources/user) record by user token.

```ts
async retrieveUser(
  userToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserResult`](../../doc/models/user-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
try {
  const { result, ...httpResponse } = await usersController.retrieveUser(userToken);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "token": "user-91acd009-36d5-40d9-b8b1-39a3704b577e",
  "addressLine1": "4179 BUFFALO ROAD",
  "businessAddressLine1": "99 Office Park",
  "businessAddressLine2": "Suite 293",
  "businessAddressType": "BUSINESS",
  "businessCity": "Modesto",
  "businessContactRole": "OTHER",
  "businessCountry": "US",
  "businessName": "Api V2 Company LLC",
  "businessPostalCode": "99700",
  "businessRegion": "CA",
  "city": "NORTH CHILI",
  "country": "US",
  "countryOfBirth": "US",
  "countryOfNationality": "US",
  "createdOn": "2022-04-08T19:44:16Z",
  "currency": "USD",
  "dateOfBirth": "1991-04-13T00:00:00Z",
  "email": "PQTESTEMAIL+Emanuel_Carroll@GMAIL.COM",
  "employerId": "1",
  "firstName": "Timothy",
  "gender": "MALE",
  "governmentId": "111111111",
  "governmentIdType": "SSN",
  "language": "en-US",
  "lastName": "Mueller",
  "mailingAddressLine1": "128 Maple Lane",
  "mailingCity": "Rochester",
  "mailingCountry": "US",
  "mailingPostalCode": "14625",
  "mailingRegion": "NY",
  "mobileNumber": "+15859876543",
  "mobileNumberCountry": "US",
  "occupationTitle": "TESTER",
  "occupationType": "GOVERNMENT",
  "phoneNumber": "+15859876543",
  "phoneNumberCountry": "US",
  "postalCode": "14514",
  "programUserId": "Kaylee.Howe8",
  "region": "NY",
  "taxResidentStatus": "YES",
  "userType": "INDIVIDUAL",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-91acd009-36d5-40d9-b8b1-39a3704b577e",
      "params": {
        "rel": "self"
      }
    }
  ],
  "meta": {
    "timezone": "GMT"
  }
}
```


# Update User

Update a [user](page:working-with-resources/user) object (change [email](#/rest/models/structures/email-address)], [address](#/rest/models/structures/address) change, etc.) using a user token.'

```ts
async updateUser(
  userToken: string,
  body?: CreateOrUpdateUser,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `body` | [`CreateOrUpdateUser \| undefined`](../../doc/models/create-or-update-user.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserResult`](../../doc/models/user-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const contentType = null;
const body: CreateOrUpdateUser = {};

try {
  const { result, ...httpResponse } = await usersController.updateUser(userToken, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "token": "user-91acd009-36d5-40d9-b8b1-39a3704b577e",
  "addressLine1": "4179 BUFFALO ROAD",
  "businessAddressLine1": "99 Office Park",
  "businessAddressLine2": "Suite 293",
  "businessAddressType": "BUSINESS",
  "businessCity": "Modesto",
  "businessContactRole": "OTHER",
  "businessCountry": "US",
  "businessName": "Api V2 Company LLC",
  "businessPostalCode": "99700",
  "businessRegion": "CA",
  "city": "NORTH CHILI",
  "country": "US",
  "countryOfBirth": "US",
  "countryOfNationality": "US",
  "createdOn": "2022-04-08T19:44:16Z",
  "currency": "USD",
  "dateOfBirth": "1991-04-13T00:00:00Z",
  "email": "PQTESTEMAIL+Emanuel_Carroll@GMAIL.COM",
  "employerId": "1",
  "firstName": "Timothy",
  "gender": "MALE",
  "governmentId": "111111111",
  "governmentIdType": "SSN",
  "language": "en-US",
  "lastName": "Mueller",
  "mailingAddressLine1": "128 Maple Lane",
  "mailingCity": "Rochester",
  "mailingCountry": "US",
  "mailingPostalCode": "14625",
  "mailingRegion": "NY",
  "mobileNumber": "+15859876543",
  "mobileNumberCountry": "US",
  "occupationTitle": "TESTER",
  "occupationType": "GOVERNMENT",
  "phoneNumber": "+15859876543",
  "phoneNumberCountry": "US",
  "postalCode": "14514",
  "programUserId": "Kaylee.Howe8",
  "region": "NY",
  "taxResidentStatus": "YES",
  "userType": "INDIVIDUAL",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-91acd009-36d5-40d9-b8b1-39a3704b577e",
      "params": {
        "rel": "self"
      }
    }
  ],
  "meta": {
    "timezone": "GMT"
  }
}
```

