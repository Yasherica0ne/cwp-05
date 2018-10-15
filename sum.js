const log = require('./log');
const file = require('fs').createWriteStream('./logfile.log');
function sum(req, res, payload, cb) {
    const result = { c: payload.a + payload.b };
    log.log(file, '/api/articles/sum', payload);
    cb(null, result);
}
exports.sum = sum;