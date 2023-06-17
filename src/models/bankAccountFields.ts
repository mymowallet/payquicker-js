/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BankAccountFields
 */
export enum BankAccountFields {
  UNDEFINED = 'UNDEFINED',
  BANKACHABA = 'BANK_ACH_ABA',
  BANKBBAN = 'BANK_BBAN',
  BANKBRANCHCODE = 'BANK_BRANCH_CODE',
  BANKBSBCODE = 'BANK_BSB_CODE',
  BANKCITY = 'BANK_CITY',
  BANKCLABE = 'BANK_CLABE',
  BANKCODE = 'BANK_CODE',
  BANKCURP = 'BANK_CURP',
  BANKIBAN = 'BANK_IBAN',
  BANKNAME = 'BANK_NAME',
  BANKNONSWIFTBIC = 'BANK_NON_SWIFT_BIC',
  BANKNUBAN = 'BANK_NUBAN',
  BANKPHONENUMBER = 'BANK_PHONE_NUMBER',
  BANKPOSTALCODE = 'BANK_POSTAL_CODE',
  BANKREGION = 'BANK_REGION',
  BANKRFC = 'BANK_RFC',
  BANKSORTCODE = 'BANK_SORT_CODE',
  BANKSTREETADDRESS = 'BANK_STREET_ADDRESS',
  BANKSWIFTBIC = 'BANK_SWIFT_BIC',
  BANKTRANSITCODE = 'BANK_TRANSIT_CODE',
  BENEFICIARYACCOUNTNUMBER = 'BENEFICIARY_ACCOUNT_NUMBER',
  BENEFICIARYPHONENUMBER = 'BENEFICIARY_PHONE_NUMBER',
  BENEFICIARYTAXID = 'BENEFICIARY_TAX_ID',
  BENEFICIARYNAME = 'BENEFICIARY_NAME',
  BANKBRANCHNAME = 'BANK_BRANCH_NAME',
  BANKPURPOSEOFPAYMENTCODE = 'BANK_PURPOSE_OF_PAYMENT_CODE',
  BANKVALUEADDTAX = 'BANK_VALUE_ADD_TAX',
}

/**
 * Schema for BankAccountFields
 */
export const bankAccountFieldsSchema: Schema<BankAccountFields> = stringEnum(BankAccountFields);