const googleIt = require('google-it');
const axios = require('axios');

exports.handler = async (event, context) => {
  const query2 = event.queryStringParameters.query || 'javascript';
  const type = event.queryStringParameters.type || 'png';
  const limit = event.queryStringParameters.limit || 10;
  const query = 'filetype:' + type + ' ' + query2;
  try {
    const results = await googleIt({
      query: query,
      limit: limit
    });

     const img = await axios.get("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPh3UbRCrXbTspsFbzmb100fXVRz_w3buuqKJDbN5&s");
    return {
      statusCode: 200,
      body: JSON.stringify({img}),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
