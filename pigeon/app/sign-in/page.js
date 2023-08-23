"use client"
import React, { useState } from 'react';
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api'
const SignIn = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [loginData, setLoginData] = useState({
    email:'',
    password:'',
    role:'adminstaff'
  });
  


  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  
 
  const submitForm = () => {
    const formData = new FormData();
    formData.append('email', loginData.email);
    formData.append('password', loginData.password);
    
    const loginEndpoint = `/${loginData.role}-login`; 
    
    axios
    .post(baseUrl + loginEndpoint, formData)
    .then((res) => {
      console.log(res.data);
      if (res.data.bool === true) {
        localStorage.setItem('loginstatus', true);
        window.location.href = '/';
      }
      else {
        setErrorMessage('Invalid Login Credentials'); // Set the error message when login fails
      }
    })
    .catch((error) => {
      setErrorMessage('Invalid Login Credentials');
    });
};





  return (
    <div className='flex justify-center items-center'>
      <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Log In
        </h2>
        <form className="mt-8 space-y-6" >
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={loginData.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>


          <select
              name="role"
              id="role"
              value={loginData.role}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="adminstaff">Admin Staff</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
            </select>
          
            {errorMessage && (
            <div className="text-red-600 text-sm">{errorMessage}</div>
          )}



          
          <button onClick={submitForm} type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Request for your account?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
