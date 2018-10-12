'use strict';

/**
 * Respostacomentario.js controller
 *
 * @description: A set of functions called "actions" for managing `Respostacomentario`.
 */

module.exports = {

  /**
   * Retrieve respostacomentario records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.respostacomentario.search(ctx.query);
    } else {
      return strapi.services.respostacomentario.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a respostacomentario record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.respostacomentario.fetch(ctx.params);
  },

  /**
   * Count respostacomentario records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.respostacomentario.count(ctx.query);
  },

  /**
   * Create a/an respostacomentario record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.respostacomentario.add(ctx.request.body);
  },

  /**
   * Update a/an respostacomentario record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.respostacomentario.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an respostacomentario record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.respostacomentario.remove(ctx.params);
  }
};
