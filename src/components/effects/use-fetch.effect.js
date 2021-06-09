import { useState, useEffect } from 'react';


function useFetch(url) {

    const [data, setData] = useState(null);

    useEffect(
       ()=> {
          async function fetchData() {
               const res = await fetch(url);

               const dataArray= await res.json();
               setData(dataArray[0]);
           }
           fetchData();
       }, [url]);
       return data

}

export default useFetch;