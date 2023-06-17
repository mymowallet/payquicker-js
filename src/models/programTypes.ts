/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ProgramTypes
 */
export enum ProgramTypes {
  COMMERCIAL = 'COMMERCIAL',
  CONSUMERDISBURSEMENT = 'CONSUMER_DISBURSEMENT',
  CONSUMERGPR = 'CONSUMER_GPR',
  CONSUMERLOYALTY = 'CONSUMER_LOYALTY',
}

/**
 * Schema for ProgramTypes
 */
export const programTypesSchema: Schema<ProgramTypes> = stringEnum(ProgramTypes);
