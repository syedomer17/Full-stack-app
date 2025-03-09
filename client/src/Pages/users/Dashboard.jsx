import React, { Suspense } from 'react'
import { useNavigate } from 'react-router-dom';

const Bashboard = () => {
    const navigate = useNavigate();

    function logout(){
        localStorage.clear();
        navigate("/login")
    }
  return (
    <>
      <button
        className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={logout}
      >
        logout
      </button>
    </>
  );
}

export default Bashboard