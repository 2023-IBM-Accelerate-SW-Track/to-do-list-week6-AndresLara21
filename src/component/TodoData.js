import React, {  useEffect, useState } from "react";
import Axios from "axios";


const ShowTodos = () => {
  useEffect( () => {
    async function fetchData() {
      try {
        const red = await Axios.get('http://localhost:8080/get/items');
        setTodos(JSON.stringify(res.data));
        console.log(JSON.stringify(res.data));
      } catch (err) {
        console.log(err);
      }
    }  
    fetchData();
  }, []);
  return <div>{todos}</div>
   
    
}
export default ShowTodos;
