import { useState, useEffect } from "react";
import axios from "axios";

const rapidAPIKey = "9bff012c16msh5470f9994d044c2p1bd648jsn0748463ea5fd";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const axios = require("axios");

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "9bff012c16msh5470f9994d044c2p1bd648jsn0748463ea5fd",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {...query},
  };
  const FetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.default.request(options)
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    FetchData();
  }

  return { data, isLoading, error, refetch}
};

export default useFetch;