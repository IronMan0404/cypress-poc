/** 
 * Used to setup TypeScript support in cypress 
 */
// const wp = require('@cypress/webpack-preprocessor')
module.exports = (on, config) => {
  const username = process.env.username;

  const password = process.env.password;

  if (!username) {
    throw new Error(`missing USERNAME environment variable`)
  }

  // if (!password) {
  //   throw new Error(`missing PASSWORD environment variable`)
  // }

  // form a very nice object
  // from the spec use Cypress.env('db') to access it
  config.env = {
    username, password
  }

  // make sure to return the updated `config` object
  return config
}
