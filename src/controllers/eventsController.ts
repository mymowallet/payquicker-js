/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  EventListResult,
  eventListResultSchema,
} from '../models/eventListResult';
import {
  UsersEventsResponse,
  usersEventsResponseSchema,
} from '../models/usersEventsResponse';
import { string } from '../schema';
import { BaseController } from './baseController';

export class EventsController extends BaseController {
  /**
   * Retrieve a list of [user events](page:working-with-resources/user#list-user-events) that supports
   * filtering, sorting, and pagination through existing mechanisms.
   *
   *
   * @param userToken  Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @return Response from the API call
   */
  async listEvents(
    userToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EventListResult>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ userToken: [userToken, string()] });
    req.appendTemplatePath`/users/${mapped.userToken}/events`;
    return req.callAsJson(eventListResultSchema, requestOptions);
  }

  /**
   * Retrieve a single [user event](page:working-with-resources/user#get-user-event).
   *
   *
   * @param userToken   Auto-generated unique identifier representing a user, prefixed with `user-`.
   * @param eventToken  Auto-generated unique identifier representing an event, prefixed with `evnt-`.
   * @return Response from the API call
   */
  async retrieveEvent(
    userToken: string,
    eventToken: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UsersEventsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userToken: [userToken, string()],
      eventToken: [eventToken, string()],
    });
    req.appendTemplatePath`/users/${mapped.userToken}/events/${mapped.eventToken}`;
    return req.callAsJson(usersEventsResponseSchema, requestOptions);
  }
}
