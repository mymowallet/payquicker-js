
# Fx Rate

Exchange rate

## Structure

`FxRate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `destinationAmount` | `number \| undefined` | Optional | Allocated money to be sent in the transaction. |
| `destinationCurrency` | [`Currencies \| undefined`](../../doc/models/currencies.md) | Optional | [Currency code type](#/rest/models/structures/country) for the object<br>**Default**: `Currencies.USD` |
| `rate` | `number \| undefined` | Optional | Exchange [rate](#/rest/models/structures/rate)<br>**Constraints**: `>= 0`, `<= 1` |
| `sourceAmount` | `number \| undefined` | Optional | Allocated money to be sent in the transaction.<br>**Default**: `1.02` |
| `sourceCurrency` | [`Currencies \| undefined`](../../doc/models/currencies.md) | Optional | [Currency code type](#/rest/models/structures/country) for the object<br>**Default**: `Currencies.USD` |

## Example (as JSON)

```json
{
  "destinationCurrency": "USD",
  "rate": 0.85,
  "sourceAmount": 1.02,
  "sourceCurrency": "USD",
  "destinationAmount": 38.94
}
```

