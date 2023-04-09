const pdfmake = require('pdfmake');

exports.handler = async function (event, context) {
  const url = event.queryStringParameters.url || 'https://r-watch.netlify.app';

  const docDefinition = {
    content: [
      { text: 'PDF from URL', style: 'header' },
      { text: url, link: url },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
    },
  };

  const pdf = pdfmake.createPdf(docDefinition);

  return new Promise((resolve, reject) => {
    pdf.getBuffer((buffer) => {
      resolve({
        statusCode: 200,
        headers: {
          'Content-Type': 'application/pdf',
        },
        body: buffer.toString('base64'),
        isBase64Encoded: true,
      });
    });
  });
};
