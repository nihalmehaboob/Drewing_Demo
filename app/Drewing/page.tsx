import React from 'react';
import Link from 'next/link';

const DrewPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Welcome to the <span className=" text-rose-400">Drew Page</span>
        </h1>
        <Link href="/">
          <button className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow transition duration-300">
            Go to Home
          </button>
        </Link>
      </div>
    </main>
  );
};

export default DrewPage;
