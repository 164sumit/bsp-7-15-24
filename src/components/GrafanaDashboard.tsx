// components/GrafanaDashboard.js
import React from 'react';

const GrafanaDashboard = ({ dashboardUrl, height = '600px' }:{dashboardUrl:string,height?:string}) => {
  return (
    <iframe
      src="http://localhost:3001"
      width="100%"
      height="100%"
      frameBorder="0"
      className='border-solid border-2 border-dc3  rounded-md'
    ></iframe>
  );
};

export default GrafanaDashboard;