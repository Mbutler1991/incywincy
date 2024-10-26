const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const { name, email, message } = JSON.parse(event.body);

  // Send form data to Formspree
  const response = await fetch('https://formspree.io/f/mqakekjy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (response.ok) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' }),
    };
  } else {
    return {
      statusCode: response.status,
      body: JSON.stringify({ message: 'Form submission failed' }),
    };
  }
};