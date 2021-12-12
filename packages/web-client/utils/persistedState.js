import { useState, useEffect } from 'react';

function persistedState(key, initialState) {
 const [state, setState] = useState(() => {
   const storedValue = localStorage.getItem(key);

   if(storedValue) {
     return JSON.parse(storedValue);
   } else {
     return initialState;
   }
 });

 useEffect(() => {
  localStorage.setItem(key, JSON.stringify(state));
 }, [key, state]);

 return [state, setState];

};

export default persistedState;
