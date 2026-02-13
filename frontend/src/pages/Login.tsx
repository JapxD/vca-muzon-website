import React, { useState } from "react";
import blessedToBless from "../assets/blessed-to-bless.jpg";
import { authSchema } from "../schemas/authSchema";
import { login } from "../services/authApi";

const Login = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setMessage("");
    const result = authSchema.safeParse({ email, password });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      setMessage("❌ Invalid login. Please check the fields.");
    } else {

      try {
        setLoading(true);
        await login(email, password)
        .then(({user}) => {
          setMessage(`✅ Logged in as ${user.email}`);
        });
        
        setEmail("");
        setPassword("");
      } catch (error: any) {
        setMessage(`❌ Failed to login: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <img
        src={blessedToBless}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Church worship"
      />

      <div className="absolute inset-0 bg-[var(--color-primary-dark)]/80"></div>
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md z-999"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            required
          />
        </div>

        {loading && <p className="mb-4 text-blue-600">Logging in...</p>}
        {message && <p className="mb-4">{message}</p>}
        {errors.email && <p className="mb-2 text-red-600">{errors.email}</p>}
        {errors.password && <p className="mb-2 text-red-600">{errors.password}</p>} 
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
