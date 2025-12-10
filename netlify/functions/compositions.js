import fetch from 'node-fetch';

export async function handler(event, context) {
  const TOKEN = 'd04391874e07f1544c86e1737465a1fcf4c7813a848bea591dc3e4864158cac0';
  const COLLECTION_ID = '693042ab73f723a00718d428';

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
