
# Payload

## Structure

`Payload`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardPackage` | `string \| undefined` | Optional | [Package](#/rest/models/structures/prepaid-card-package) for the card being displayed, including artwork, packaging, and delivery method |
| `programToken` | `string \| undefined` | Optional | Auto-generated unique identifier representing a program, prefixed with prog-<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^prog-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `cardReferenceNumber` | `string \| undefined` | Optional | Number that is printed on the back of a plastic card. |

## Example (as JSON)

```json
{
  "cardPackage": "71290",
  "programToken": "prog-6a272eca-9487-d83a-c9e4-8df8c9a7f6eb",
  "cardReferenceNumber": "cardReferenceNumber6"
}
```

