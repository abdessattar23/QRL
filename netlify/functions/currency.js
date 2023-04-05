const axios = require('axios');

exports.handler = async (event, context) => {
  const have = event.queryStringParameters.have || 'MAD';
  const want = event.queryStringParameters.want || 'EUR';
  const amount = event.queryStringParameters.amount || '1000';

  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/convertcurrency', {
      headers: {
        'X-Api-Key': 'ax8Fu/Oy6Qb8c8wj8aDyJQ==usUKVIG79ZIIe12I'
      },
      params: {
        have: have,
        want: want,
        amount: amount
      }
    });
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
