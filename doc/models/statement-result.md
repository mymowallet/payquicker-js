
# Statement Result

## Structure

`StatementResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fileContents` | `string \| undefined` | Optional | The string representation of the file content. |
| `filename` | `string \| undefined` | Optional | The name given to a computer file in order to distinguish it from other files |
| `mimeType` | `string \| undefined` | Optional | A label used to identify a type of data.  Acts like a file extension on the internet. |
| `token` | `string \| undefined` | Optional | [Token](#/rest/models/structures/token) representing the resource |
| `userToken` | `string \| undefined` | Optional | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `prepaidCardToken` | `string \| undefined` | Optional | Auto-generated unique identifier representing a dest, prefixed with dest-. |
| `from` | `string \| undefined` | Optional | Beginning date and time of a prepaid card statement |
| `to` | `string \| undefined` | Optional | Ending date and time of a prepaid card statement |
| `links` | [`HateoasSelfRef[] \| undefined`](../../doc/models/hateoas-self-ref.md) | Optional | - |
| `meta` | [`MetadataObject \| undefined`](../../doc/models/metadata-object.md) | Optional | - |

## Example (as JSON)

```json
{
  "filename": "exampleFile.jpg",
  "mimeType": "image/jpeg",
  "userToken": "user-2bbfc967-d12e-4647-a887-d905172fb4bc",
  "fileContents": "fileContents4",
  "token": "token6"
}
```

