
# Event Object

## Structure

`EventObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string \| undefined` | Optional | [Token](#/rest/models/structures/token) representing the resource |
| `canBeCancelled` | `boolean \| undefined` | Optional | - |
| `eventRequirementCategoryType` | [`EventRequirementCategories \| undefined`](../../doc/models/event-requirement-categories.md) | Optional | - |
| `eventRequirementType` | [`EventRequirements \| undefined`](../../doc/models/event-requirements.md) | Optional | - |
| `eventStatus` | [`EventStatuses \| undefined`](../../doc/models/event-statuses.md) | Optional | Indicates the current verification status type of an event. |
| `eventType` | [`EventTypes \| undefined`](../../doc/models/event-types.md) | Optional | - |
| `isComplete` | `boolean \| undefined` | Optional | - |
| `userAction` | [`UserAction \| undefined`](../../doc/models/user-action.md) | Optional | - |
| `userImpact` | [`UserImpact \| undefined`](../../doc/models/user-impact.md) | Optional | - |
| `event` | [`EventCategoryTypes`](../../doc/models/event-category-types.md) | Required | The type of Registration tied to a particular event |
| `links` | [`HateoasSelfRef[] \| undefined`](../../doc/models/hateoas-self-ref.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |

## Example (as JSON)

```json
{
  "token": "token6",
  "canBeCancelled": false,
  "eventRequirementCategoryType": "KYC",
  "eventRequirementType": "MFA_REGISTRATION_VALIDATION",
  "eventStatus": "PENDING",
  "event": "WALLET_REGISTRATION"
}
```

