
# Webhook Subscription Object

Webhook subscription object

## Structure

`WebhookSubscriptionObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string \| undefined` | Optional | [Token](#/rest/models/structures/token) representing the resource |
| `created` | `string \| undefined` | Optional | Time object was [created](#/rest/models/structures/created-on)(#/rest/models/structures/created-on) |
| `lastUpdated` | `string \| undefined` | Optional | Date and time that the object was last updated |
| `url` | `string \| undefined` | Optional | Full path of the URI used for this object |
| `namespace` | [`WebhookNamespaces \| undefined`](../../doc/models/webhook-namespaces.md) | Optional | Namespace used to identify and refer to the object |
| `status` | [`WebhookSubscriptionStatuses \| undefined`](../../doc/models/webhook-subscription-statuses.md) | Optional | - |
| `links` | [`HateoasSelfRef[] \| undefined`](../../doc/models/hateoas-self-ref.md) | Optional | - |

## Example (as JSON)

```json
{
  "token": "token6",
  "created": "2016-03-13T12:52:32.123Z",
  "lastUpdated": "2016-03-13T12:52:32.123Z",
  "url": "url4",
  "namespace": "SPENDBACKQUOTES.VOIDED"
}
```

