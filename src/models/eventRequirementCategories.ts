/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for EventRequirementCategories
 */
export enum EventRequirementCategories {
  ACKNOWLEDGEMENT = 'ACKNOWLEDGEMENT',
  CATEGORYUNDEFINED = 'CATEGORY_UNDEFINED',
  EXTERNALREFERENCEKYC = 'EXTERNAL_REFERENCE_KYC',
  GEOIPVERIFICATION = 'GEO_IP_VERIFICATION',
  KYC = 'KYC',
  TAX = 'TAX',
  VIDEOCALLKYC = 'VIDEO_CALL_KYC',
}

/**
 * Schema for EventRequirementCategories
 */
export const eventRequirementCategoriesSchema: Schema<EventRequirementCategories> = stringEnum(EventRequirementCategories);
