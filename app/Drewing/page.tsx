'use client';
import React from 'react';
import Link from 'next/link';
//import Excalidraw from './Exclidraw';
import {useState} from 'react';
import supabase from '../../lib/supabase';
import {Excalidraw} from  '@excalidraw/excalidraw';
import "@excalidraw/excalidraw/index.css";



const DrewPage = () => {
  
  const [popopen, Setpopopen] = useState(false);
  const [drawName, SetdrawName] = useState('');
  //const excalidrawRef = useRef(null);
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


  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!drawName) {
      alert("Please enter a name for your drawing");
      return;
    }

    if (!excalidrawAPI) {
      alert("Excalidraw API is not available");
      return;
    }
    
    const drawingJSON = extractDrawingJSON(excalidrawAPI);
    console.log(excalidrawAPI);

    const { error } = await supabase
        .from('canvas')
        .insert([{
          name: drawName.trim(),
          content:JSON.stringify(drawingJSON) 
        }])

        if( error) {
          alert("Error saving drawing: " + error.message);
        }
        SetdrawName('');
        Setpopopen(false);
        alert("Drawing saved successfully!");
  }

  
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Welcome to the <span className=" text-rose-400">Draw Page</span>
        </h1>
        <div className='h-150 w-200 m-10 mx-30 rounded-s-4xl flex'>
          
        <Excalidraw 
            excalidrawAPI={(api) => setExcalidrawAPI(api)}
            initialData={{
              appState: {
                viewBackgroundColor: "#ffffff",
                currentItemStrokeColor: "#000000",
                currentItemBackgroundColor: "transparent",
              }
            }}
          />
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
