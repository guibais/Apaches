'use strict';

/**
 * Partida.js controller
 *
 * @description: A set of functions called "actions" for managing `Partida`.
 */

module.exports = {

  /**
   * Retrieve partida records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.partida.search(ctx.query);
    } else {
      return strapi.services.partida.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a partida record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.partida.fetch(ctx.params);
  },

  /**
   * Count partida records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.partida.count(ctx.query);
  },

  /**
   * Create a/an partida record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.partida.add(ctx.request.body);
  },

  /**
   * Update a/an partida record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.partida.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an partida record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.partida.remove(ctx.params);
  }
};
