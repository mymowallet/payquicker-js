/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BankTypes
 */
export enum BankTypes {
  MCB = 'MCB',
  PEOPLES = 'PEOPLES',
  PPS = 'PPS',
  TOKA = 'TOKA',
  UNDEFINED = 'UNDEFINED',
  CHOICELTD = 'CHOICELTD',
  FLEX = 'FLEX',
  REWARDS = 'REWARDS',
  PATHWARD = 'PATHWARD',
}

/**
 * Schema for BankTypes
 */
export const bankTypesSchema: Schema<BankTypes> = stringEnum(BankTypes);
