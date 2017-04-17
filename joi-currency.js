'use strict';

const Joi = require('joi');

module.exports = {
    base: Joi.string(),
    name: 'string',
    language: {
        currency: 'needs to be a currency code'
    },
    rules: [
        {
            name: 'currency',
            validate(params, value, state, options) {

                const currencies = [
                    'ALL', 'AFN', 'ARS', 'AWG', 'AUD', 'AZN',
                    'BSD', 'BBD', 'BYN', 'BZD', 'BMD', 'BOB', 'BAM', 'BWP', 'BGN', 'BRL', 'BND',
                    'KHR', 'CAD', 'KYD', 'CLP', 'CNY', 'COP', 'CRC', 'HRK', 'CUP', 'CZK',
                    'DKK', 'DOP',
                    'XCD', 'EGP', 'SVC', 'EUR',
                    'FKP', 'FJD',
                    'GHS', 'GIP', 'GTQ', 'GGP', 'GYD',
                    'HNL', 'HKD', 'HUF',
                    'ISK', 'INR', 'IDR', 'IRR', 'IMP', 'ILS',
                    'JMD', 'JPY', 'JEP',
                    'KZT', 'KPW', 'KRW', 'KGS',
                    'LAK', 'LBP', 'LRD',
                    'MKD', 'MYR', 'MUR', 'MXN', 'MNT', 'MZN',
                    'NAD', 'NPR', 'ANG', 'NZD', 'NIO', 'NGN', 'KPW', 'NOK',
                    'OMR',
                    'PKR', 'PAB', 'PYG', 'PEN', 'PHP', 'PLN',
                    'QAR',
                    'RON', 'RUB',
                    'SHP', 'SAR', 'RSD', 'SCR', 'SGD', 'SBD', 'SOS', 'ZAR', 'KRW', 'LKR', 'SEK', 'CHF', 'SRD', 'SYP',
                    'TWD', 'THB', 'TTD', 'TRY', 'TVD',
                    'UAH', 'GBP', 'USD', 'UYU', 'UZS',
                    'VEF', 'VND',
                    'YER',
                    'ZWD'
                ];

                value = value.toUpperCase();

                if (currencies.indexOf(value) < 0) {
                    return this.createError('string.currency', { v: value }, state, options);
                }

                return value; // Everything is OK
            }
        }
    ]
};