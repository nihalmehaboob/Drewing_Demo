'use client';
import React, { useState, useEffect } from 'react';
import supabase from '../../lib/supabase';

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
        .select();

      if (error) {
        const errorMessage = "Error fetching images: " + error.message;
        setFetchError(errorMessage);
        setImages([]);
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
    <div>
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
        Welcome to the <span className="text-rose-400">Home Page</span>
      </h1>

      {(fetcError || images.length===0) && (<h1 className='h-30 w-64'>No images</h1>)}

            {(images && images.length>=1) && images.map((image: Image) => (
              <div key={image.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                <h2 className="text-xl font-semibold mb-2">{image.name}</h2>
                <p>{image.content}</p>
              </div>
            ))}
            {images.map((image: any) => (
              <div key={image.id} className="bg-white dark:bg-yellow rounded-lg shadow-md p-4">
                <h2 className="text-xl font-semibold mb-2">{image.name}</h2>
                <p>{image.content}</p>
              </div>
            ))}
          </div>
        )}
  
export default Savedimages;
