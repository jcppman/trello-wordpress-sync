const pick = require('lodash/pick');
const keys = require('lodash/keys');
const get = require('lodash/get');
const env = get(require('./package.json'), 'now.env', {});

/*
* secrets.json schema:
* {
*   "trelloApiKey": "",
*   "trelloToken": "",
*   "wpToken": "",
*   "idModel": ""
* }
**/
const secrets = process.env.NODE_ENV !== 'production' ? require('./secrets.json') : pick(
  process.env,
  ...keys(env),
);

module.exports = {
  boradId: '58b29befc4340c7d997e565a',
  listId: '58b29c85263bb333b29f7396',
  labels: ['58b29befced82109ff77f8d1', '5b03841f9333e75a4043aa16'],
  site: 'alpaca666.com',
  postId: 107,
  ...secrets,
};
