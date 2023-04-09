const axios = require('axios');

exports.handler = async function (event, context) {
  const url = event.queryStringParameters.url || 'https://wikiweather.netlify.app';
  const pdfUrl = `https://chrome.browserless.io/print?pdf.scale=0.8&pdf.landscape=true&url=${encodeURIComponent(url)}`;
  const response = await axios.get(pdfUrl, {
    responseType: 'arraybuffer',
    headers: {
      'x-api-key': '204c1021-4d40-4350-9b09-78b0c8cfb7f7',
    },
  });
  const pdfBuffer = Buffer.from(response.data);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment;filename="converted.pdf"',
    },
    body: pdfBuffer.toString('base64'),
    isBase64Encoded: true,
  };
};
