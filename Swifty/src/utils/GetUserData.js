import axios from 'axios';

export async function getUserData(token) {
    try {
      const response = await axios.get('https://api.intra.42.fr/v2/users/onault', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Failed to fetch user data:', error.response?.data || error.message);
      return null;
    }
  }

// /v2/users/:user_id/experiences 