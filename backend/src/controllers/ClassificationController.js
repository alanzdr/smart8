const googleFuncion = require('../functions')

module.exports = {
  async read(req, res) {
    googleFuncion.main(req, res);
  }
}