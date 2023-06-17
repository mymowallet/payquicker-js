
# Payload 1

## Structure

`Payload1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardPackage` | `string \| undefined` | Optional | [Package](#/rest/models/structures/prepaid-card-package) for the card being displayed, including artwork, packaging, and delivery method |
| `cardReplacementReason` | [`PrepaidCardReplacementReasons \| undefined`](../../doc/models/prepaid-card-replacement-reasons.md) | Optional | Reason for [prepaid card](page:working-with-resources/prepaid-cards) replacement. |

## Example (as JSON)

```json
{
  "cardPackage": "71290",
  "cardReplacementReason": "COMPROMISED"
}
```

