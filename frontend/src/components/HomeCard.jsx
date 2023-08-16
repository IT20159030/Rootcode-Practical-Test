import React from 'react';
import { useGlobalContext } from '../context/ContextProvider';

const HomeCard = ({ icon, title, description }) => {

  const { mode } = useGlobalContext()

  return (
    <div className={`bg-${mode === 'light' ? 'gray-300' : 'gray-800'} text-${mode === 'light' ? 'gray-800' : 'white'} rounded-lg p-6 shadow-md w-80 flex flex-col items-center`}>
      <div className="flex items-center justify-center h-16 w-16 bg-blue-500 text-white rounded-full mb-4">
        {icon}
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}


export default HomeCard;
