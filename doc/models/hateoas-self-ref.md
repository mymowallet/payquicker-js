
# Hateoas Self Ref

Indicates the external link with the full URL of the same page on which the link appears.

## Structure

`HateoasSelfRef`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | - |
| `params` | [`HateoasRelationship \| undefined`](../../doc/models/hateoas-relationship.md) | Optional | Indicates the HATEOS relationship between the target and current resources. |

## Example (as JSON)

```json
{
  "href": "string",
  "params": {
    "rel": "self"
  }
}
```

