
# Agreement Object

## Structure

`AgreementObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string \| undefined` | Optional | [Token](#/rest/models/structures/token) representing the resource |
| `content` | `string \| undefined` | Optional | Program agreement content |
| `url` | `string \| undefined` | Optional | Full path of the URI to the content for the program agreement |
| `type` | [`AgreementTypes \| undefined`](../../doc/models/agreement-types.md) | Optional | - |
| `links` | [`HateoasSelfRef[] \| undefined`](../../doc/models/hateoas-self-ref.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |

## Example (as JSON)

```json
{
  "type": "CARD_HOLDER_AGREEMENT",
  "token": "token6",
  "content": "content4",
  "url": "url4",
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
  ]
}
```

