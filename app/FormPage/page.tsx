'use client'; 
import Link from 'next/link';
import React from 'react'; 
import { useState } from 'react';
import supabase from '../../lib/supabase';



 const ContactForm = ()=> {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  //const [error, setError] = useState('');

 const handlesubmit= async(e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault(); 
   
    if (!username || !email) {
        alert("Please fill all the fields");
        return;
    }
    
    console.log(username, email);
    
    const { error } = await supabase
        .from('Users')
        .insert([{ username, email }]);
    
    if (error) {
        alert(error.message);
    } else {
        // Success
        setUsername('');
        setEmail('');
        alert("User added successfully!");
    }
}

  return (

    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 py-1">
      <form className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-6" onSubmit={handlesubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Enter your Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            placeholder="Mohammed Nihal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Enter your Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            placeholder="nihal@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
        <Link href="/">
        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition space-x-2.5"
        >
         Home
        </button>
        </Link>
      </form>
    </main>
  );
}

export default ContactForm;
