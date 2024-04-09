'use strict';

/**
 * site-parameter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::site-parameter.site-parameter');
