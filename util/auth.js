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


}

export async function createUser(email, password) {
  await authenticate('signUp', email, password);
}

export async function login(email, password) {
    await authenticate('signInWithPassword', email, password);
}
