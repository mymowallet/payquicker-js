
# Create Payment Quote

## Structure

`CreatePaymentQuote`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number \| undefined` | Optional | Allocated money to be sent in the transaction.<br>**Default**: `1.02` |
| `currency` | [`Currencies \| undefined`](../../doc/models/currencies.md) | Optional | [Currency code type](#/rest/models/structures/country) for the object<br>**Default**: `Currencies.USD` |
| `sourceToken` | `string \| undefined` | Optional | Unique identifier representing the [source of funds](#/rest/models/structures/source-token)<br>**Default**: `'acct-3908ab5a-6ce1-474d-8b80-a63a7b147860'`<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^(acct\|user\|dest)-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `destinationToken` | `string \| undefined` | Optional | Unique identifier representing the [destination of funds](#/rest/models/structures/destination-token)<br>**Default**: `'dest-631b200f-665d-4dbe-bd01-3063c9dec97d'`<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^(acct\|dest\|user)-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `note` | `string \| undefined` | Optional | [Optional comments](#/rest/models/structures/notes) visible to the user |
| `memo` | `string \| undefined` | Optional | Optional internal [memo](#/rest/models/structures/memo) not visible to the user |
| `purpose` | [`PaymentPurposes \| undefined`](../../doc/models/payment-purposes.md) | Optional | Used to identify the [purpose of a payment](#/models/structures/payment-object) and impacts reporting and calculated taxable earnings (if utilizing tax services) |
| `clientPaymentId` | `string \| undefined` | Optional | Unique value provided by the client for the [payment](page:working-with-resources/payments), utilized for reference and deduplication.<br>**Default**: `'d4b6f130-1d1c-4ce2-903a-0c1ad128f55e'` |
| `autoAcceptQuote` | `boolean \| undefined` | Optional | Determines whether the quote is [automatically accepted](#/rest/models/structures/auto-accept-quote) or if a `POST` utilizing the token for the quote is required. |
| `notBefore` | `string \| undefined` | Optional | [Transfer](#/rest/models/structures/not-before-or-after) is scheduled and will not process before this time. |
| `notAfter` | `string \| undefined` | Optional | [Transfer](#/rest/models/structures/not-before-or-after) expires if not completed prior to this time. |

## Example (as JSON)

```json
{
  "amount": 1.02,
  "currency": "USD",
  "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
  "destinationToken": "dest-631b200f-665d-4dbe-bd01-3063c9dec97d",
  "clientPaymentId": "d4b6f130-1d1c-4ce2-903a-0c1ad128f55e",
  "notBefore": "04/26/2022 15:16:18",
  "notAfter": "08/24/2019 14:15:22",
  "note": "note4"
}
```

