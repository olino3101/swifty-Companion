import axios from 'axios';
import Config from "react-native-config";

const UID = Config.UID;
const SECRET = Config.SECRET;

async function getToken() {
  console.log(UID, SECRET, "sdfsdfsdfsdfsfsdfsdf");
  if (!UID || !SECRET) {
    console.error('Missing UID or SECRET in environment variables');
    return null;
  }
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
    }).catch((err) => {
      throw err;
    });
    return response.data.access_token;
  } catch (err) {
    return null;
  }
}

export default getToken;