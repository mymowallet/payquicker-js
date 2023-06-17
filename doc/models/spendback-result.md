
# Spendback Result

## Structure

`SpendbackResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string \| undefined` | Optional | [Token](#/rest/models/structures/token) representing the resource |
| `amount` | `number \| undefined` | Optional | Allocated money to be sent in the transaction.<br>**Default**: `1.02` |
| `autoAcceptQuote` | `boolean \| undefined` | Optional | Determines whether the quote is [automatically accepted](#/rest/models/structures/auto-accept-quote) or if a `POST` utilizing the token for the quote is required. |
| `clientSpendbackId` | `string \| undefined` | Optional | [Unique value](#/rest/models/structures/client-transfer-id) provided by the client for the spendback |
| `created` | `string \| undefined` | Optional | Time object was [created](#/rest/models/structures/created-on)(#/rest/models/structures/created-on) |
| `currency` | [`Currencies \| undefined`](../../doc/models/currencies.md) | Optional | [Currency code type](#/rest/models/structures/country) for the object<br>**Default**: `Currencies.USD` |
| `destinationToken` | `string \| undefined` | Optional | Unique identifier representing the [destination of funds](#/rest/models/structures/destination-token)<br>**Default**: `'dest-631b200f-665d-4dbe-bd01-3063c9dec97d'`<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^(acct\|dest\|user)-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `fee` | [`SpendbackFee \| undefined`](../../doc/models/spendback-fee.md) | Optional | - |
| `memo` | `string \| undefined` | Optional | Optional internal [memo](#/rest/models/structures/memo) not visible to the user |
| `note` | `string \| undefined` | Optional | [Optional comments](#/rest/models/structures/notes) visible to the user |
| `purpose` | [`PaymentPurposes \| undefined`](../../doc/models/payment-purposes.md) | Optional | Used to identify the [purpose of a payment](#/models/structures/payment-object) and impacts reporting and calculated taxable earnings (if utilizing tax services) |
| `sourceToken` | `string \| undefined` | Optional | Unique identifier representing the [source of funds](#/rest/models/structures/source-token)<br>**Default**: `'acct-3908ab5a-6ce1-474d-8b80-a63a7b147860'`<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^(acct\|user\|dest)-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `status` | [`TransferStatuses \| undefined`](../../doc/models/transfer-statuses.md) | Optional | Current status of a [transfer](#/rest/models/structures/transfer) |
| `receiptToken` | `string \| undefined` | Optional | Auto-generated unique identifier representing a receipt, prefixed with `rcpt-`.<br>**Default**: `'rcpt-b7fda294-8d3a-48e8-9a11-ef7be07a732c'`<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^rcpt-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `links` | [`HateoasSelfRef[] \| undefined`](../../doc/models/hateoas-self-ref.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `meta` | [`MetadataObject \| undefined`](../../doc/models/metadata-object.md) | Optional | - |

## Example (as JSON)

```json
{
  "amount": 1.02,
  "currency": "USD",
  "destinationToken": "dest-631b200f-665d-4dbe-bd01-3063c9dec97d",
  "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
  "receiptToken": "rcpt-b7fda294-8d3a-48e8-9a11-ef7be07a732c",
  "token": "token6",
  "autoAcceptQuote": false,
  "clientSpendbackId": "clientSpendbackId6",
  "created": "2016-03-13T12:52:32.123Z"
}
```

