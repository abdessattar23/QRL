const axios = require('axios');

exports.handler = async (event, context) => {
  const category = event.queryStringParameters.category || 'success';

  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'X-Api-Key': 'ax8Fu/Oy6Qb8c8wj8aDyJQ==usUKVIG79ZIIe12I'
      },
      params: {
        category: category
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
