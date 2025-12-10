import fetch from 'node-fetch';

export async function handler(event, context) {
  const TOKEN = process.env.WEBFLOW_TOKEN;
  const COLLECTION_ID = process.env.WEBFLOW_COLLECTION_ID;


  try {
    const response = await fetch(
      `https://api.webflow.com/v2/collections/${COLLECTION_ID}/items`,
      {
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'Accept': 'application/json',
        },
      }
    );

    const data = await response.json();

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
