
# Prepaid Card Statuses

Current [status](#/rest/models/structures/prepaid-card-status) of the prepaid card

## Enumeration

`PrepaidCardStatuses`

## Fields

| Name | Description |
|  --- | --- |
| `aCTIVATED` | The prepaid card is active and ready to use. |
| `cLOSED` | The prepaid card is damaged and is no longer usable. |
| `cLOSEDLOSTSTOLENDAMAGED` | The prepaid card is expired and is no longer usable. |
| `cOMPLIANCEHOLD` | The prepaid card has been suspended for compliance reasons. |
| `eXPIRED` | The expiration date set for the prepaid card has elapsed. The prepaid card will no longer be accepted. |
| `pENDINGACTIVATION` | The prepaid card has been created but has not yet been activated. Instantly issued cards are activated automatically.Plastic cards are activated upon delivery and require the CVV on the back of the prepaid card to complete. |
| `qUEUED` | The prepaid card is awaiting order placement and will transition to PENDING_ACTIVATION once ordered. |
| `sTAGED` | TO BE DONE |
| `sUSPENDED` | The prepaid card has been suspended and may neither send nor receive funds. |

