const googleIt = require('google-it');

exports.handler = async (event, context) => {
  const query2 = event.queryStringParameters.query || 'javascript';
  const limit = event.queryStringParameters.limit || 10;
  const filetype = event.queryStringParameters.filetype;
  const query = 'filetype:${filetype} ' + query2;
  try {
    const results = await googleIt({
      query: query,
      limit: limit
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
