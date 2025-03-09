import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("admin");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const apiUrl = "http://localhost:5001/api/public/register";
      const user = { fullName, email, password, phone, role };

      const response = await axios.post(apiUrl, user);
      toast(response.data.msg );
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      
    } catch (error) {
      toast.error(error.response?.data?.msg );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>

        <div className="mb-4">
          <label htmlFor="fullName" className="block text-blue-700">
            Full Name
          </label>
          <input
            id="fullName"
            placeholder="Enter Your Full Name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-blue-700">
            Email
          </label>
          <input
            id="email"
            placeholder="Enter Your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-blue-700">
            Password
          </label>
          <input
            id="password"
            placeholder="Enter Your Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-blue-700">
            Phone
          </label>
          <input
            id="phone"
            placeholder="Enter Your Phone Number"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            title="Enter a valid 10-digit phone number"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-700">Role</label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="admin"
                checked={role === "admin"}
                onChange={(e) => setRole(e.target.value)}
                className="mr-2"
              />
              Admin
            </label>

            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="buyer"
                checked={role === "buyer"}
                onChange={(e) => setRole(e.target.value)}
                className="mr-2"
              />
              Buyer
            </label>

            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="seller"
                checked={role === "seller"}
                onChange={(e) => setRole(e.target.value)}
                className="mr-2"
              />
              Seller
            </label>
          </div>
        </div>

        <button
          type="submit"
          className={`w-full py-2 rounded-lg transition ${
            loading ? "bg-gray-500" : "bg-green-500"
          } text-white`}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Register;
