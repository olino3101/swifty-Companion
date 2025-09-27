import axios from 'axios';


  
export function getUserData(token) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
    };
    
    axios.get('https://api.intra.42.fr/v2/users/onault', config)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
    return null;
}

// /v2/users/:user_id/experiences 