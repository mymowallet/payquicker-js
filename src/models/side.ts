/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Side
 */
export enum Side {
  FRONT = 'FRONT',
  BACK = 'BACK',
}

/**
 * Schema for Side
 */
export const sideSchema: Schema<Side> = stringEnum(Side);
