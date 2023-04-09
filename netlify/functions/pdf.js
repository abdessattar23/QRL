const puppeteer = require('puppeteer-core');

exports.handler = async function (event, context) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    const url = event.queryStringParameters.url || 'https://wikiweather.netlify.app';
    await page.goto(url);
    const pdfBuffer = await page.pdf({ format: 'Letter' });
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment;filename="converted.pdf"',
      },
      body: pdfBuffer.toString('base64'),
      isBase64Encoded: true,
    };
  } finally {
    await browser.close();
  }
};
