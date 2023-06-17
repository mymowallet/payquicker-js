
# Authorization Object

## Structure

`AuthorizationObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`PrepaidCardAuthorizations \| undefined`](../../doc/models/prepaid-card-authorizations.md) | Optional | Financial types for the [prepaid card](page:working-with-resources/prepaid-cards) authorization. |
| `createdOn` | `string \| undefined` | Optional | Time object was [created](#/rest/models/structures/created-on)(#/rest/models/structures/created-on) |
| `sign` | [`Signs \| undefined`](../../doc/models/signs.md) | Optional | Receipt sign types |
| `sourceToken` | `string \| undefined` | Optional | Unique identifier representing the [source of funds](#/rest/models/structures/source-token)<br>**Default**: `'acct-3908ab5a-6ce1-474d-8b80-a63a7b147860'`<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^(acct\|user\|dest)-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `amount` | `number \| undefined` | Optional | Allocated money to be sent in the transaction.<br>**Default**: `1.02` |
| `currency` | [`Currencies \| undefined`](../../doc/models/currencies.md) | Optional | [Currency code type](#/rest/models/structures/country) for the object<br>**Default**: `Currencies.USD` |
| `status` | [`ReceiptStatuses \| undefined`](../../doc/models/receipt-statuses.md) | Optional | Receipt status types |
| `descriptions` | [`Translation[] \| undefined`](../../doc/models/translation.md) | Optional | - |
| `authDate` | `string \| undefined` | Optional | Date that the auth was created |
| `reference` | `string \| undefined` | Optional | [Provider reference](#/rest/models/structures/identity-verification-provider-reference) used for performing identity checks for the provider |

## Example (as JSON)

```json
{
  "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
  "amount": 1.02,
  "currency": "USD",
  "type": "BANK_TRANSFER_RETURN",
  "createdOn": "2016-03-13T12:52:32.123Z",
  "sign": "DEBIT"
}
```

