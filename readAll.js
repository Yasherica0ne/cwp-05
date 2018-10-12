let articles = require('./articles.json');
const log = require('./log');
const { file } = require("./index");
function readAll(req, res, payload, cb) {
    log.log(file, '/api/articles/readall', payload);
    cb(null, articles);
}
exports.readAll = readAll;