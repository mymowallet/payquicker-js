/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for GovernmentIds
 */
export enum GovernmentIds {
  CURP = 'CURP',
  NATIONALIDCARD = 'NATIONAL_ID_CARD',
  PASSPORT = 'PASSPORT',
  SSN = 'SSN',
}

/**
 * Schema for GovernmentIds
 */
export const governmentIdsSchema: Schema<GovernmentIds> = stringEnum(GovernmentIds);
