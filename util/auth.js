import axios from "axios";

const API_KEY = "your-api-key";

export async function createUser(email, password) {
  const response = await axios.post("api-auth-address" + API_KEY, {
    email: email,
    password: password,
    returnSecureToken: true,
  });


}
