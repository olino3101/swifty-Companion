import axios from 'axios';

const UID = 'u-s4t2ud-491a128c812e24b247ccd85a0bc2488669d0ef0936c7a809b89e89826419cb29';
const SECRET = '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';

async function getToken() {
  const tokenUrl = 'https://api.intra.42.fr/oauth/token';
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');

  const authHeader = 'Basic ' + btoa(`${UID}:${SECRET}`);

  try {
    const response = await axios.post(tokenUrl, params, {
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    console.log('Access token:', response.data.access_token);
    return response.data.access_token;
  } catch (err) {
    console.error('Failed to get token', err.response?.data || err.message);
  }
}

export default getToken;