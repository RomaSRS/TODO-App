/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
 const savedCallback = useRef();

 useEffect(() => {
  savedCallback.current = callback;
 }, [callback]);

 useEffect(() => {
  if (delay && delay !== null) {
   const handler = () => savedCallback.current();
   const id = setInterval(handler, delay);
   return () => clearInterval(id);
  }
 }, [delay]);
};

export default useInterval;
