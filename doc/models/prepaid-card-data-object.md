
# Prepaid Card Data Object

## Structure

`PrepaidCardDataObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardNumber` | `number \| undefined` | Optional | Unique number on the prepaid card |
| `cvvNumber` | `string \| undefined` | Optional | Three- or four-digit [Card Verification Value (CVV)](#/rest/models/structures/cvv) number displayed on the back of a credit or debit card |
| `expiration` | `string \| undefined` | Optional | Date that the card will expire |
| `nameOnCard` | `string \| undefined` | Optional | Name of the card's owner |
| `token` | `string \| undefined` | Optional | A token used to reveal prepaid card information in the form of image data (base64) or JSON. |
| `links` | [`HateoasSelfRef[] \| undefined`](../../doc/models/hateoas-self-ref.md) | Optional | - |

## Example (as JSON)

```json
{
  "token": "iEureKuLW1gZQ7d3/2ijX4+6bDZuUwpp2QmhPfedarncS2Cde1Ebmby+dxfeP7+Iaty9YYCLFwY42HHOm03dliH7Jp0Yo/sjOb/FmSQ3IOVYpNSYBcZYGmgpyBEG9gPa2HRIKK8+NcPVjjb+0gfqFAI52Emk0P+VPaBZ2NgsENV/I4MuIkWsUXha3QZh49a0EK3wO14jwR4BosY/rk0/9F5uJEWUjv8gvPej+dCFyMnybjj6jPK9f/gFlPUYVHuS",
  "cardNumber": 190.66,
  "cvvNumber": "cvvNumber2",
  "expiration": "expiration6",
  "nameOnCard": "nameOnCard2"
}
```

