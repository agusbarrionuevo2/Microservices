const { catchedAsync } = require('../utils')
module.exports = {
	getAllByModel: catchedAsync(require('./getAllByModel')),
	getById: catchedAsync(require('./getById'))
}