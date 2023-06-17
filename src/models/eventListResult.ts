/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import { EventObject, eventObjectSchema } from './eventObject';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import {
  ListMetadataObject,
  listMetadataObjectSchema,
} from './listMetadataObject';

export interface EventListResult {
  payload: EventObject[];
  meta: ListMetadataObject;
  links: HateoasSelfRef[];
  [key: string]: unknown;
}

export const eventListResultSchema: Schema<EventListResult> = expandoObject({
  payload: ['payload', array(lazy(() => eventObjectSchema))],
  meta: ['meta', lazy(() => listMetadataObjectSchema)],
  links: ['links', array(lazy(() => hateoasSelfRefSchema))],
});
