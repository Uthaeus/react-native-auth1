import axios from "axios";

// example using firebase authentication api
const API_KEY = "your-api-key";

async function authenticate(mode, email, password) {
  const url = `aip-auth-address${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
