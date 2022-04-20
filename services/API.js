const axios = require('axios');

const getCurrentPrice = async () => {
  const URL = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json)';
  const res = await axios.get(URL);
  const { data } = res;
  return data
};

module.exports = getCurrentPrice;