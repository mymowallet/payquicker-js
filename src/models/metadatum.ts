/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema';
import { Name, nameSchema } from './name';

export interface Metadatum {
  dataType?: string;
  fieldType?: string;
  name?: Name[];
  [key: string]: unknown;
}

export const metadatumSchema: Schema<Metadatum> = expandoObject({
  dataType: ['dataType', optional(string())],
  fieldType: ['fieldType', optional(string())],
  name: ['name', optional(array(lazy(() => nameSchema)))],
});
