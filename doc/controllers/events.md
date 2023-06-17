# Events

Event-related operations

```ts
const eventsController = new EventsController(client);
```

## Class Name

`EventsController`

## Methods

* [List Events](../../doc/controllers/events.md#list-events)
* [Retrieve Event](../../doc/controllers/events.md#retrieve-event)


# List Events

Retrieve a list of [user events](page:working-with-resources/user#list-user-events) that supports filtering, sorting, and pagination through existing mechanisms.

```ts
async listEvents(
  userToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EventListResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EventListResult`](../../doc/models/event-list-result.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
try {
  const { result, ...httpResponse } = await eventsController.listEvents(userToken);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "payload": [
    {
      "token": "evnt-4e2f6663-3e37-4bb8-b8f8-4ab1b02bd292",
      "canBeCancelled": false,
      "eventRequirementCategoryType": "CATEGORY_UNDEFINED",
      "eventRequirementType": "TYPE_UNDEFINED",
      "eventStatus": "UNDEFINED",
      "eventType": "REQUIRED",
      "isComplete": false,
      "userAction": "NO_ACTION",
      "userImpact": "NO_IMPACT",
      "event": "WALLET_REGISTRATION",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-ae92315b-6190-4e56-bdf5-c0189ac420a1/events/evnt-4e2f6663-3e37-4bb8-b8f8-4ab1b02bd292",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "evnt-fe7c9063-0c86-400e-89e3-068c2f7e4f65",
      "canBeCancelled": false,
      "eventRequirementCategoryType": "CATEGORY_UNDEFINED",
      "eventRequirementType": "TYPE_UNDEFINED",
      "eventStatus": "UNDEFINED",
      "eventType": "REQUIRED",
      "isComplete": false,
      "userAction": "NO_ACTION",
      "userImpact": "NO_IMPACT",
      "event": "WALLET_REGISTRATION",
      "links": [
        {
          "href": "https://platform.mypayquicker.build/api/v2/users/user-ae92315b-6190-4e56-bdf5-c0189ac420a1/events/evnt-fe7c9063-0c86-400e-89e3-068c2f7e4f65",
          "params": {
            "rel": "self"
          }
        }
      ]
    }
  ],
  "meta": {
    "pageNo": "1",
    "pageSize": "100",
    "pageCount": "0",
    "recordCount": "0",
    "timezone": "GMT"
  },
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-ae92315b-6190-4e56-bdf5-c0189ac420a1/events",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# Retrieve Event

Retrieve a single [user event](page:working-with-resources/user#get-user-event).

```ts
async retrieveEvent(
  userToken: string,
  eventToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UsersEventsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userToken` | `string` | Template, Required | Auto-generated unique identifier representing a user, prefixed with `user-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^user-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `eventToken` | `string` | Template, Required | Auto-generated unique identifier representing an event, prefixed with `evnt-`.<br>**Constraints**: *Minimum Length*: `41`, *Maximum Length*: `41`, *Pattern*: `^evnt-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UsersEventsResponse`](../../doc/models/users-events-response.md)

## Example Usage

```ts
const userToken = 'user-2bbfc967-d12e-4647-a887-d905172fb4bc';
const eventToken = 'evnt-28491de2-5b22-4e30-028a-45901a10baa9';
try {
  const { result, ...httpResponse } = await eventsController.retrieveEvent(userToken, eventToken);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "token": "evnt-4e2f6663-3e37-4bb8-b8f8-4ab1b02bd292",
  "canBeCancelled": false,
  "eventRequirementCategoryType": "CATEGORY_UNDEFINED",
  "eventRequirementType": "TYPE_UNDEFINED",
  "eventStatus": "UNDEFINED",
  "eventType": "REQUIRED",
  "isComplete": false,
  "userAction": "NO_ACTION",
  "userImpact": "NO_IMPACT",
  "event": "WALLET_REGISTRATION",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/users/user-ae92315b-6190-4e56-bdf5-c0189ac420a1/events/evnt-4e2f6663-3e37-4bb8-b8f8-4ab1b02bd292",
      "params": {
        "rel": "self"
      }
    }
  ],
  "meta": {
    "timezone": "GMT"
  }
}
```

