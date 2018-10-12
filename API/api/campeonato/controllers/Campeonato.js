'use strict';

/**
 * Campeonato.js controller
 *
 * @description: A set of functions called "actions" for managing `Campeonato`.
 */

module.exports = {

  /**
   * Retrieve campeonato records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.campeonato.search(ctx.query);
    } else {
      return strapi.services.campeonato.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a campeonato record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.campeonato.fetch(ctx.params);
  },

  /**
   * Count campeonato records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.campeonato.count(ctx.query);
  },

  /**
   * Create a/an campeonato record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.campeonato.add(ctx.request.body);
  },

  /**
   * Update a/an campeonato record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.campeonato.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an campeonato record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.campeonato.remove(ctx.params);
  }
};
