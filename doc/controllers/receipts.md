# Receipts

# Receipts

---


The *Receipts* resource describes a transaction receipt for a user, prepaid card, or bank account.

When accepting payments using the PayQuicker API, you can retrieve a receipt for a user, prepaid card, or account transaction. Each receipt contains different data and different transaction types.

* *User receipts.* Represents all non-prepaid card transactions. This includes payments, account-to-account transfers, prepaid-card loads, prepaid-card unloads, spendbacks, bank transfers, and fees.

* *Prepaid Card Receipts.* Represents real transactions that have occurred with an actual debit card. This could be a prepaid-card load, prepaid-card unload, bank transfers, card activity (ATM, purchases), and fees related to card activity.

* *Account Receipts.* Represents all receipts from a funding account, including payments, account-to-account transfers, fees, spendback, and spendback returns.

With this resource, you can perform the following request:

* `GET`: Retrieve a receipt or list of receipts.

For more information, see [Receipts](page:working-with-resources/receipts).

```ts
const receiptsController = new ReceiptsController(client);
```

## Class Name

`ReceiptsController`

## Methods

* [List Account Receipts](../../doc/controllers/receipts.md#list-account-receipts)
* [List Prepaid Card Receipts](../../doc/controllers/receipts.md#list-prepaid-card-receipts)
* [List User Receipts](../../doc/controllers/receipts.md#list-user-receipts)
* [Retrieve Account Receipt](../../doc/controllers/receipts.md#retrieve-account-receipt)
* [Retrieve Prepaid Card Receipt](../../doc/controllers/receipts.md#retrieve-prepaid-card-receipt)
* [Retrieve User Receipt](../../doc/controllers/receipts.md#retrieve-user-receipt)


# List Account Receipts

Retrieve a list of all account(s) [receipts](page:working-with-resources/receipts) that supports filtering, sorting, and pagination through existing mechanisms.

```ts
async listAccountReceipts(
  accountToken: string,
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceiptListResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountToken` | `string` | Template, Required | Auto-generated unique identifier representing a company account, prefixed with `acct-`.<br>**Constraints**: *Pattern*: `^acct-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `page` | `number` | Query, Required | Page number of specific page to return<br>**Constraints**: `>= 1` |
| `pageSize` | `number` | Query, Required | Number of items to be displayed per page<br>**Constraints**: `>= 1`, `<= 50` |
| `filter` | `string \| undefined` | Query, Optional | Filter request results by specific criteria. |
| `sort` | `string \| undefined` | Query, Optional | Sort request results by specific attribute. |
| `language` | [`Languages \| undefined`](../../doc/models/languages.md) | Query, Optional | Filter results by language type. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceiptListResult`](../../doc/models/receipt-list-result.md)

## Example Usage

```ts
const accountToken = 'acct-b3f0570a-6586-4e00-8d6e-8a2bf93cfae4';
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await receiptsController.listAccountReceipts(accountToken, page, pageSize, None, None, language);
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
      "token": "rcpt-86674764-9b7a-4b31-adce-bd3299172f1f",
      "type": "ACCOUNT_TO_ACCOUNT_TRANSFER",
      "createdOn": "2022-05-04T18:50:36Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "user-631b200f-665d-4dbe-bd01-3063c9dec97d",
      "amount": -96.82,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Transfer to Brannon Mertz (Cruz.Hilpert)"
        }
      ],
      "details": {
        "memo": "User To User - memo",
        "note": "User To User - note",
        "correlationToken": "xfer-25c89128-733a-49c2-ac47-31fdfb7e2629"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-86674764-9b7a-4b31-adce-bd3299172f1f",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-09b52cad-9e83-46d9-b36f-5d59e560de3a",
      "type": "ACCOUNT_TO_ACCOUNT_TRANSFER",
      "createdOn": "2022-05-04T06:48:44Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "user-631b200f-665d-4dbe-bd01-3063c9dec97d",
      "amount": -96.82,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Transfer to Brannon Mertz (Cruz.Hilpert)"
        }
      ],
      "details": {
        "memo": "User To User - memo",
        "note": "User To User - note",
        "correlationToken": "xfer-bc1571c2-f748-4478-9748-56018209c2a9"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-09b52cad-9e83-46d9-b36f-5d59e560de3a",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-5a7542e4-1bfe-4112-bbe6-8b8db53ffe1e",
      "type": "SPENDBACK_RETURN",
      "createdOn": "2022-05-04T06:04:43Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 78.98,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Refund for purchase ARIS07D7VANJRJN2C from "
        }
      ],
      "details": {
        "correlationToken": "spnd-42a5c7e9-63be-4686-988f-e184fce663cd"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-5a7542e4-1bfe-4112-bbe6-8b8db53ffe1e",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-19b7dd3b-e597-4759-b55e-608a8efbd7cc",
      "type": "SPENDBACK",
      "createdOn": "2022-05-04T06:04:14Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -78.98,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Purchase from Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "spnd-7daae4c3-3766-4beb-9b26-c2b3d4dadf27"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-19b7dd3b-e597-4759-b55e-608a8efbd7cc",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-1736aaff-b952-40bf-96bf-742cb12f092d",
      "type": "SPENDBACK_RETURN",
      "createdOn": "2022-05-03T18:57:33Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 300,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Refund for purchase ARIS07D7VANJRJN07 from "
        }
      ],
      "details": {
        "correlationToken": "spnd-28b73a28-8b9b-4a75-98ca-b9492d777695"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-1736aaff-b952-40bf-96bf-742cb12f092d",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-ad5e8d05-be48-492d-8368-aa0122e805de",
      "type": "SPENDBACK",
      "createdOn": "2022-05-03T18:57:25Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -300,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Purchase from Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "spnd-ac4ad980-2b72-415e-80ef-890ba4bc107e"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-ad5e8d05-be48-492d-8368-aa0122e805de",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-2de81d8a-573b-46a1-ab4b-ec691a100f2e",
      "type": "SPENDBACK_RETURN",
      "createdOn": "2022-05-03T16:53:21Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 15,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Partial refund for purchase ARIS07D7UN68D27PP from "
        }
      ],
      "details": {
        "correlationToken": "spnd-16e75c71-dc71-4c49-8500-475715c098ac"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-2de81d8a-573b-46a1-ab4b-ec691a100f2e",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-c5a43c8c-be7a-4297-a348-6010d4342935",
      "type": "SPENDBACK",
      "createdOn": "2022-05-03T16:53:00Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -300,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Purchase from Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "spnd-59c3529d-18c2-460e-b422-ad548fab256c"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-c5a43c8c-be7a-4297-a348-6010d4342935",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-220101e5-b2b6-429f-bd76-0a790b70b42d",
      "type": "SPENDBACK",
      "createdOn": "2022-05-02T20:40:39Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -300,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Purchase from Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "spnd-4c414196-d3dd-4233-a729-6fc2da0810eb"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-220101e5-b2b6-429f-bd76-0a790b70b42d",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-bf34989d-0b13-47ee-bd51-b96b0ecbe866",
      "type": "PREPAID_CARD_LOAD",
      "createdOn": "2022-04-29T19:27:08Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "dest-b61bc870-8ab8-4870-a209-6398b60269d5",
      "amount": -25,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Transfer to Arco MCB Gateway Commission Account (USD) - $25.00 USD (Conversion rate: 1)"
        }
      ],
      "details": {
        "cardExpiryDate": "04/2025",
        "cardHolderName": "Timothy Mueller",
        "cardNumber": "************3940",
        "memo": "Memo - Card Transfer 1",
        "note": "Note - Card Transfer 1",
        "correlationToken": "xfer-bf34989d-0b13-47ee-bd51-b96b0ecbe866"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-bf34989d-0b13-47ee-bd51-b96b0ecbe866",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-022b3730-e62e-4ee3-8af9-714a06dadf3c",
      "type": "PAYMENT",
      "createdOn": "2022-04-29T19:20:22Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 1500,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Payment received from  Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "pmnt-87c94572-8241-4c46-976e-0f0dfe3211a6"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-022b3730-e62e-4ee3-8af9-714a06dadf3c",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-24e6c58c-5819-41fa-8dd4-15f8920a68e9",
      "type": "ACCOUNT_TO_ACCOUNT_TRANSFER",
      "createdOn": "2022-04-28T22:08:43Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "user-631b200f-665d-4dbe-bd01-3063c9dec97d",
      "amount": -10,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Transfer to Brannon Mertz (Cruz.Hilpert)"
        }
      ],
      "details": {
        "memo": "User To User - memo",
        "note": "User To User - note",
        "correlationToken": "xfer-aa657951-d6bc-4023-a3a7-377738650b28"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-24e6c58c-5819-41fa-8dd4-15f8920a68e9",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-20c97ff0-b83c-403a-aad7-25a00bdd80af",
      "type": "PAYMENT_RETRACTION",
      "createdOn": "2022-04-27T22:23:57Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -1000.22,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Retraction for ARIS07D0RVW6VKY02"
        }
      ],
      "details": {
        "correlationToken": "pmnt-4c19e750-c901-484c-acba-12979e8c6b58"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-20c97ff0-b83c-403a-aad7-25a00bdd80af",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-ddc68526-8b18-42b6-9fac-75a04d580d6f",
      "type": "PAYMENT",
      "createdOn": "2022-04-27T22:23:31Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 1000.22,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Payment received from  Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "pmnt-51297345-c803-44ab-9e2e-70713142dd58"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-ddc68526-8b18-42b6-9fac-75a04d580d6f",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-be174879-7829-4275-a0e6-164a7d5b5251",
      "type": "PAYMENT_RETRACTION",
      "createdOn": "2022-04-27T22:19:17Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -1500,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Retraction for ARIS07D0RVW6VKXZS"
        }
      ],
      "details": {
        "correlationToken": "pmnt-61db2938-fa74-48e9-a3f1-b83d21f492d8"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-be174879-7829-4275-a0e6-164a7d5b5251",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-3baa92d6-a443-4b45-a245-b34ad51c85f6",
      "type": "PAYMENT",
      "createdOn": "2022-04-27T22:18:56Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 1500,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Payment received from  Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "pmnt-c99be127-65b2-474b-bf3a-80f4f6133f6a"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-3baa92d6-a443-4b45-a245-b34ad51c85f6",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-d91a1d65-adab-43b1-8f33-9f5a9fac8da7",
      "type": "PAYMENT_RETRACTION",
      "createdOn": "2022-04-26T17:45:22Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -78.98,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Retraction for ARIS07CW0646GSO3H"
        }
      ],
      "details": {
        "correlationToken": "pmnt-f293a55f-fae4-45cd-b63c-3023e02ef699"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-d91a1d65-adab-43b1-8f33-9f5a9fac8da7",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-5c1ec450-09c5-4f97-828f-94f843f755f1",
      "type": "PAYMENT",
      "createdOn": "2022-04-26T17:11:29Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 78.98,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Payment received from  Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "pmnt-9d60431b-8bcd-41a7-a002-1669426dac21"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-5c1ec450-09c5-4f97-828f-94f843f755f1",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-74abe865-7719-438d-8fa2-b27cdb03ec06",
      "type": "PAYMENT_RETRACTION",
      "createdOn": "2022-04-26T15:47:39Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -1500,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Retraction for ARIS07CVR5THWRZML"
        }
      ],
      "details": {
        "correlationToken": "pmnt-ab72dd70-37f1-4024-9b44-525ae6e634a4"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-74abe865-7719-438d-8fa2-b27cdb03ec06",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-e3abab12-bcaa-41fd-91d3-3819f27e8eba",
      "type": "PAYMENT",
      "createdOn": "2022-04-26T15:47:31Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 1500,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Payment received from  Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "pmnt-9aca4986-fab9-4d39-8370-a7724b71ace1"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-e3abab12-bcaa-41fd-91d3-3819f27e8eba",
          "params": {
            "rel": "self"
          }
        }
      ]
    }
  ],
  "meta": {
    "pageNo": "1",
    "pageSize": "20",
    "pageCount": "2",
    "recordCount": "22",
    "timezone": "GMT"
  },
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts?pageSize=20&language=en-US",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# List Prepaid Card Receipts

Retrieve a list of [prepaid card](page:working-with-resources/prepaid-cards) [receipts](page:working-with-resources/receipts) that supports filtering, sorting, and pagination through existing mechanisms.

```ts
async listPrepaidCardReceipts(
  userToken: string,
  destinationToken: string,
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceiptListResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `destinationToken` | `string` | Template, Required | Auto-generated unique identifier representing a transfer destination, including prepaid cards, bank accounts, paper checks, and other users, prefixed with `dest-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^dest-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `page` | `number` | Query, Required | Page number of specific page to return<br>**Constraints**: `>= 1` |
| `pageSize` | `number` | Query, Required | Number of items to be displayed per page<br>**Constraints**: `>= 1`, `<= 50` |
| `filter` | `string \| undefined` | Query, Optional | Filter request results by specific criteria. |
| `sort` | `string \| undefined` | Query, Optional | Sort request results by specific attribute. |
| `language` | [`Languages \| undefined`](../../doc/models/languages.md) | Query, Optional | Filter results by language type. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceiptListResult`](../../doc/models/receipt-list-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const destinationToken = 'dest-4aed86e2-4929-45bf-814d-9030aef21e79';
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await receiptsController.listPrepaidCardReceipts(userToken, destinationToken, page, pageSize, None, None, language);
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
      "token": "rcpt-86674764-9b7a-4b31-adce-bd3299172f1f",
      "type": "ACCOUNT_TO_ACCOUNT_TRANSFER",
      "createdOn": "2022-05-04T18:50:36Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "user-631b200f-665d-4dbe-bd01-3063c9dec97d",
      "amount": -96.82,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Transfer to Brannon Mertz (Cruz.Hilpert)"
        }
      ],
      "details": {
        "memo": "User To User - memo",
        "note": "User To User - note",
        "correlationToken": "xfer-25c89128-733a-49c2-ac47-31fdfb7e2629"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-86674764-9b7a-4b31-adce-bd3299172f1f",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-09b52cad-9e83-46d9-b36f-5d59e560de3a",
      "type": "ACCOUNT_TO_ACCOUNT_TRANSFER",
      "createdOn": "2022-05-04T06:48:44Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "user-631b200f-665d-4dbe-bd01-3063c9dec97d",
      "amount": -96.82,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Transfer to Brannon Mertz (Cruz.Hilpert)"
        }
      ],
      "details": {
        "memo": "User To User - memo",
        "note": "User To User - note",
        "correlationToken": "xfer-bc1571c2-f748-4478-9748-56018209c2a9"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-09b52cad-9e83-46d9-b36f-5d59e560de3a",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-5a7542e4-1bfe-4112-bbe6-8b8db53ffe1e",
      "type": "SPENDBACK_RETURN",
      "createdOn": "2022-05-04T06:04:43Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 78.98,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Refund for purchase ARIS07D7VANJRJN2C from "
        }
      ],
      "details": {
        "correlationToken": "spnd-42a5c7e9-63be-4686-988f-e184fce663cd"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-5a7542e4-1bfe-4112-bbe6-8b8db53ffe1e",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-19b7dd3b-e597-4759-b55e-608a8efbd7cc",
      "type": "SPENDBACK",
      "createdOn": "2022-05-04T06:04:14Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -78.98,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Purchase from Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "spnd-7daae4c3-3766-4beb-9b26-c2b3d4dadf27"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-19b7dd3b-e597-4759-b55e-608a8efbd7cc",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-1736aaff-b952-40bf-96bf-742cb12f092d",
      "type": "SPENDBACK_RETURN",
      "createdOn": "2022-05-03T18:57:33Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 300,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Refund for purchase ARIS07D7VANJRJN07 from "
        }
      ],
      "details": {
        "correlationToken": "spnd-28b73a28-8b9b-4a75-98ca-b9492d777695"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-1736aaff-b952-40bf-96bf-742cb12f092d",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-ad5e8d05-be48-492d-8368-aa0122e805de",
      "type": "SPENDBACK",
      "createdOn": "2022-05-03T18:57:25Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -300,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Purchase from Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "spnd-ac4ad980-2b72-415e-80ef-890ba4bc107e"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-ad5e8d05-be48-492d-8368-aa0122e805de",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-2de81d8a-573b-46a1-ab4b-ec691a100f2e",
      "type": "SPENDBACK_RETURN",
      "createdOn": "2022-05-03T16:53:21Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 15,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Partial refund for purchase ARIS07D7UN68D27PP from "
        }
      ],
      "details": {
        "correlationToken": "spnd-16e75c71-dc71-4c49-8500-475715c098ac"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-2de81d8a-573b-46a1-ab4b-ec691a100f2e",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-c5a43c8c-be7a-4297-a348-6010d4342935",
      "type": "SPENDBACK",
      "createdOn": "2022-05-03T16:53:00Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -300,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Purchase from Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "spnd-59c3529d-18c2-460e-b422-ad548fab256c"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-c5a43c8c-be7a-4297-a348-6010d4342935",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-220101e5-b2b6-429f-bd76-0a790b70b42d",
      "type": "SPENDBACK",
      "createdOn": "2022-05-02T20:40:39Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -300,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Purchase from Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "spnd-4c414196-d3dd-4233-a729-6fc2da0810eb"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-220101e5-b2b6-429f-bd76-0a790b70b42d",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-bf34989d-0b13-47ee-bd51-b96b0ecbe866",
      "type": "PREPAID_CARD_LOAD",
      "createdOn": "2022-04-29T19:27:08Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "dest-b61bc870-8ab8-4870-a209-6398b60269d5",
      "amount": -25,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Transfer to Arco MCB Gateway Commission Account (USD) - $25.00 USD (Conversion rate: 1)"
        }
      ],
      "details": {
        "cardExpiryDate": "04/2025",
        "cardHolderName": "Timothy Mueller",
        "cardNumber": "************3940",
        "memo": "Memo - Card Transfer 1",
        "note": "Note - Card Transfer 1",
        "correlationToken": "xfer-bf34989d-0b13-47ee-bd51-b96b0ecbe866"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-bf34989d-0b13-47ee-bd51-b96b0ecbe866",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-022b3730-e62e-4ee3-8af9-714a06dadf3c",
      "type": "PAYMENT",
      "createdOn": "2022-04-29T19:20:22Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 1500,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Payment received from  Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "pmnt-87c94572-8241-4c46-976e-0f0dfe3211a6"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-022b3730-e62e-4ee3-8af9-714a06dadf3c",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-24e6c58c-5819-41fa-8dd4-15f8920a68e9",
      "type": "ACCOUNT_TO_ACCOUNT_TRANSFER",
      "createdOn": "2022-04-28T22:08:43Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "user-631b200f-665d-4dbe-bd01-3063c9dec97d",
      "amount": -10,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Transfer to Brannon Mertz (Cruz.Hilpert)"
        }
      ],
      "details": {
        "memo": "User To User - memo",
        "note": "User To User - note",
        "correlationToken": "xfer-aa657951-d6bc-4023-a3a7-377738650b28"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-24e6c58c-5819-41fa-8dd4-15f8920a68e9",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-20c97ff0-b83c-403a-aad7-25a00bdd80af",
      "type": "PAYMENT_RETRACTION",
      "createdOn": "2022-04-27T22:23:57Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -1000.22,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Retraction for ARIS07D0RVW6VKY02"
        }
      ],
      "details": {
        "correlationToken": "pmnt-4c19e750-c901-484c-acba-12979e8c6b58"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-20c97ff0-b83c-403a-aad7-25a00bdd80af",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-ddc68526-8b18-42b6-9fac-75a04d580d6f",
      "type": "PAYMENT",
      "createdOn": "2022-04-27T22:23:31Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 1000.22,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Payment received from  Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "pmnt-51297345-c803-44ab-9e2e-70713142dd58"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-ddc68526-8b18-42b6-9fac-75a04d580d6f",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-be174879-7829-4275-a0e6-164a7d5b5251",
      "type": "PAYMENT_RETRACTION",
      "createdOn": "2022-04-27T22:19:17Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -1500,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Retraction for ARIS07D0RVW6VKXZS"
        }
      ],
      "details": {
        "correlationToken": "pmnt-61db2938-fa74-48e9-a3f1-b83d21f492d8"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-be174879-7829-4275-a0e6-164a7d5b5251",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-3baa92d6-a443-4b45-a245-b34ad51c85f6",
      "type": "PAYMENT",
      "createdOn": "2022-04-27T22:18:56Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 1500,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Payment received from  Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "pmnt-c99be127-65b2-474b-bf3a-80f4f6133f6a"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-3baa92d6-a443-4b45-a245-b34ad51c85f6",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-d91a1d65-adab-43b1-8f33-9f5a9fac8da7",
      "type": "PAYMENT_RETRACTION",
      "createdOn": "2022-04-26T17:45:22Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -78.98,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Retraction for ARIS07CW0646GSO3H"
        }
      ],
      "details": {
        "correlationToken": "pmnt-f293a55f-fae4-45cd-b63c-3023e02ef699"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-d91a1d65-adab-43b1-8f33-9f5a9fac8da7",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-5c1ec450-09c5-4f97-828f-94f843f755f1",
      "type": "PAYMENT",
      "createdOn": "2022-04-26T17:11:29Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 78.98,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Payment received from  Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "pmnt-9d60431b-8bcd-41a7-a002-1669426dac21"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-5c1ec450-09c5-4f97-828f-94f843f755f1",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-74abe865-7719-438d-8fa2-b27cdb03ec06",
      "type": "PAYMENT_RETRACTION",
      "createdOn": "2022-04-26T15:47:39Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -1500,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Retraction for ARIS07CVR5THWRZML"
        }
      ],
      "details": {
        "correlationToken": "pmnt-ab72dd70-37f1-4024-9b44-525ae6e634a4"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-74abe865-7719-438d-8fa2-b27cdb03ec06",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-e3abab12-bcaa-41fd-91d3-3819f27e8eba",
      "type": "PAYMENT",
      "createdOn": "2022-04-26T15:47:31Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 1500,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Payment received from  Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "pmnt-9aca4986-fab9-4d39-8370-a7724b71ace1"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-e3abab12-bcaa-41fd-91d3-3819f27e8eba",
          "params": {
            "rel": "self"
          }
        }
      ]
    }
  ],
  "meta": {
    "pageNo": "1",
    "pageSize": "20",
    "pageCount": "2",
    "recordCount": "22",
    "timezone": "GMT"
  },
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts?pageSize=20&language=en-US",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# List User Receipts

