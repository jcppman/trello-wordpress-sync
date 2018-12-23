const axios = require('axios');
const includes = require('lodash/includes');
const get = require('lodash/get');
const find = require('lodash/find');

const {
  trelloApiKey: apiKey,
  trelloToken: token,
  boardId,
  listId,
  labels,
} = require('./config');

module.exports = async function getGigs() {
  const url = `https://api.trello.com/1/lists/${listId}/cards?key=${apiKey}&token=${token}&attachments=true`;
  const response = await axios(url);
  if(response.status !== 200) {
    throw Error(response.statusText);
  }

  return response
    .data
    .filter(g => includes(g.idLabels, ...labels))
    .map((g) => {
      const partials = g.name.split('|').filter(p => !!p).map(t => t.trim());
      return {
        id: g.id,
        date: partials[0],
        location: partials[1],
        poster: get(find(g.attachments, { isUpload: true }), 'url'),
        url: get(find(g.attachments, { isUpload: false }), 'url'),
        otherBands: get(partials, '2', '').split('+').filter(p => !!p).map(t => t.trim()),
      };
    });
};
