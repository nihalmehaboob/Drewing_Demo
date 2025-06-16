'use client';
import React, { useState, useEffect } from 'react';
import supabase from '../../lib/supabase';
import { TrashIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface Image {
  id: number;
  name: string;
  content: any;
}

const Savedimages = () => {
  const [fetcError, setFetchError] = useState('');
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .from('canvas')
        .select('*');

      if (error) {
        const errorMessage = "Error fetching images: " + error.message;
        setFetchError(errorMessage);
        //setImages([]);
        alert(errorMessage);
        return;
      }

      if (data) {
        console.log(data);
        setImages(data); // FIX: assign data instead of images
        setFetchError('');
      }
    };

    fetchImages();
  }, []);

  return (
    <div className='dark:bg-color-gray-900 '>
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
        Welcome to the <span className="text-rose-400">Saved Classes</span>
      </h1>

      {(fetcError) && (<h1 className='h-30 w-64'>No images</h1>)}
      
          <div className='flex '> {(images && images.length>0) && images.map((image: Image) => (
              <div key={image.id} className="bg-white rounded-lg shadow-md p-4 mx-3 w-65 h-65 justify-end flex-col">
                <h2 className="text-xl text-black mb-2 font-black">{image.name}</h2>

                <div className='flex '>
                   <button className="text-red-600 hover:text-red-800 mx-2 ">
               <TrashIcon className="h-6 w-6" />
                </button>
                  <button className="text-red-600 hover:text-red-800">
                    <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                  </button>
                  
                </div>
                
              </div>
              
            
            ))}</div> 
            {/* {images.map((image: Image) => (
              <div key={image.id} className="bg-white dark:bg-yellow rounded-lg shadow-md p-4">
                
              </div>
            ))} */}
          </div>
        )}
  
export default Savedimages;
