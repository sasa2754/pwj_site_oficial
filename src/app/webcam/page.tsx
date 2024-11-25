"use client"
import React, { useState, useEffect } from 'react';

const CameraFeed: React.FC = () => {
  const [cameraIP] = useState("http://192.168.230.174:8080/video"); // IP fixo do seu celular

  return (

    <div className='min-h-screen bg-gray-100 p-8 flex justify-center items-center'>

    <div className="flex items-center justify-center max-w-xl min-w-48 flex-col mt-12">
      <h2>Live Camera Feed</h2>
      <img src={cameraIP} alt="Camera Feed" className='w-full h-auto items-center rounded-xl'/>
    </div>
    </div>
  );
}

export default CameraFeed;
