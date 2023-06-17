# Webhooks

# Webhooks

---


The *Webhooks* resource allows you to list, create, receive, and delete webhook subscriptions. It refers to a combination of elements that collectively create a notification and reaction for a change in data. Webhooks are subscriptions to events and send a notification when an event occurs.  When you use our API, you may want to receive webhooks (inbound HTTP(s)) requests from the server.

With this resource, you can perform the following requests:

* `POST`: Create a webhook subscription
* `GET`: Retrieve a webhook subscription
* `PATCH`: Update a webhook subscription
* `DELETE`: Cancel a webhook subscription

For more information, see [Webhooks](page:working-with-resources/webhooks).

```ts
const webhooksController = new WebhooksController(client);
```

## Class Name

`WebhooksController`

## Methods

* [Create Subscription](../../doc/controllers/webhooks.md#create-subscription)
* [Delete Subscription](../../doc/controllers/webhooks.md#delete-subscription)
* [List Subscriptions](../../doc/controllers/webhooks.md#list-subscriptions)
* [Retrieve Subscription](../../doc/controllers/webhooks.md#retrieve-subscription)
* [Update Subscription](../../doc/controllers/webhooks.md#update-subscription)


# Create Subscription

Create a [webhook subscription](page:working-with-resources/webhooks).

```ts
async createSubscription(
  body?: CreateOrUpdateWebhook,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebhookSubscriptionResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateOrUpdateWebhook \| undefined`](../../doc/models/create-or-update-webhook.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WebhookSubscriptionResult`](../../doc/models/webhook-subscription-result.md)

## Example Usage

```ts
const contentType = null;
const body: CreateOrUpdateWebhook = {};
body.namespace = 'PAYMENTQUOTES.ACCEPTED';
body.url = 'https://fawebhookreceiver.azurewebsites.net/api/receive';

try {
  const { result, ...httpResponse } = await webhooksController.createSubscription(body);
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
  "token": "webh-c33c81ab-9fd7-4835-8cf9-1b23473e1163",
  "created": "2020-07-24T14:53:08Z",
  "lastUpdated": "2022-04-13T05:53:48Z",
  "url": "https://fawebhookreceiver.azurewebsites.net/api/receive",
  "namespace": "PAYMENTQUOTES.ACCEPTED",
  "status": "SUBSCRIBED",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/webhooks/webh-c33c81ab-9fd7-4835-8cf9-1b23473e1163",
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


# Delete Subscription

Delete a [webhook subscription](page:working-with-resources/webhooks).

```ts
async deleteSubscription(
  webhookToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebhookSubscriptionResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webhookToken` | `string` | Template, Required | Auto-generated unique identifier representing a webhook subscription, prefixed with `webh-`.<br>**Constraints**: *Pattern*: `^webh-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WebhookSubscriptionResult`](../../doc/models/webhook-subscription-result.md)

## Example Usage

```ts
const webhookToken = 'webh-6260c132-5cb1-4e30-8b08-9ce559893acb';
try {
  const { result, ...httpResponse } = await webhooksController.deleteSubscription(webhookToken);
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
  "token": "webh-c33c81ab-9fd7-4835-8cf9-1b23473e1163",
  "created": "2020-07-24T14:53:08Z",
  "lastUpdated": "2022-04-13T05:53:48Z",
  "url": "https://fawebhookreceiver.azurewebsites.net/api/receive",
  "namespace": "PAYMENTQUOTES.ACCEPTED",
  "status": "SUBSCRIBED",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/webhooks/webh-c33c81ab-9fd7-4835-8cf9-1b23473e1163",
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


# List Subscriptions

Retrieve a list of all [webhook subscriptions](page:working-with-resources/webhooks) that supports filtering, sorting, and pagination through existing mechanisms

```ts
async listSubscriptions(
  page: number,
  pageSize: number,
  filter?: string,
  sort?: string,
  language?: Languages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebhookSubscriptionListResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number` | Query, Required | Page number of specific page to return<br>**Constraints**: `>= 1` |
| `pageSize` | `number` | Query, Required | Number of items to be displayed per page<br>**Constraints**: `>= 1`, `<= 50` |
| `filter` | `string \| undefined` | Query, Optional | Filter request results by specific criteria. |
| `sort` | `string \| undefined` | Query, Optional | Sort request results by specific attribute. |
| `language` | [`Languages \| undefined`](../../doc/models/languages.md) | Query, Optional | Filter results by language type. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WebhookSubscriptionListResult`](../../doc/models/webhook-subscription-list-result.md)

## Example Usage

```ts
const page = 1;
const pageSize = 20;
const language = 'en-US';
try {
  const { result, ...httpResponse } = await webhooksController.listSubscriptions(page, pageSize, None, None, language);
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
      "token": "webh-4cdcb012-8b3f-453f-af4f-c29e6091db92",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2021-08-09T18:31:55Z",
      "url": "https://platform.mypayquicker.build/integrations/internal/twohundred",
      "namespace": "PREPAIDCARDS.UPDATED.STATUS.CLOSEDSTOLEN",
      "status": "SUBSCRIBED",
      "links": [
        {
          "href": "https://platform.mypayquicker.dev/api/v2/webhooks/webh-4cdcb012-8b3f-453f-af4f-c29e6091db92",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2021-08-09T18:31:55Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive",
      "namespace": "PAPERCHECKS.UPDATED.STATUS.REDEEMED",
      "status": "SUBSCRIBED",
      "links": [
        {
          "href": "https://platform.mypayquicker.dev/api/v2/webhooks/webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
          "params": {
            "rel": "self"
          }
        }
      ]
    },
    {
      "namespace": "USERS.CREATED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "USERS.UPDATED.STATUS.REGISTRATIONINPROGRESS",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "USERS.UPDATED.STATUS.REGISTRATIONCOMPLETE",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "USERS.UPDATED.KYC.REQUIRED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "USERS.UPDATED.KYC.PROVIDED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "USERS.UPDATED.KYC.REJECTED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "USERS.UPDATED.KYC.APPROVED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "PREPAIDCARDS.CREATED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "PREPAIDCARDS.UPDATED.STATUS.ACTIVE",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "PREPAIDCARDS.UPDATED.STATUS.CLOSED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "PREPAIDCARDS.UPDATED.STATUS.CLOSEDLOST",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "PREPAIDCARDS.UPDATED.STATUS.PENDINGACTIVATION",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "PREPAIDCARDS.UPDATED.STATUS.PENDINGORDER",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "PREPAIDCARDS.UPDATED.STATUS.SUSPENDED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "BANKACCOUNTS.CREATED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "BANKACCOUNTS.UPDATED.STATUS.APPROVED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "BANKACCOUNTS.UPDATED.STATUS.DELETED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "BANKACCOUNTS.UPDATED.STATUS.COMPLIANCEHOLD",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "BANKACCOUNTS.UPDATED.DETAILS.MODIFIED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "PAPERCHECKS.CREATED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "PAPERCHECKS.UPDATED.STATUS.INPROGRESS",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "PAPERCHECKS.UPDATED.STATUS.CANCELLED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "PAPERCHECKS.UPDATED.DETAILS.MODIFIED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "TRANSFERQUOTES.CREATED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "TRANSFERQUOTES.ACCEPTED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "TRANSFERQUOTES.VOIDED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "TRANSFERQUOTES.CANCELLED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "PAYMENTQUOTES.CREATED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "PAYMENTQUOTES.ACCEPTED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "PAYMENTQUOTES.VOIDED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "PAYMENTQUOTES.CANCELLED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "SPENDBACKQUOTES.CREATED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "SPENDBACKQUOTES.ACCEPTED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "SPENDBACKQUOTES.VOIDED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "SPENDBACKQUOTES.CANCELLED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "RECEIPTS.CREATED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "RECEIPTS.UPDATED.STATUS.COMPLETED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "RECEIPTS.UPDATED.STATUS.CANCELLED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "RECEIPTS.UPDATED.STATUS.REFUNDED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "RECEIPTS.UPDATED.STATUS.FAILED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "RECEIPTS.UPDATED.STATUS.PENDING",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "RECEIPTS.UPDATED.STATUS.SCHEDULED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "RECEIPTS.UPDATED.STATUS.PROCESSING",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "RECEIPTS.UPDATED.STATUS.REVERSED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "RECEIPTS.UPDATED.DETAILS.MODIFIED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "USEREVENTS.STARTED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "USEREVENTS.UPDATED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "USEREVENTS.COMPLETED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "RECEIPTS.UPDATED.STATUS.RETURNED",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
    },
    {
      "namespace": "PREPAIDCARDS.UPDATED.STATUS.PENDINGRELEASE",
      "status": "AVAILABLE",
      "token": "webh-4de2d5d8-f04a-4fe1-bff0-8d343295f24e",
      "created": "2020-07-24T14:53:08Z",
      "lastUpdated": "2020-07-24T14:53:08Z",
      "url": "https://fawebhookreceiver.azurewebsites.net/api/receive"
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
      "href": "https://platform.mypayquicker.dev/api/v2/webhooks",
      "params": {
        "rel": "self"
      }
    }
  ]
}
```


# Retrieve Subscription

Retrieve a single [webhook subscription](page:working-with-resources/webhooks) using the webhook token.

```ts
async retrieveSubscription(
  webhookToken: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebhookSubscriptionResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webhookToken` | `string` | Template, Required | Auto-generated unique identifier representing a webhook subscription, prefixed with `webh-`.<br>**Constraints**: *Pattern*: `^webh-[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WebhookSubscriptionResult`](../../doc/models/webhook-subscription-result.md)

## Example Usage

```ts
const webhookToken = 'webh-6260c132-5cb1-4e30-8b08-9ce559893acb';
try {
  const { result, ...httpResponse } = await webhooksController.retrieveSubscription(webhookToken);
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
  "token": "webh-c33c81ab-9fd7-4835-8cf9-1b23473e1163",
  "created": "2020-07-24T14:53:08Z",
  "lastUpdated": "2022-04-13T05:53:48Z",
  "url": "https://fawebhookreceiver.azurewebsites.net/api/receive",
  "namespace": "PAYMENTQUOTES.ACCEPTED",
  "status": "SUBSCRIBED",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/webhooks/webh-c33c81ab-9fd7-4835-8cf9-1b23473e1163",
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


# Update Subscription

Update a [webhook subscription](page:working-with-resources/webhooks).

```ts
async updateSubscription(
  body?: CreateOrUpdateWebhook,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebhookSubscriptionResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateOrUpdateWebhook \| undefined`](../../doc/models/create-or-update-webhook.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WebhookSubscriptionResult`](../../doc/models/webhook-subscription-result.md)

## Example Usage

```ts
const contentType = null;
const body: CreateOrUpdateWebhook = {};
body.namespace = 'PAYMENTQUOTES.ACCEPTED';
body.url = 'https://fawebhookreceiver.azurewebsites.net/api/receive';

try {
  const { result, ...httpResponse } = await webhooksController.updateSubscription(body);
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
  "token": "webh-c33c81ab-9fd7-4835-8cf9-1b23473e1163",
  "created": "2020-07-24T14:53:08Z",
  "lastUpdated": "2022-04-13T05:53:48Z",
  "url": "https://fawebhookreceiver.azurewebsites.net/api/receive",
  "namespace": "PAYMENTQUOTES.ACCEPTED",
  "status": "SUBSCRIBED",
  "links": [
    {
      "href": "https://platform.mypayquicker.build/api/v2/webhooks/webh-c33c81ab-9fd7-4835-8cf9-1b23473e1163",
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

