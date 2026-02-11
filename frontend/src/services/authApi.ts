import axios from "axios";

export async function login(email: string, password: string) {
  try {
    const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/auth/login`, // endpoint
        { email, password }); // request body
        
    const { token, user } = response.data;

    // Store token (simple example: localStorage)
    localStorage.setItem("jwt", token);

    console.log("Logged in as:", user);
    
    return response.data; // Return the full response data (token and user info)
  } catch (error: any) {
    console.error("Login failed:", error.response?.data || error.message);
  }

}

// Attach token automatically for future requests
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
