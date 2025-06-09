import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-4">
      <div className="text-center space-x-2.5">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Welcome to the <span className="underline decoration-blue-500">Home Page</span>
        </h1>
        <Link href="/Drewing">
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-300">
            Go to Drewing
          </button>
        </Link>
        <Link href="/FormPage">
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-300">
           Enter Details
          </button>
        </Link>
      </div>
    </main>
  );
}
