import React, { useState } from 'react';
import axiosClient from "../../axios-client";
import jobHunter from "../../Image/jobHunter.webp"
import { Form } from 'react-router-dom';
const RequestPasswordResetForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axiosClient.post('/forgot-password', { email });
      setMessage('Please Check Your Email for Instruction.');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
    <div className='w-full flex justify-center items-center h-full '>
      <div className="absolute w-full h-full opacity-70">
        <img className="w-full h-full" src={jobHunter} alt="" />
      </div>
      <div className="rounded-lg w-2/3 h-60 relative ">
        <div className='absolute bg-white w-full h-full rounded-lg opacity-90'></div>
        <h2 className="relative text-xl font-semibold m-4">Request For Password Reset</h2>

        <Form className='relative m-8 mt-4 mb-4' onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send an Email
          </button>
        </Form>
        {
          message && <div className='text-sm text-green-500 mt-3'>{message}</div>
        }
      </div>
    </div>
  );
};

export default RequestPasswordResetForm;
