const puppeteer = require('puppeteer');

exports.handler = async function (event, context) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    // Get the URL from the query parameters
    const url = event.queryStringParameters.url;

    // Navigate to the URL
    await page.goto(url);

    // Generate PDF
    const pdfBuffer = await page.pdf({ format: 'Letter' });

    // Return the PDF as a response
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
