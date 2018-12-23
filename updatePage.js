const axios = require('axios');
const qs = require('querystring');

const {
  wpToken: token,
  site,
  postId,
} = require('./config');

module.exports = async function updatePage(content) {
  const url = `https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts/${postId}`;
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  const data = qs.stringify({content});
  let response;
  try {
    response = await axios.post(url, data, options);
  } catch ({ response: {status, statusText} }) {
    throw Error(`${status}:${statusText}`);
  }
  return true;
};
