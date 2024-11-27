import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  // create a state to track loading
  const [isPending, setIsPending] = useState(true);

  // There are two types of error
  // 1. Connection error - when out site can't even connect to the server. We can track this using .catch() method
  const [connectionError, setConnectionError] = useState(null);

  // 2. Server error - This is when a server sends an error. It might be due to wrong endpoint or denial of access

  useEffect(() => {
    console.log("use effect ran");
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Cant Fetch Data From Server");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setConnectionError(null);
        setData(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setConnectionError(err.message);
        }
      });

    return () => abortCont.abort();
  }, []);

  return { data, isPending, connectionError };
};

export default useFetch;
