
# Create Transfer Quote

## Structure

`CreateTransferQuote`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sourceToken` | `string \| undefined` | Optional | Unique identifier representing the [source of funds](#/rest/models/structures/source-token)<br>**Default**: `'acct-3908ab5a-6ce1-474d-8b80-a63a7b147860'`<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^(acct\|user\|dest)-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `destinationToken` | `string \| undefined` | Optional | Unique identifier representing the [destination of funds](#/rest/models/structures/destination-token)<br>**Default**: `'dest-631b200f-665d-4dbe-bd01-3063c9dec97d'`<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^(acct\|dest\|user)-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `note` | `string \| undefined` | Optional | [Optional comments](#/rest/models/structures/notes) visible to the user |
| `memo` | `string \| undefined` | Optional | Optional internal [memo](#/rest/models/structures/memo) not visible to the user |
| `clientTransferId` | `string \| undefined` | Optional | [Unique value](#/rest/models/structures/client-transfer-id) provided by the client for the transfer, utilized for reference and deduplication. |
| `destinationAmount` | `number \| undefined` | Optional | Allocated money to be sent in the transaction. |
| `destinationCurrency` | [`Currencies \| undefined`](../../doc/models/currencies.md) | Optional | [Currency code type](#/rest/models/structures/country) for the object<br>**Default**: `Currencies.USD` |

## Example (as JSON)

```json
{
  "sourceToken": "acct-3908ab5a-6ce1-474d-8b80-a63a7b147860",
  "destinationToken": "dest-631b200f-665d-4dbe-bd01-3063c9dec97d",
  "destinationCurrency": "USD",
  "note": "note4",
  "memo": "memo4",
  "clientTransferId": "clientTransferId2"
}
```

