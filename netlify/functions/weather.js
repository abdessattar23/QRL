const axios = require('axios');

exports.handler = async (event, context) => {
  const city = event.queryStringParameters.city || 'london';

  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/weather', {
      headers: {
        'X-Api-Key': 'ax8Fu/Oy6Qb8c8wj8aDyJQ==usUKVIG79ZIIe12I'
      },
      params: {
        city: city
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
