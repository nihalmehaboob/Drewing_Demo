'use client';
import React from 'react';
import Link from 'next/link';
import Excalidraw from './Exclidraw';
import {useState,useRef} from 'react';
import supabase from '../../lib/supabase';



const DrewPage = () => {
  const data={
  // schema information
  "type": "excalidraw",
  "version": 2,
  "source": "https://excalidraw.com",

  // elements on canvas
  "elements": [
    // example element
    {
      "id": "pologsyG-tAraPgiN9xP9b",
      "type": "rectangle",
      "x": 928,
      "y": 319,
      "width": 134,
      "height": 90
      /* ...other element properties */
    }
    /* other elements */
  ],

  // editor state (canvas config, preferences, ...)
  "appState": {
    "gridSize": 20,
    "viewBackgroundColor": "#ffffff"
  },

  // files data for "image" elements, using format `{ [fileId]: fileData }`
  "files": {
    // example of an image data object
    "3cebd7720911620a3938ce77243696149da03861": {
      "mimeType": "image/png",
      "id": "3cebd7720911620a3938c.77243626149da03861",
      "dataURL": "data:image/png;base64,iVBORWOKGgoAAAANSUhEUgA=",
      "created": 1690295874454,
      "lastRetrieved": 1690295874454
    }
    /* ...other image data objects */
  }
}

  const [popopen, Setpopopen] = useState(false);
  const [drawName, SetdrawName] = useState('');
  const excalidrawRef = useRef(data);

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!drawName) {
      alert("Please enter a name for your drawing");
      return;
    }

    
    const api = excalidrawRef.current;
    console.log(api)
    if(api){
      // const elements = api.getSceneElements();
      // const appState = api.getAppState();
      // const files = api.getFiles();
      const elements = api.elements;
      const appState = api.appState;
      const files = api.files;
       const drawingJSON = {
        type: "excalidraw",
        version: 2,
        source: "your-app",
        elements,
        appState,
        files,
      };
      const { data, error } = await supabase
        .from("drawings")
        .insert([
          {
            title: "My First Drawing",
            user_id: "some-user-id", // if using auth
            data: drawingJSON,
          },
        ]);

         if (error) {
        console.error("Error saving drawing:", error.message);
      } else {
        console.log("Drawing saved:", data);
      }
    }

    

     alert("User added successfully!");
     SetdrawName('');
    Setpopopen(false);
  }

  
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Welcome to the <span className=" text-rose-400">Draw Page</span>
        </h1>
        <div className='h-150 w-200 m-10 mx-30 rounded-s-4xl'>
        <Excalidraw />
      </div>
        
      {popopen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Save Your Drawing</h2>
           <div>
            <form onSubmit={handlesubmit} className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Draw Name</label>
              <input type= "text" name="Draw_name" onChange={(e)=>SetdrawName(e.target.value)}  className="w-full px-4 py-2  mb-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"></input>
            </div>
            <div className='flex px-20 '>
           <button 
              className="px-4 py-2 mx-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow transition duration-300"
              onClick={() => Setpopopen(false)}
            >
              Close
            </button>
           <button 
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow transition duration-300"
             
              type='submit'
            >
              Save
            </button>
            
            </div>
            </form>
           </div>

           
          </div>
        </div>  
      )}
      </div>
      <div className='flex mx-10'>  
      <Link href="/">
        
          <button className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow transition duration-300">
            Go to Home
          </button>
           </Link>
          <button className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow transition duration-300" 
           onClick={()=>Setpopopen(true)}>
           Save
          </button>
       
         </div>
       
    </main>
  );
};

export default DrewPage;
