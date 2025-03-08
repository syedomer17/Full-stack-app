import React from 'react'

const Register = () => {
    async function handleSubmit(event) {
        event.preventDefault();
    }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <form className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>

          <div className="mb-4">
            <label className="block text-blue-700">fullName</label>
            <input
              placeholder="Enter Your fullName"
              type="text"
              name="fullName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-blue-700">Email</label>
            <input
              placeholder="Enter You Email"
              type="email"
              name="email"
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
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-blue-700">Phone</label>
            <input
              placeholder="Enter You phone number"
              type="number"
              name="phone"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg transition"
            onSubmit={handleSubmit}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register