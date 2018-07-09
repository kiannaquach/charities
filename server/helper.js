const request = require('request');
const config = require('../config.js');
const Promise = require('promise');

let getCharities = (category) => {
  let options = {
    url: `http://data.orghunter.com/v1/charitysearch?user_key=${config.TOKEN}&searchTerm=${category}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  return new Promise((resolve, reject) => {
    request(options, (err, response, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    })
  })
}


module.exports.getCharities = getCharities;