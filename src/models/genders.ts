/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Genders
 */
export enum Genders {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
  NOTSPECIFIED = 'NOT_SPECIFIED',
  UNDEFINED = 'UNDEFINED',
  GENDERNEUTRAL = 'GENDER_NEUTRAL',
}

/**
 * Schema for Genders
 */
export const gendersSchema: Schema<Genders> = stringEnum(Genders);
