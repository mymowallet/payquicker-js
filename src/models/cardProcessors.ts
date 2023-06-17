/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CardProcessors
 */
export enum CardProcessors {
  CardProcessorTypeFIS = 'CardProcessorType_FIS',
  CardProcessorTypeFlex = 'CardProcessorType_Flex',
  CardProcessorTypeFUTURE = 'CardProcessorType_FUTURE',
  CardProcessorTypePPS = 'CardProcessorType_PPS',
  CardProcessorTypeRewards = 'CardProcessorType_Rewards',
  CardProcessorTypeTOKA = 'CardProcessorType_TOKA',
  CardProcessorTypeUNDEFINED = 'CardProcessorType_UNDEFINED',
}

/**
 * Schema for CardProcessors
 */
export const cardProcessorsSchema: Schema<CardProcessors> = stringEnum(CardProcessors);
