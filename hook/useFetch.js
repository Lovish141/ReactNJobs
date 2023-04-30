import { useState,useEffect } from "react";
import axios from 'axios';

const useFetch=(endpoint,query)=>{
    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
          ...query
        },
        headers: {
          'X-RapidAPI-Key':'eb3d6f5339msh0fbec978c20f3a5p121586jsn7e1395d39346',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData=async ()=>{
        setIsLoading(true);
        try{
            const response =await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        }catch(error){
            setError(error);
            alert("There is an error in fetching the data.")
        }finally{
            setIsLoading(false);
        }
      }
      useEffect(() => {
        fetchData();
      }, [])

      const reFetch=()=>{
        setIsLoading(true);
        fetchData();
      }


      return {data,isLoading,error,reFetch};

}

export default useFetch;
