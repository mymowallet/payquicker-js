/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema';
import {
  EventCategoryTypes,
  eventCategoryTypesSchema,
} from './eventCategoryTypes';
import {
  EventRequirementCategories,
  eventRequirementCategoriesSchema,
} from './eventRequirementCategories';
import {
  EventRequirements,
  eventRequirementsSchema,
} from './eventRequirements';
import { EventStatuses, eventStatusesSchema } from './eventStatuses';
import { EventTypes, eventTypesSchema } from './eventTypes';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import { UserAction, userActionSchema } from './userAction';
import { UserImpact, userImpactSchema } from './userImpact';

export interface EventObject {
  /** [Token](#/rest/models/structures/token) representing the resource */
  token?: string;
  canBeCancelled?: boolean;
  eventRequirementCategoryType?: EventRequirementCategories;
  eventRequirementType?: EventRequirements;
  /** Indicates the current verification status type of an event. */
  eventStatus?: EventStatuses;
  eventType?: EventTypes;
  isComplete?: boolean;
  userAction?: UserAction;
  userImpact?: UserImpact;
  /** The type of Registration tied to a particular event */
  event: EventCategoryTypes;
  links?: HateoasSelfRef[];
  [key: string]: unknown;
}

export const eventObjectSchema: Schema<EventObject> = expandoObject({
  token: ['token', optional(string())],
  canBeCancelled: ['canBeCancelled', optional(boolean())],
  eventRequirementCategoryType: [
    'eventRequirementCategoryType',
    optional(eventRequirementCategoriesSchema),
  ],
  eventRequirementType: [
    'eventRequirementType',
    optional(eventRequirementsSchema),
  ],
  eventStatus: ['eventStatus', optional(eventStatusesSchema)],
  eventType: ['eventType', optional(eventTypesSchema)],
  isComplete: ['isComplete', optional(boolean())],
  userAction: ['userAction', optional(userActionSchema)],
  userImpact: ['userImpact', optional(userImpactSchema)],
  event: ['event', eventCategoryTypesSchema],
  links: ['links', optional(array(lazy(() => hateoasSelfRefSchema)))],
});
