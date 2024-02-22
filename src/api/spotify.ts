import axios from "axios";

const authEndpoint: string = "https://accounts.spotify.com/authorize?";
const clientId: string = "08466e6332554fad8d2997d633e695dd";
const redirectUri: string = "http://localhost:5173";
const scopes: string[] = [
  //   "user-read-currently-playing",
  "user-library-read",
  "playlist-read-private",
];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token: string) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;
