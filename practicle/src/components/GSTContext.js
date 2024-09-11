
import React, { createContext, useState } from 'react';

export const GSTContext = createContext();


export const GSTProvider = ({ children }) => {
  const [price, setPrice] = useState('');
  const [text, setText] = useState('');
  const [gst, setGST] = useState(0);


  const calculateGST = () => {
    const gstValue = (price * 0.18).toFixed(2); 
    setGST(gstValue);
  };

  return (
    <GSTContext.Provider value={{ price, setPrice, text, setText, gst, calculateGST }}>
      {children}
    </GSTContext.Provider>
  );
};
