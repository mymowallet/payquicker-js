# Documents

# Documents

---


The *Documents* resource allows you to list, create, retrieve, and replace documents associated with a user's account.

A Document represents a single file attached to a given resource. Often these are documents attached to payment orders to provide further context or image files for incoming checks.

With this resource, you can perform the following requests:

* `POST`: Upload a new document
* `GET`: Retrieve a document or list of documents
* `PUT`: Update a document

For more information, see [Documents](page:working-with-resources/documents).

```ts
const documentsController = new DocumentsController(client);
```

## Class Name

`DocumentsController`

## Methods

* [List Documents](../../doc/controllers/documents.md#list-documents)
* [List User Document Requirements](../../doc/controllers/documents.md#list-user-document-requirements)
* [Replace Document](../../doc/controllers/documents.md#replace-document)
* [Retrieve Document](../../doc/controllers/documents.md#retrieve-document)
* [Upload Document](../../doc/controllers/documents.md#upload-document)


# List Documents

Retrieve a list of user [documents](page:working-with-resources/documents) that supports filtering, sorting, and pagination through existing mechanisms.

```ts
async listDocuments(
  userToken: string,
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DocumentListResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `page` | `number` | Query, Required | Page number of specific page to return<br>**Constraints**: `>= 1` |
| `pageSize` | `number` | Query, Required | Number of items to be displayed per page<br>**Constraints**: `>= 1`, `<= 50` |
| `filter` | `string \| undefined` | Query, Optional | Filter request results by specific criteria. |
| `sort` | `string \| undefined` | Query, Optional | Sort request results by specific attribute. |
| `language` | [`Languages \| undefined`](../../doc/models/languages.md) | Query, Optional | Filter results by language type. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DocumentListResult`](../../doc/models/document-list-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await documentsController.listDocuments(userToken, page, pageSize, None, None, language);
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
      "createDate": "2022-05-04T18:59:38Z",
      "fields": [
        {
          "key": "TYPE",
          "value": "DRIVERS_LICENSE"
        },
        {
          "key": "STATUS",
          "value": "PROVIDED"
        },
        {
          "key": "EXPIRATION_DATE",
          "value": "10-31-2021"
        }
      ],
      "filename": "List.jpg",
      "mimeType": "image/jpeg",
      "token": "docu-2053aaad-c1a5-45e2-a2da-f71287f32800",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/documents/docu-2053aaad-c1a5-45e2-a2da-f71287f32800",
          "params": {
            "rel": "self"
          }
        }
      ]
    }
  ],
  "meta": {
    "pageNo": "1",
    "pageSize": "2",
    "pageCount": "0",
    "recordCount": "0",
    "timezone": "GMT"
  },
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/documents?page=1&pageSize=2",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# List User Document Requirements

Returns a list of user documents that the user can provide

```ts
async listUserDocumentRequirements(
  userToken: string,
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DocumentRequirementsListResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `page` | `number` | Query, Required | Page number of specific page to return<br>**Constraints**: `>= 1` |
| `pageSize` | `number` | Query, Required | Number of items to be displayed per page<br>**Constraints**: `>= 1`, `<= 50` |
| `filter` | `string \| undefined` | Query, Optional | Filter request results by specific criteria. |
| `sort` | `string \| undefined` | Query, Optional | Sort request results by specific attribute. |
| `language` | [`Languages \| undefined`](../../doc/models/languages.md) | Query, Optional | Filter results by language type. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DocumentRequirementsListResult`](../../doc/models/document-requirements-list-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await documentsController.listUserDocumentRequirements(userToken, page, pageSize, None, None, language);
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
  "kycRequirements": [
    {
      "countryOfBirth": "US",
      "countryOfNationality": "US",
      "documents": [
        {
          "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_DriversLicense/AccountDocumentType_DriversLicense.png",
          "supplementalDocuments": [
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_TaxIdentificationCardorLetter/AccountDocumentType_TaxIdentificationCardorLetter.png",
              "status": "NOT_PROVIDED",
              "type": "TAX_IDENTIFICATION_CARD_OR_LETTER"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_TaxStatement/AccountDocumentType_TaxStatement.png",
              "status": "NOT_PROVIDED",
              "type": "TAX_STATEMENT"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_Bank_Or_CreditCardStatement/AccountDocumentType_Bank_Or_CreditCardStatement.png",
              "status": "NOT_PROVIDED",
              "type": "BANK_OR_CREDIT_CARD_STATEMENT"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_BankReferenceLetter/AccountDocumentType_BankReferenceLetter.png",
              "status": "NOT_PROVIDED",
              "type": "BANK_REFERENCE_LETTER"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_UtilityBill/AccountDocumentType_UtilityBill.png",
              "status": "NOT_PROVIDED",
              "type": "UTILITY_BILL"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_MarriageLicense/AccountDocumentType_MarriageLicense.png",
              "status": "NOT_PROVIDED",
              "type": "MARRIAGE_LICENSE"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_PayStub/AccountDocumentType_PayStub.png",
              "status": "NOT_PROVIDED",
              "type": "PAY_STUB"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_BirthCertificate/AccountDocumentType_BirthCertificate.png",
              "status": "NOT_PROVIDED",
              "type": "BIRTH_CERTIFICATE"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_SocialSecurityCard/AccountDocumentType_SocialSecurityCard.png",
              "status": "NOT_PROVIDED",
              "type": "SOCIAL_SECURITY_CARD"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_OfficialNameChangeDocument/AccountDocumentType_OfficialNameChangeDocument.png",
              "status": "NOT_PROVIDED",
              "type": "OFFICIAL_NAME_CHANGE_DOCUMENT"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_VotersCard/AccountDocumentType_VotersCard.png",
              "status": "NOT_PROVIDED",
              "type": "VOTERS_CARD"
            }
          ],
          "metadata": [
            {
              "dataType": "Date",
              "fieldType": "Expiration_Date",
              "name": [
                {
                  "language": "en-US",
                  "translation": "Expiration Date"
                }
              ],
              "required": true
            },
            {
              "dataType": "String",
              "fieldType": "Document_Id",
              "name": [
                {
                  "language": "en-US",
                  "translation": "Document Id"
                }
              ],
              "required": true
            }
          ],
          "status": "NOT_PROVIDED",
          "type": "DRIVERS_LICENSE"
        },
        {
          "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_Passport/AccountDocumentType_Passport.png",
          "supplementalDocuments": [
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_TaxIdentificationCardorLetter/AccountDocumentType_TaxIdentificationCardorLetter.png",
              "status": "NOT_PROVIDED",
              "type": "TAX_IDENTIFICATION_CARD_OR_LETTER"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_TaxStatement/AccountDocumentType_TaxStatement.png",
              "status": "NOT_PROVIDED",
              "type": "TAX_STATEMENT"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_Bank_Or_CreditCardStatement/AccountDocumentType_Bank_Or_CreditCardStatement.png",
              "status": "NOT_PROVIDED",
              "type": "BANK_OR_CREDIT_CARD_STATEMENT"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_BankReferenceLetter/AccountDocumentType_BankReferenceLetter.png",
              "status": "NOT_PROVIDED",
              "type": "BANK_REFERENCE_LETTER"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_UtilityBill/AccountDocumentType_UtilityBill.png",
              "status": "NOT_PROVIDED",
              "type": "UTILITY_BILL"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_MarriageLicense/AccountDocumentType_MarriageLicense.png",
              "status": "NOT_PROVIDED",
              "type": "MARRIAGE_LICENSE"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_PayStub/AccountDocumentType_PayStub.png",
              "status": "NOT_PROVIDED",
              "type": "PAY_STUB"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_BirthCertificate/AccountDocumentType_BirthCertificate.png",
              "status": "NOT_PROVIDED",
              "type": "BIRTH_CERTIFICATE"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_SocialSecurityCard/AccountDocumentType_SocialSecurityCard.png",
              "status": "NOT_PROVIDED",
              "type": "SOCIAL_SECURITY_CARD"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_OfficialNameChangeDocument/AccountDocumentType_OfficialNameChangeDocument.png",
              "status": "NOT_PROVIDED",
              "type": "OFFICIAL_NAME_CHANGE_DOCUMENT"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_VotersCard/AccountDocumentType_VotersCard.png",
              "status": "NOT_PROVIDED",
              "type": "VOTERS_CARD"
            }
          ],
          "metadata": [
            {
              "dataType": "Date",
              "fieldType": "Expiration_Date",
              "name": [
                {
                  "language": "en-US",
                  "translation": "Expiration Date"
                }
              ],
              "required": true
            },
            {
              "dataType": "String",
              "fieldType": "Document_Id",
              "name": [
                {
                  "language": "en-US",
                  "translation": "Document Id"
                }
              ],
              "required": true
            }
          ],
          "status": "NOT_PROVIDED",
          "type": "PASSPORT"
        },
        {
          "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_ArmedForcesIDCard/AccountDocumentType_ArmedForcesIDCard.png",
          "supplementalDocuments": [
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_ArmedForcesIDCardBack/AccountDocumentType_ArmedForcesIDCardBack.png",
              "supplementalDocuments": [
                {
                  "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_TaxIdentificationCardorLetter/AccountDocumentType_TaxIdentificationCardorLetter.png",
                  "status": "NOT_PROVIDED",
                  "type": "TAX_IDENTIFICATION_CARD_OR_LETTER"
                },
                {
                  "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_TaxStatement/AccountDocumentType_TaxStatement.png",
                  "status": "NOT_PROVIDED",
                  "type": "TAX_STATEMENT"
                },
                {
                  "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_Bank_Or_CreditCardStatement/AccountDocumentType_Bank_Or_CreditCardStatement.png",
                  "status": "NOT_PROVIDED",
                  "type": "BANK_OR_CREDIT_CARD_STATEMENT"
                },
                {
                  "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_BankReferenceLetter/AccountDocumentType_BankReferenceLetter.png",
                  "status": "NOT_PROVIDED",
                  "type": "BANK_REFERENCE_LETTER"
                },
                {
                  "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_UtilityBill/AccountDocumentType_UtilityBill.png",
                  "status": "NOT_PROVIDED",
                  "type": "UTILITY_BILL"
                },
                {
                  "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_MarriageLicense/AccountDocumentType_MarriageLicense.png",
                  "status": "NOT_PROVIDED",
                  "type": "MARRIAGE_LICENSE"
                },
                {
                  "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_PayStub/AccountDocumentType_PayStub.png",
                  "status": "NOT_PROVIDED",
                  "type": "PAY_STUB"
                },
                {
                  "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_BirthCertificate/AccountDocumentType_BirthCertificate.png",
                  "status": "NOT_PROVIDED",
                  "type": "BIRTH_CERTIFICATE"
                },
                {
                  "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_SocialSecurityCard/AccountDocumentType_SocialSecurityCard.png",
                  "status": "NOT_PROVIDED",
                  "type": "SOCIAL_SECURITY_CARD"
                },
                {
                  "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_OfficialNameChangeDocument/AccountDocumentType_OfficialNameChangeDocument.png",
                  "status": "NOT_PROVIDED",
                  "type": "OFFICIAL_NAME_CHANGE_DOCUMENT"
                },
                {
                  "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_VotersCard/AccountDocumentType_VotersCard.png",
                  "status": "NOT_PROVIDED",
                  "type": "VOTERS_CARD"
                }
              ],
              "status": "NOT_PROVIDED",
              "type": "ARMED_FORCES_ID_CARD_BACK"
            }
          ],
          "metadata": [
            {
              "dataType": "Date",
              "fieldType": "Expiration_Date",
              "name": [
                {
                  "language": "en-US",
                  "translation": "Expiration Date"
                }
              ],
              "required": true
            },
            {
              "dataType": "String",
              "fieldType": "Document_Id",
              "name": [
                {
                  "language": "en-US",
                  "translation": "Document Id"
                }
              ],
              "required": true
            }
          ],
          "status": "NOT_PROVIDED",
          "type": "ARMED_FORCES_ID_CARD"
        },
        {
          "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_ResidentImmigrationCard/AccountDocumentType_ResidentImmigrationCard.png",
          "supplementalDocuments": [
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_TaxIdentificationCardorLetter/AccountDocumentType_TaxIdentificationCardorLetter.png",
              "status": "NOT_PROVIDED",
              "type": "TAX_IDENTIFICATION_CARD_OR_LETTER"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_TaxStatement/AccountDocumentType_TaxStatement.png",
              "status": "NOT_PROVIDED",
              "type": "TAX_STATEMENT"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_Bank_Or_CreditCardStatement/AccountDocumentType_Bank_Or_CreditCardStatement.png",
              "status": "NOT_PROVIDED",
              "type": "BANK_OR_CREDIT_CARD_STATEMENT"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_BankReferenceLetter/AccountDocumentType_BankReferenceLetter.png",
              "status": "NOT_PROVIDED",
              "type": "BANK_REFERENCE_LETTER"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_UtilityBill/AccountDocumentType_UtilityBill.png",
              "status": "NOT_PROVIDED",
              "type": "UTILITY_BILL"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_MarriageLicense/AccountDocumentType_MarriageLicense.png",
              "status": "NOT_PROVIDED",
              "type": "MARRIAGE_LICENSE"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_PayStub/AccountDocumentType_PayStub.png",
              "status": "NOT_PROVIDED",
              "type": "PAY_STUB"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_BirthCertificate/AccountDocumentType_BirthCertificate.png",
              "status": "NOT_PROVIDED",
              "type": "BIRTH_CERTIFICATE"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_OfficialNameChangeDocument/AccountDocumentType_OfficialNameChangeDocument.png",
              "status": "NOT_PROVIDED",
              "type": "OFFICIAL_NAME_CHANGE_DOCUMENT"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_VotersCard/AccountDocumentType_VotersCard.png",
              "status": "NOT_PROVIDED",
              "type": "VOTERS_CARD"
            }
          ],
          "metadata": [
            {
              "dataType": "Date",
              "fieldType": "Expiration_Date",
              "name": [
                {
                  "language": "en-US",
                  "translation": "Expiration Date"
                }
              ],
              "required": true
            },
            {
              "dataType": "String",
              "fieldType": "Document_Id",
              "name": [
                {
                  "language": "en-US",
                  "translation": "Document Id"
                }
              ],
              "required": true
            }
          ],
          "status": "NOT_PROVIDED",
          "type": "RESIDENT_IMMIGRATION_CARD"
        },
        {
          "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_Other_GovernmentIssuedID/AccountDocumentType_Other_GovernmentIssuedID.png",
          "supplementalDocuments": [
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_TaxIdentificationCardorLetter/AccountDocumentType_TaxIdentificationCardorLetter.png",
              "status": "NOT_PROVIDED",
              "type": "TAX_IDENTIFICATION_CARD_OR_LETTER"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_TaxStatement/AccountDocumentType_TaxStatement.png",
              "status": "NOT_PROVIDED",
              "type": "TAX_STATEMENT"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_Bank_Or_CreditCardStatement/AccountDocumentType_Bank_Or_CreditCardStatement.png",
              "status": "NOT_PROVIDED",
              "type": "BANK_OR_CREDIT_CARD_STATEMENT"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_BankReferenceLetter/AccountDocumentType_BankReferenceLetter.png",
              "status": "NOT_PROVIDED",
              "type": "BANK_REFERENCE_LETTER"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_UtilityBill/AccountDocumentType_UtilityBill.png",
              "status": "NOT_PROVIDED",
              "type": "UTILITY_BILL"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_MarriageLicense/AccountDocumentType_MarriageLicense.png",
              "status": "NOT_PROVIDED",
              "type": "MARRIAGE_LICENSE"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_PayStub/AccountDocumentType_PayStub.png",
              "status": "NOT_PROVIDED",
              "type": "PAY_STUB"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_BirthCertificate/AccountDocumentType_BirthCertificate.png",
              "status": "NOT_PROVIDED",
              "type": "BIRTH_CERTIFICATE"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_SocialSecurityCard/AccountDocumentType_SocialSecurityCard.png",
              "status": "NOT_PROVIDED",
              "type": "SOCIAL_SECURITY_CARD"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_OfficialNameChangeDocument/AccountDocumentType_OfficialNameChangeDocument.png",
              "status": "NOT_PROVIDED",
              "type": "OFFICIAL_NAME_CHANGE_DOCUMENT"
            },
            {
              "exampleImage": "https://cdn.mypayquicker.dev/content/kyc/instructions/BankType_MCB/Country_UnitedStatesofAmerica_US_USA_840/AccountDocumentType_VotersCard/AccountDocumentType_VotersCard.png",
              "status": "NOT_PROVIDED",
              "type": "VOTERS_CARD"
            }
          ],
          "metadata": [
            {
              "dataType": "Date",
              "fieldType": "Expiration_Date",
              "name": [
                {
                  "language": "en-US",
                  "translation": "Expiration Date"
                }
              ],
              "required": true
            },
            {
              "dataType": "String",
              "fieldType": "Document_Id",
              "name": [
                {
                  "language": "en-US",
                  "translation": "Document Id"
                }
              ],
              "required": true
            }
          ],
          "status": "NOT_PROVIDED",
          "type": "OTHER_GOVERNMENT_ISSUED_ID"
        }
      ]
    }
  ],
  "meta": {
    "timezone": "GMT"
  }
}
```


# Replace Document

Replace the user [documents](page:working-with-resources/documents) at the given document token.

```ts
async replaceDocument(
  userToken: string,
  documentToken: string,
  fields?: Fields,
  upload?: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DocumentResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `documentToken` | `string` | Template, Required | Auto-generated unique identifier representing an uploaded document, prefixed with `docu-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^docu-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `fields` | [`Fields \| undefined`](../../doc/models/fields.md) | Form (JSON-Encoded), Optional | - |
| `upload` | `FileWrapper \| undefined` | Form, Optional | Document to be uploaded |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DocumentResult`](../../doc/models/document-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const documentToken = 'docu-6e582242-5dd4-4883-b0c2-488e09a26595';
try {
  const { result, ...httpResponse } = await documentsController.replaceDocument(userToken, documentToken);
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
  "createDate": "2022-05-04T18:59:38Z",
  "fields": [
    {
      "key": "EXPIRATION_DATE",
      "value": "10-31-2021"
    },
    {
      "key": "TYPE",
      "value": "DRIVERS_LICENSE"
    },
    {
      "key": "STATUS",
      "value": "PROVIDED"
    }
  ],
  "token": "docu-2053aaad-c1a5-45e2-a2da-f71287f32800",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/documents/docu-2053aaad-c1a5-45e2-a2da-f71287f32800",
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


# Retrieve Document

Retrieve a single user [document](page:working-with-resources/documents) by its document token.

```ts
async retrieveDocument(
  userToken: string,
  documentToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DocumentResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `documentToken` | `string` | Template, Required | Auto-generated unique identifier representing an uploaded document, prefixed with `docu-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^docu-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DocumentResult`](../../doc/models/document-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const documentToken = 'docu-6e582242-5dd4-4883-b0c2-488e09a26595';
try {
  const { result, ...httpResponse } = await documentsController.retrieveDocument(userToken, documentToken);
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
  "createDate": "2022-05-04T18:59:38Z",
  "fields": [
    {
      "key": "EXPIRATION_DATE",
      "value": "10-31-2021"
    },
    {
      "key": "TYPE",
      "value": "DRIVERS_LICENSE"
    },
    {
      "key": "STATUS",
      "value": "PROVIDED"
    }
  ],
  "token": "docu-2053aaad-c1a5-45e2-a2da-f71287f32800",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/documents/docu-2053aaad-c1a5-45e2-a2da-f71287f32800",
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


# Upload Document

Upload a user [document](page:working-with-resources/documents).

```ts
async uploadDocument(
  userToken: string,
  fields?: Fields,
  upload?: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DocumentResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `fields` | [`Fields \| undefined`](../../doc/models/fields.md) | Form (JSON-Encoded), Optional | - |
| `upload` | `FileWrapper \| undefined` | Form, Optional | Document to be uploaded |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DocumentResult`](../../doc/models/document-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
try {
  const { result, ...httpResponse } = await documentsController.uploadDocument(userToken);
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
  "createDate": "2022-05-04T18:59:38Z",
  "fields": [
    {
      "key": "EXPIRATION_DATE",
      "value": "10-31-2021"
    },
    {
      "key": "TYPE",
      "value": "DRIVERS_LICENSE"
    },
    {
      "key": "STATUS",
      "value": "PROVIDED"
    }
  ],
  "token": "docu-2053aaad-c1a5-45e2-a2da-f71287f32800",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/documents/docu-2053aaad-c1a5-45e2-a2da-f71287f32800",
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

