/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';
import {
  PrepaidCardReplacementReasons,
  prepaidCardReplacementReasonsSchema,
} from './prepaidCardReplacementReasons';

export interface Payload1 {
  /** [Package](#/rest/models/structures/prepaid-card-package) for the card being displayed, including artwork, packaging, and delivery method */
  cardPackage?: string;
  /** Reason for [prepaid card](page:working-with-resources/prepaid-cards) replacement. */
  cardReplacementReason?: PrepaidCardReplacementReasons;
  [key: string]: unknown;
}

export const payload1Schema: Schema<Payload1> = expandoObject({
  cardPackage: ['cardPackage', optional(string())],
  cardReplacementReason: [
    'cardReplacementReason',
    optional(prepaidCardReplacementReasonsSchema),
  ],
});
