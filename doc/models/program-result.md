
# Program Result

## Structure

`ProgramResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string` | Required | Auto-generated unique identifier representing a program, prefixed with prog-<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^prog-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `currency` | [`Currencies`](../../doc/models/currencies.md) | Required | [Currency code type](#/rest/models/structures/country) for the object<br>**Default**: `Currencies.USD` |
| `bank` | [`BankTypes`](../../doc/models/bank-types.md) | Required | Name of the bank |
| `type` | [`ProgramTypes`](../../doc/models/program-types.md) | Required | Indicates the type of program associated with a prepaid card |
| `links` | [`HateoasSelfRef[] \| undefined`](../../doc/models/hateoas-self-ref.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `meta` | [`MetadataObject \| undefined`](../../doc/models/metadata-object.md) | Optional | - |

## Example (as JSON)

```json
{
  "token": "prog-6a272eca-9487-d83a-c9e4-8df8c9a7f6eb",
  "currency": "USD",
  "bank": "MCB",
  "type": "CONSUMER_GPR",
  "links": [
    {
      "href": "href8",
      "params": {
        "rel": "rel6"
      }
    },
    {
      "href": "href9",
      "params": {
        "rel": "rel7"
      }
    },
    {
      "href": "href0",
      "params": {
        "rel": "rel8"
      }
    }
  ],
  "meta": {
    "timezone": "timezone2"
  }
}
```

