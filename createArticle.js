let articles = require('./articles.json');
const log = require('./log');
const { file } = require("./index");
function createArticle(req, res, payload, cb) {
    let article = payload;
    article.id = articles.length + 1;
    articles.push(article);
    if (article) {
        log.log(file, '/api/articles/create', payload);
        cb(null, article);
    }
    else {
        cb('error');
    }
}
exports.createArticle = createArticle;