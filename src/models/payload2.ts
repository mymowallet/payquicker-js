/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';
import {
  PrepaidCardStatuses,
  prepaidCardStatusesSchema,
} from './prepaidCardStatuses';

export interface Payload2 {
  /** [Package](#/rest/models/structures/prepaid-card-package) for the card being displayed, including artwork, packaging, and delivery method */
  cardPackage?: string;
  /** Current [status](#/rest/models/structures/prepaid-card-status) of the prepaid card */
  status?: PrepaidCardStatuses;
  [key: string]: unknown;
}

export const payload2Schema: Schema<Payload2> = expandoObject({
  cardPackage: ['cardPackage', optional(string())],
  status: ['status', optional(prepaidCardStatusesSchema)],
});
