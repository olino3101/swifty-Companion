import axios from 'axios';

export async function getUserData(token, login) {
    try {
      const response = await axios.get(`https://api.intra.42.fr/v2/users/${login}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).catch((error) => {
        throw error;
      });
      return response.data;
    } catch (error) {
      return null;
    }
  }

// /v2/users/:user_id/experiences 