'use client';
import React from 'react';
import Link from 'next/link';
import Excalidraw from './Exclidraw';
const DrewPage = () => {
  
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Welcome to the <span className=" text-rose-400">Draw Page</span>
        </h1>
        <div className='h-150 w-200 m-10 mx-30 rounded-s-4xl'>
        <Excalidraw />
      </div>
        
       
      </div>
      <Link href="/">
          <button className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow transition duration-300">
            Go to Home
          </button>
        </Link>
       
    </main>
  );
};

export default DrewPage;
