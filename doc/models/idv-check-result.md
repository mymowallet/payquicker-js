
# Idv Check Result

## Structure

`IdvCheckResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string \| undefined` | Optional | [Token](#/rest/models/structures/token) representing the resource |
| `idvProviderReference` | `string \| undefined` | Optional | [Provider reference](#/rest/models/structures/identity-verification-provider-reference) used for performing identity checks for the provider |
| `idvResult` | [`IdentityVerificationResultTypes \| undefined`](../../doc/models/identity-verification-result-types.md) | Optional | Result type of [verification](#/rest/models/structures/identity-verification-result-type) |
| `idvSubResult` | [`IdentityVerificationResultSubTypes \| undefined`](../../doc/models/identity-verification-result-sub-types.md) | Optional | Sub result type of [verification](#/rest/models/structures/identity-verification-sub-result-type) |
| `idvProvider` | [`IdentityVerificationProviders \| undefined`](../../doc/models/identity-verification-providers.md) | Optional | Provider types of [verification](#/rest/models/structures/identity-verification-provider-type) that can be used for performing identity checks |
| `createdOn` | `string \| undefined` | Optional | Time object was [created](#/rest/models/structures/created-on)(#/rest/models/structures/created-on) |
| `raw` | `string \| undefined` | Optional | Contains the raw (unprocessed) [output](/#/rest/models/structures/identity-verification-provider-raw-output) from the IDV provider |
| `idvCheckType` | `string \| undefined` | Optional | [Type](#/rest/models/structures/identity-verification-check-type) of verification used for performing an identity check |
| `idvDisposition` | `string \| undefined` | Optional | Disposition type of [verification](#/rest/models/structures/identity-verification-disposition-type) |
| `links` | [`HateoasSelfRef[] \| undefined`](../../doc/models/hateoas-self-ref.md) | Optional | - |
| `meta` | [`MetadataObject \| undefined`](../../doc/models/metadata-object.md) | Optional | - |

## Example (as JSON)

```json
{
  "token": "token6",
  "idvProviderReference": "idvProviderReference2",
  "idvResult": "FAIL",
  "idvSubResult": "HARD",
  "idvProvider": "FISIDOLOGY"
}
```

