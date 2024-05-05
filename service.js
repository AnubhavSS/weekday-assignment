//function to fetch data from API
export async function fetchData({offset}) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit: 10,
      offset: offset,
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