
# Balance Result

## Structure

`BalanceResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | Amount of money in the account<br>**Default**: `0` |
| `currency` | [`Currencies`](../../doc/models/currencies.md) | Required | [Currency code type](#/rest/models/structures/country) for the object<br>**Default**: `Currencies.USD` |
| `formattedAmount` | `string` | Required | Combination of the bank account amount and currency type<br>**Default**: `'$0.05 USD'` |
| `token` | `string` | Required | [Token](#/rest/models/structures/token) representing the resource |
| `links` | [`HateoasSelfRef[] \| undefined`](../../doc/models/hateoas-self-ref.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `meta` | [`MetadataObject \| undefined`](../../doc/models/metadata-object.md) | Optional | - |

## Example (as JSON)

```json
{
  "amount": 0.0,
  "currency": "USD",
  "formattedAmount": "$0.05 USD",
  "token": "token6",
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

