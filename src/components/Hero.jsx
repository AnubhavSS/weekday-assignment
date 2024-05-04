import React,{useEffect,useState} from "react";
import Cards from "./Card";

const Hero = () => {

    const [info, setinfo] = useState([])

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

    return fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.text())
    //   .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }

//   useEffect(() => {
//     async function fetchDataAndLogResponse() {
//       try {
//         const response = await fetchData();
//         console.log(response);
//         setinfo(response.jdList)
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }
//     fetchDataAndLogResponse();
//   }, []); // Empty dependency array ensures useEffect runs only once on mount
  

  return (
    <div style={{margin:'100px'}}>
      Hero
      <Cards  />
    </div>
  );
};

export default Hero;
