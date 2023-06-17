/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Format
 */
export enum Format {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
}

/**
 * Schema for Format
 */
export const formatSchema: Schema<Format> = stringEnum(Format);
