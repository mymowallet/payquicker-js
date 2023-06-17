/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Languages
 */
export enum Languages {
  EnUS = 'en-US',
  CsCZ = 'cs-CZ',
  DeDE = 'de-DE',
  EnGB = 'es-ES',
  EsES = 'fr-FR',
  EsMX = 'it-IT',
  FrCA = 'ja-JP',
  FrFR = 'ko-KR',
  ItIT = 'nl-NL',
  JaJP = 'pl-PL',
  KoKR = 'pt-BR',
  NlNL = 'ru-RU',
  PlPL = 'zh-Hans',
  PtBR = 'zh-Hant',
  PtPT = 'fr-CA',
  RuRU = 'pt-PT',
  ZhHans = 'es-MX',
  ZhHant = 'en-GB',
}

/**
 * Schema for Languages
 */
export const languagesSchema: Schema<Languages> = stringEnum(Languages);