Retrieve a list of  user [receipts](page:working-with-resources/receipts) that supports filtering, sorting, and pagination through existing mechanisms.

```ts
async listUserReceipts(
  userToken: string,
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceiptListResult>>
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

[`ReceiptListResult`](../../doc/models/receipt-list-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await receiptsController.listUserReceipts(userToken, page, pageSize, None, None, language);
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
      "token": "rcpt-86674764-9b7a-4b31-adce-bd3299172f1f",
      "type": "ACCOUNT_TO_ACCOUNT_TRANSFER",
      "createdOn": "2022-05-04T18:50:36Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "user-631b200f-665d-4dbe-bd01-3063c9dec97d",
      "amount": -96.82,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Transfer to Brannon Mertz (Cruz.Hilpert)"
        }
      ],
      "details": {
        "memo": "User To User - memo",
        "note": "User To User - note",
        "correlationToken": "xfer-25c89128-733a-49c2-ac47-31fdfb7e2629"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-86674764-9b7a-4b31-adce-bd3299172f1f",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-09b52cad-9e83-46d9-b36f-5d59e560de3a",
      "type": "ACCOUNT_TO_ACCOUNT_TRANSFER",
      "createdOn": "2022-05-04T06:48:44Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "user-631b200f-665d-4dbe-bd01-3063c9dec97d",
      "amount": -96.82,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Transfer to Brannon Mertz (Cruz.Hilpert)"
        }
      ],
      "details": {
        "memo": "User To User - memo",
        "note": "User To User - note",
        "correlationToken": "xfer-bc1571c2-f748-4478-9748-56018209c2a9"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-09b52cad-9e83-46d9-b36f-5d59e560de3a",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-5a7542e4-1bfe-4112-bbe6-8b8db53ffe1e",
      "type": "SPENDBACK_RETURN",
      "createdOn": "2022-05-04T06:04:43Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 78.98,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Refund for purchase ARIS07D7VANJRJN2C from "
        }
      ],
      "details": {
        "correlationToken": "spnd-42a5c7e9-63be-4686-988f-e184fce663cd"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-5a7542e4-1bfe-4112-bbe6-8b8db53ffe1e",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-19b7dd3b-e597-4759-b55e-608a8efbd7cc",
      "type": "SPENDBACK",
      "createdOn": "2022-05-04T06:04:14Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -78.98,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Purchase from Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "spnd-7daae4c3-3766-4beb-9b26-c2b3d4dadf27"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-19b7dd3b-e597-4759-b55e-608a8efbd7cc",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-1736aaff-b952-40bf-96bf-742cb12f092d",
      "type": "SPENDBACK_RETURN",
      "createdOn": "2022-05-03T18:57:33Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 300,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Refund for purchase ARIS07D7VANJRJN07 from "
        }
      ],
      "details": {
        "correlationToken": "spnd-28b73a28-8b9b-4a75-98ca-b9492d777695"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-1736aaff-b952-40bf-96bf-742cb12f092d",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-ad5e8d05-be48-492d-8368-aa0122e805de",
      "type": "SPENDBACK",
      "createdOn": "2022-05-03T18:57:25Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -300,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Purchase from Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "spnd-ac4ad980-2b72-415e-80ef-890ba4bc107e"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-ad5e8d05-be48-492d-8368-aa0122e805de",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-2de81d8a-573b-46a1-ab4b-ec691a100f2e",
      "type": "SPENDBACK_RETURN",
      "createdOn": "2022-05-03T16:53:21Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 15,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Partial refund for purchase ARIS07D7UN68D27PP from "
        }
      ],
      "details": {
        "correlationToken": "spnd-16e75c71-dc71-4c49-8500-475715c098ac"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-2de81d8a-573b-46a1-ab4b-ec691a100f2e",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-c5a43c8c-be7a-4297-a348-6010d4342935",
      "type": "SPENDBACK",
      "createdOn": "2022-05-03T16:53:00Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -300,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Purchase from Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "spnd-59c3529d-18c2-460e-b422-ad548fab256c"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-c5a43c8c-be7a-4297-a348-6010d4342935",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-220101e5-b2b6-429f-bd76-0a790b70b42d",
      "type": "SPENDBACK",
      "createdOn": "2022-05-02T20:40:39Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -300,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Purchase from Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "spnd-4c414196-d3dd-4233-a729-6fc2da0810eb"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-220101e5-b2b6-429f-bd76-0a790b70b42d",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-bf34989d-0b13-47ee-bd51-b96b0ecbe866",
      "type": "PREPAID_CARD_LOAD",
      "createdOn": "2022-04-29T19:27:08Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "dest-b61bc870-8ab8-4870-a209-6398b60269d5",
      "amount": -25,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Transfer to Arco MCB Gateway Commission Account (USD) - $25.00 USD (Conversion rate: 1)"
        }
      ],
      "details": {
        "cardExpiryDate": "04/2025",
        "cardHolderName": "Timothy Mueller",
        "cardNumber": "************3940",
        "memo": "Memo - Card Transfer 1",
        "note": "Note - Card Transfer 1",
        "correlationToken": "xfer-bf34989d-0b13-47ee-bd51-b96b0ecbe866"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-bf34989d-0b13-47ee-bd51-b96b0ecbe866",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-022b3730-e62e-4ee3-8af9-714a06dadf3c",
      "type": "PAYMENT",
      "createdOn": "2022-04-29T19:20:22Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 1500,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Payment received from  Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "pmnt-87c94572-8241-4c46-976e-0f0dfe3211a6"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-022b3730-e62e-4ee3-8af9-714a06dadf3c",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-24e6c58c-5819-41fa-8dd4-15f8920a68e9",
      "type": "ACCOUNT_TO_ACCOUNT_TRANSFER",
      "createdOn": "2022-04-28T22:08:43Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "user-631b200f-665d-4dbe-bd01-3063c9dec97d",
      "amount": -10,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Transfer to Brannon Mertz (Cruz.Hilpert)"
        }
      ],
      "details": {
        "memo": "User To User - memo",
        "note": "User To User - note",
        "correlationToken": "xfer-aa657951-d6bc-4023-a3a7-377738650b28"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-24e6c58c-5819-41fa-8dd4-15f8920a68e9",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-20c97ff0-b83c-403a-aad7-25a00bdd80af",
      "type": "PAYMENT_RETRACTION",
      "createdOn": "2022-04-27T22:23:57Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -1000.22,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Retraction for ARIS07D0RVW6VKY02"
        }
      ],
      "details": {
        "correlationToken": "pmnt-4c19e750-c901-484c-acba-12979e8c6b58"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-20c97ff0-b83c-403a-aad7-25a00bdd80af",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-ddc68526-8b18-42b6-9fac-75a04d580d6f",
      "type": "PAYMENT",
      "createdOn": "2022-04-27T22:23:31Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 1000.22,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Payment received from  Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "pmnt-51297345-c803-44ab-9e2e-70713142dd58"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-ddc68526-8b18-42b6-9fac-75a04d580d6f",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-be174879-7829-4275-a0e6-164a7d5b5251",
      "type": "PAYMENT_RETRACTION",
      "createdOn": "2022-04-27T22:19:17Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -1500,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Retraction for ARIS07D0RVW6VKXZS"
        }
      ],
      "details": {
        "correlationToken": "pmnt-61db2938-fa74-48e9-a3f1-b83d21f492d8"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-be174879-7829-4275-a0e6-164a7d5b5251",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-3baa92d6-a443-4b45-a245-b34ad51c85f6",
      "type": "PAYMENT",
      "createdOn": "2022-04-27T22:18:56Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 1500,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Payment received from  Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "pmnt-c99be127-65b2-474b-bf3a-80f4f6133f6a"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-3baa92d6-a443-4b45-a245-b34ad51c85f6",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-d91a1d65-adab-43b1-8f33-9f5a9fac8da7",
      "type": "PAYMENT_RETRACTION",
      "createdOn": "2022-04-26T17:45:22Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -78.98,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Retraction for ARIS07CW0646GSO3H"
        }
      ],
      "details": {
        "correlationToken": "pmnt-f293a55f-fae4-45cd-b63c-3023e02ef699"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-d91a1d65-adab-43b1-8f33-9f5a9fac8da7",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-5c1ec450-09c5-4f97-828f-94f843f755f1",
      "type": "PAYMENT",
      "createdOn": "2022-04-26T17:11:29Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 78.98,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Payment received from  Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "pmnt-9d60431b-8bcd-41a7-a002-1669426dac21"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-5c1ec450-09c5-4f97-828f-94f843f755f1",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-74abe865-7719-438d-8fa2-b27cdb03ec06",
      "type": "PAYMENT_RETRACTION",
      "createdOn": "2022-04-26T15:47:39Z",
      "sign": "DEBIT",
      "sourceToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "destinationToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "amount": -1500,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Retraction for ARIS07CVR5THWRZML"
        }
      ],
      "details": {
        "correlationToken": "pmnt-ab72dd70-37f1-4024-9b44-525ae6e634a4"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-74abe865-7719-438d-8fa2-b27cdb03ec06",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "rcpt-e3abab12-bcaa-41fd-91d3-3819f27e8eba",
      "type": "PAYMENT",
      "createdOn": "2022-04-26T15:47:31Z",
      "sign": "CREDIT",
      "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
      "destinationToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
      "amount": 1500,
      "currency": "USD",
      "status": "COMPLETE",
      "descriptions": [
        {
          "language": "en-US",
          "translation": "Payment received from  Arco MCB Gateway"
        }
      ],
      "details": {
        "correlationToken": "pmnt-9aca4986-fab9-4d39-8370-a7724b71ace1"
      },
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts/rcpt-e3abab12-bcaa-41fd-91d3-3819f27e8eba",
          "params": {
            "rel": "self"
          }
        }
      ]
    }
  ],
  "meta": {
    "pageNo": "1",
    "pageSize": "20",
    "pageCount": "2",
    "recordCount": "22",
    "timezone": "GMT"
  },
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-2bbfc967-d12e-4647-a887-d905172fb4bc/receipts?pageSize=20&language=en-US",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# Retrieve Account Receipt

Retrieve a single account [receipt](page:working-with-resources/receipts)

```ts
async retrieveAccountReceipt(
  accountToken: string,
  receiptToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceiptResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountToken` | `string` | Template, Required | Auto-generated unique identifier representing a company account, prefixed with `acct-`.<br>**Constraints**: *Pattern*: `^acct-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `receiptToken` | `string` | Template, Required | Auto-generated unique identifier representing a receipt, prefixed with `rcpt-`.<br>**Constraints**: *Pattern*: `^rcpt-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceiptResult`](../../doc/models/receipt-result.md)

