/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for FeeResponsibilitySources
 */
export enum FeeResponsibilitySources {
  CREDIT = 'CREDIT',
  SCHEDULE = 'SCHEDULE',
}

/**
 * Schema for FeeResponsibilitySources
 */
export const feeResponsibilitySourcesSchema: Schema<FeeResponsibilitySources> = stringEnum(FeeResponsibilitySources);
