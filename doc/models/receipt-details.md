
# Receipt Details

## Structure

`ReceiptDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountId` | `string \| undefined` | Optional | Bank account ID for the bank account |
| `bankAccountIdType` | [`BankAccountFields \| undefined`](../../doc/models/bank-account-fields.md) | Optional | Classifies bank account [field types](#/rest/models/structures/bank-account-fields) |
| `bankName` | `string \| undefined` | Optional | Name of the bank the account is registered to |
| `beneficaryName` | `string \| undefined` | Optional | The name of the person chosen to inherit your account |
| `memo` | `string \| undefined` | Optional | Optional internal [memo](#/rest/models/structures/memo) not visible to the user |
| `note` | `string \| undefined` | Optional | [Optional comments](#/rest/models/structures/notes) visible to the user |
| `correlationToken` | `string \| undefined` | Optional | [Token](#/rest/models/structures/token) representing the resource |
| `cardExpiryDate` | `string \| undefined` | Optional | Date that the card will expire |
| `cardHolderName` | `string \| undefined` | Optional | Name of the card's owner |
| `cardNumber` | `string \| undefined` | Optional | Unique number on the prepaid card |

## Example (as JSON)

```json
{
  "cardNumber": "483318******4628",
  "bankAccountId": "bankAccountId0",
  "bankAccountIdType": "BANK_TRANSIT_CODE",
  "bankName": "bankName4",
  "beneficaryName": "beneficaryName0",
  "memo": "memo4"
}
```