## Example Usage

```ts
const accountToken = 'acct-b3f0570a-6586-4e00-8d6e-8a2bf93cfae4';
const receiptToken = 'rcpt-6260c132-5cb1-4e30-8b08-9ce559893acb';
try {
  const { result, ...httpResponse } = await receiptsController.retrieveAccountReceipt(accountToken, receiptToken);
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
  "token": "rcpt-b58721a3-33e8-4a62-b51d-a997b46fbce0",
  "type": "PAYMENT",
  "createdOn": "2022-05-04T13:19:38Z",
  "sign": "DEBIT",
  "sourceToken": "acct-4433f040-4ad5-41e5-a6e3-c9611a7be95e",
  "destinationToken": "user-cf6244d7-f6b8-4625-906a-9f21fc8c774b",
  "amount": -1500,
  "currency": "USD",
  "status": "COMPLETE",
  "descriptions": [
    {
      "language": "en-US",
      "translation": "Payment sent to Boutique Partner Cale Cruickshank (Izaiah_McCullough)"
    }
  ],
  "details": {
    "memo": "Payment 1 Memo",
    "note": "Payment 1 Note",
    "correlationToken": "pmnt-1d4ae3b0-09c9-402a-8d38-3de1bfdbd1e3"
  },
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/accounts/acct-4433f040-4ad5-41e5-a6e3-c9611a7be95e/receipts/rcpt-b58721a3-33e8-4a62-b51d-a997b46fbce0",
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


# Retrieve Prepaid Card Receipt

Retrieve a single user prepaid-card [receipt](page:working-with-resources/receipts)

```ts
async retrievePrepaidCardReceipt(
  userToken: string,
  destinationToken: string,
  receiptToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceiptResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `destinationToken` | `string` | Template, Required | Auto-generated unique identifier representing a transfer destination, including prepaid cards, bank accounts, paper checks, and other users, prefixed with `dest-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^dest-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `receiptToken` | `string` | Template, Required | Auto-generated unique identifier representing a receipt, prefixed with `rcpt-`.<br>**Constraints**: *Pattern*: `^rcpt-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceiptResult`](../../doc/models/receipt-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const destinationToken = 'dest-4aed86e2-4929-45bf-814d-9030aef21e79';
const receiptToken = 'rcpt-6260c132-5cb1-4e30-8b08-9ce559893acb';
try {
  const { result, ...httpResponse } = await receiptsController.retrievePrepaidCardReceipt(userToken, destinationToken, receiptToken);
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
  "token": "rcpt-b58721a3-33e8-4a62-b51d-a997b46fbce0",
  "type": "PAYMENT",
  "createdOn": "2022-05-04T13:19:38Z",
  "sign": "DEBIT",
  "sourceToken": "acct-4433f040-4ad5-41e5-a6e3-c9611a7be95e",
  "destinationToken": "user-cf6244d7-f6b8-4625-906a-9f21fc8c774b",
  "amount": -1500,
  "currency": "USD",
  "status": "COMPLETE",
  "descriptions": [
    {
      "language": "en-US",
      "translation": "Payment sent to Boutique Partner Cale Cruickshank (Izaiah_McCullough)"
    }
  ],
  "details": {
    "memo": "Payment 1 Memo",
    "note": "Payment 1 Note",
    "correlationToken": "pmnt-1d4ae3b0-09c9-402a-8d38-3de1bfdbd1e3"
  },
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/accounts/acct-4433f040-4ad5-41e5-a6e3-c9611a7be95e/receipts/rcpt-b58721a3-33e8-4a62-b51d-a997b46fbce0",
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


# Retrieve User Receipt

Retrieve a single user [receipt](page:working-with-resources/receipts)

```ts
async retrieveUserReceipt(
  userToken: string,
  receiptToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceiptResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `receiptToken` | `string` | Template, Required | Auto-generated unique identifier representing a receipt, prefixed with `rcpt-`.<br>**Constraints**: *Pattern*: `^rcpt-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceiptResult`](../../doc/models/receipt-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const receiptToken = 'rcpt-6260c132-5cb1-4e30-8b08-9ce559893acb';
try {
  const { result, ...httpResponse } = await receiptsController.retrieveUserReceipt(userToken, receiptToken);
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
  "token": "rcpt-b58721a3-33e8-4a62-b51d-a997b46fbce0",
  "type": "PAYMENT",
  "createdOn": "2022-05-04T13:19:38Z",
  "sign": "DEBIT",
  "sourceToken": "acct-4433f040-4ad5-41e5-a6e3-c9611a7be95e",
  "destinationToken": "user-cf6244d7-f6b8-4625-906a-9f21fc8c774b",
  "amount": -1500,
  "currency": "USD",
  "status": "COMPLETE",
  "descriptions": [
    {
      "language": "en-US",
      "translation": "Payment sent to Boutique Partner Cale Cruickshank (Izaiah_McCullough)"
    }
  ],
  "details": {
    "memo": "Payment 1 Memo",
    "note": "Payment 1 Note",
    "correlationToken": "pmnt-1d4ae3b0-09c9-402a-8d38-3de1bfdbd1e3"
  },
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/accounts/acct-4433f040-4ad5-41e5-a6e3-c9611a7be95e/receipts/rcpt-b58721a3-33e8-4a62-b51d-a997b46fbce0",
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

