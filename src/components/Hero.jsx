import React, { useEffect, useState } from "react";
import Cards from "./Card";
import { Grid } from "@mui/material";
const Hero = () => {
  const [info, setinfo] = useState([]);

  //function to fetch data from API
  async function fetchData() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    return (
      fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      )
        .then((response) => response.text())
        //   .then((result) => console.log(result))
        .catch((error) => console.error(error))
    );
  }

  useEffect(() => {
    async function fetchDataAndLogResponse() {
      try {
        const res = await fetchData();
        const response = JSON.parse(res);
        // console.log(response);
         setinfo(response.jdList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchDataAndLogResponse();
    
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div style={{ margin: "100px" }}>
      Hero 
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {info &&
          info.map((item, index) => {return(
            <Grid item xs={12} md={4} key={index}>
              <Cards key={index} data={item} />
            </Grid>
          )})}
      </Grid>
    </div>
  );
};

export default Hero;
