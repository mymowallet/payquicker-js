/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Occupations
 */
export enum Occupations {
  ARTS = 'ARTS',
  DESIGN = 'DESIGN',
  EDUCATION = 'EDUCATION',
  ENGINEERING = 'ENGINEERING',
  FINANCE = 'FINANCE',
  GOVERNMENT = 'GOVERNMENT',
  HEALTHCARE = 'HEALTHCARE',
  HOSPITALITYANDTOURISM = 'HOSPITALITY_AND_TOURISM',
  INDEPENDENTBUSINESSOWNER = 'INDEPENDENT_BUSINESS_OWNER',
  LAW = 'LAW',
  MANUFACTURING = 'MANUFACTURING',
  MATH = 'MATH',
  MEDIA = 'MEDIA',
  OFFICEANDADMINSUPPORT = 'OFFICE_AND_ADMIN_SUPPORT',
  SCIENCE = 'SCIENCE',
  SOCIALSERVICES = 'SOCIAL_SERVICES',
  TECHNOLOGY = 'TECHNOLOGY',
  SALES = 'SALES',
}

/**
 * Schema for Occupations
 */
export const occupationsSchema: Schema<Occupations> = stringEnum(Occupations);
