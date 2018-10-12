'use strict';

/**
 * Jogador.js controller
 *
 * @description: A set of functions called "actions" for managing `Jogador`.
 */

module.exports = {

  /**
   * Retrieve jogador records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.jogador.search(ctx.query);
    } else {
      return strapi.services.jogador.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a jogador record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.jogador.fetch(ctx.params);
  },

  /**
   * Count jogador records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.jogador.count(ctx.query);
  },

  /**
   * Create a/an jogador record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.jogador.add(ctx.request.body);
  },

  /**
   * Update a/an jogador record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.jogador.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an jogador record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.jogador.remove(ctx.params);
  }
};
