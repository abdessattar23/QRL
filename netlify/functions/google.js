const googleIt = require('google-it');

exports.handler = async (event, context) => {
  const query = event.queryStringParameters.query || 'javascript';
  const limit = event.queryStringParameters.limit || 10;
  const urls = event.queryStringParameters.only-urls || false;
 
  try {
    const results = await googleIt({
      query: query,
      limit: limit,
      only-urls: urls
    });
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
