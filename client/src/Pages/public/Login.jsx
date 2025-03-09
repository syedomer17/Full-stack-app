import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const apiUrl = "http://localhost:5001/api/public/login";
      const payload = { email, password };
      const response = await axios.post(apiUrl, payload);
      const token = response.data.token;

      localStorage.setItem("token", token);

      toast(response.data.msg, {
        position: "top-right",
        autoClose: 2000,
      });

     setTimeout(() => {
      navigate("/dashbord");
     }, 2000);
        
    } catch (error) {
      toast.error(error.response?.data?.msg , {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 flex-wrap">
      <ToastContainer />
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>

        <div className="mb-4">
          <label className="block text-blue-700">Email</label>
          <input
            placeholder="Enter Your Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-700">Password</label>
          <input
            placeholder="Enter your Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
