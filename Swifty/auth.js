// import { authorize } from 'react-native-app-auth';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';

// function getAuthConfig() {
//   return {
//     clientId: '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',
//     clientSecret: 'u-s4t2ud-e6c4d6aaf7f65f9c6bb7145f46c7b44888b7a29cbdb5843823fb843de0658705',
//     redirectUrl: 'com.swifty://oauthredirect',
//     scopes: ['public', 'profile', 'projects', 'elearning', 'forum', 'roster'],
//     serviceConfiguration: {
//       authorizationEndpoint: 'https://api.intra.42.fr/oauth/authorize',
//       tokenEndpoint: 'https://api.intra.42.fr/oauth/token',
//     },
//   };
// }

// export async function authenticate() {
//     try {
//         const authState = await authorize(getAuthConfig());
//         return authState.accessToken;
//     } catch (error) {
//         console.error('Failed to authenticate', error);
//         throw error;
//     }
// }
const authConfig = {
  clientId: "u-s4t2ud-e6c4d6aaf7f65f9c6bb7145f46c7b44888b7a29cbdb5843823fb843de0658705",
  clientSecret: "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",
  redirectUri: makeRedirectUri({
    scheme: 'com.swifty',
  }),
//   scopes: ['public', 'profile', 'projects', 'elearning', 'forum', 'roster'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://api.intra.42.fr/oauth/authorize',
    tokenEndpoint: 'https://api.intra.42.fr/oauth/token',
  },
};

export async function authenticate() {
    const [request, response, promptAsync] = useAuthRequest(authConfig);
    print(request);
    print(response);
}