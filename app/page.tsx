import Link from 'next/link';

export default function Home() {
  const randomcard=()=>{
    return (
      <>
      <div className='flex items-center justify-between '>
      <div className="m-3 p-4 bg-gray-100 w-64 h-96 rounded-3xl flex-col justify-between shadow-lg">
        <h1 className='text-2xl font-bold text-black mb-5 border-b-2 '> Virtual Whiteboard </h1>
        <p className='text-black mb-15 font-mono'>Welcome to your digital teaching companion — a simple, intuitive space where you can draw, illustrate, and explain concepts just like on a real whiteboard.</p>
        <Link href="/Drewing">
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-300 ml-8">
            Go to Drewing
          </button>
        </Link>
      </div>
      <div className="m-3 p-4 bg-gray-100 w-64 h-96 rounded-3xl flex-col justify-between shadow-lg">
        <h1 className='text-2xl font-bold text-black mb-5 border-b-2 '> Who are You </h1>
        <p className='text-black mb-15 font-mono'>With a significant portion of our sales happening through chat, if our core customer support platform isnt accessible, its a crisis.</p>
         <Link href="/FormPage">
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-300 ml-8">
           Enter Details
          </button>
        </Link>
      </div>
      <div className="m-3 p-4 bg-gray-100 w-64 h-96 rounded-3xl flex-col justify-between shadow-lg">
        <h1 className='text-2xl font-bold text-black mb-5 border-b-2 '> saved Images </h1>
        <p className='text-black mb-15 font-mono'>With a significant portion of our sales happening through chat, if our core customer support platform isnt accessible, its a crisis.</p>
         <Link href="/saved_drewings">
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-300 ml-8">
           saved Drewings
          </button>
        </Link>
      </div>
      </div>
      </>
    );
  }
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-4">
      <div className="text-center space-x-2.5 mb-6">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Welcome to the <span className=" text-rose-400">Home Page</span>
        </h1>
        {/* <Link href="/Drewing">
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-300">
            Go to Drewing
          </button>
        </Link> */}
        {/* <Link href="/FormPage">
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-300">
           Enter Details
          </button>
        </Link> */}
      </div>
    {randomcard()}
    </main>
    
  );
}
