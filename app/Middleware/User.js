'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class User {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
    async handle ({ auth, response }, next) {
        // call next to advance the request
        try {
            await auth.check()
            console.log(auth.check());
            return response.redirect('/list')
        } catch (error) {
            console.log(error);
            await next()
        }
    }
}

module.exports = User
