import React, { useCallback, useEffect, useState } from "react";
import Cards from "./Card";
import { Grid, Skeleton } from "@mui/material";
import Filters from "./Filters";
import { fetchData } from "../../service";
import { useSelector } from "react-redux";
const Hero = () => {
  const [info, setinfo] = useState([]);
  const [jobs, setjobs] = useState([]);
  const [offset, setoffset] = useState(0);
  const [loading, setloading] = useState(true);
  const val = useSelector((state) => state.filter)
  
  //getting the data
  useEffect(() => {
    async function fetchDataAndLogResponse() {
      try {
        const res = await fetchData(offset);
        const response = JSON.parse(res);
        // console.log(response);
        setinfo((prev) => [...prev, ...response.jdList]);
        setloading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchDataAndLogResponse();
  }, [offset]); 

  //logic for infinite scroll
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
      setloading(true);
      setoffset((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //handling filters
 
  const filterOptions = () => {
    
    const filteredArray = info.filter((item) => {
      //conditions for filtering
      return (
          item.minExp >= (val?.minExp || 0) 
            && (val?.location === "Remote"? item.location.toLowerCase()==='remote':item.location.toLowerCase()!=='remote') 
           && (!val?.companyName || item.companyName.toLowerCase().includes(val?.companyName.toLowerCase()))
           &&  (!val?.jobRole || val?.jobRole.toLowerCase() === item.jobRole.toLowerCase()) // Only apply this condition if val.jobRole exists
 
      );
    });

    // console.log(val,filteredArray);
    setjobs(filteredArray);
  };

  useEffect(() => {
   filterOptions()
  }, [info,val])
  

  return (
    <div style={{ margin: "100px" }}>
      <Filters filterOptions={filterOptions} />
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {jobs &&
          jobs.map((item, index) => {
            return (
              <Grid item xs={12} md={4} key={index}>
                <Cards key={index} data={item} />
              </Grid>
            );
          })}
      </Grid>
      {loading && (
        <div style={{ display: "grid", placeItems: "center" }}>
          {" "}
          <Skeleton variant="circular" width={40} height={40} />
        </div>
      )}
    </div>
  );
};

export default Hero;
