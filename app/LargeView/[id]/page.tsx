'use client';
import React from 'react';
//import Excalidraw from '@/app/Drewing/Exclidraw';
import { useSearchParams } from 'next/navigation';
import '@excalidraw/excalidraw/index.css';
import {Excalidraw} from '@excalidraw/excalidraw';
import Link from 'next/link';

const LargeView = () => {
  const searchParams = useSearchParams();
  const imageJSON = searchParams.get('image');

  if (!imageJSON) {
    return <div className="text-red-500 text-xl">No image data found.</div>;
  }

  let image;
  try {
    image = JSON.parse(imageJSON);
  } catch (err) {
    console.error('Failed to parse image JSON', err);
    return <div className="text-red-500 text-xl">Error parsing image data.</div>;
  }

  //const data = JSON.parse(image.content); // Assuming content is stored as a stringified drawing

  console.log(image.content);


  return (
    <div className="p-6 justify-center items-center bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">
        The Image: <span className="text-rose-400">{image.name}</span>
      </h1>

     <div className="flex justify-center items-center h-100 w-100">
       <Excalidraw 
         initialData={image.content}
       viewModeEnabled={true} 
       />
     </div>
     <Link href="/saved_drewings">
        
          <button className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow transition duration-300">
            Go to List  
          </button>
           </Link>
    </div>
  );
};

export default LargeView;
