import { useState } from "react";
import axios from "axios";

const useAxios = (baseUrl) => {
  const [data, setData] = useState([]);

  const addData = async (endpoint = "", transformFunc = (res) => res.data) => {
    try {
      const res = await axios.get(`${baseUrl}${endpoint}`);
      const transformedData = transformFunc(res);
      setData((data) => [...data, transformedData]);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return [data, addData];
};

export default useAxios;
