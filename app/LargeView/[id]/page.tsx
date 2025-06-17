'use client';
import React from 'react';
//import Excalidraw from '@/app/Drewing/Exclidraw';
import { useSearchParams } from 'next/navigation';
import '@excalidraw/excalidraw/index.css';
import {Excalidraw} from '@excalidraw/excalidraw';
import Link from 'next/link';
import { useState } from 'react';
import supabase from '../../../lib/supabase';

const LargeView = () => {
  const searchParams = useSearchParams();
  const imageJSON = searchParams.get('image');
   const [excalidrawAPI, setExcalidrawAPI] = useState(null);
 

   const extractDrawingJSON = (excalidrawAPI:any) => {
    const elements = excalidrawAPI.getSceneElements();
    const appState = excalidrawAPI.getAppState();
    const files = excalidrawAPI.getFiles();
   

    return {
      type: "excalidraw",
      version: 2,
      source: "your-app",
      elements,
      appState,
      files,
    };


}



  if (!imageJSON) {
    return <div className="text-red-500 text-xl">No image data found.</div>;
  }

  let image;
  try {
    image = JSON.parse(imageJSON);
   // console.log( image);
  } catch (err) {
    console.error('Failed to parse image JSON', err);
    return <div className="text-red-500 text-xl">Error parsing image data.</div>;
  }

  // const data = JSON.parse(image.content); // Assuming content is stored as a stringified drawing

   
   

   const handlesave = async () => {
  

    if (!excalidrawAPI) {
      alert("Excalidraw API is not available");
      return;
    }
    
    const drawingJSON = extractDrawingJSON(excalidrawAPI);
      const elements = drawingJSON.elements;
      const appState = drawingJSON.appState;  
      const files = drawingJSON.files;
      await supabase.from("canvas").update({
    content: { elements, appState, files }
     }).eq("id", image.id);
         console.log(image.id);
    
    alert("Drawing saved successfully!");
  }
//const data = JSON.parse(image.content);
// console.log(image.content);

  return (
    <div className="p-6 justify-center items-center bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">
        The Image: <span className="text-rose-400">{image.name}</span>
      </h1>

     <div className="flex justify-center items-center h-200 w-200">
       <Excalidraw 
        excalidrawAPI={(api) => setExcalidrawAPI(api)}
         initialData={
          {
            
            elements: image.content.elements,
            appState:  { zenModeEnabled: true, viewBackgroundColor: "#ffffff" },
            files: image.content.files,
            // files: image.content.files,
            
          }
         }
       viewModeEnabled={false} 
       onChange={() => {
       // console.log('Drawing changed');
       }}
       />
     </div>
      <div className="flex justify-center items-center ">
     <Link href="/saved_drewings">
       
          <button className="mt-4 px-6 py-3 mr-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow transition duration-300">
            Go to List  
          </button>
           </Link>
       <button className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow transition duration-300" onClick={handlesave}>
        Save changes
        </button>   
</div>

    </div>
  );
};

export default LargeView;
