const axios = require("axios");

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://cat-fact.herokuapp.com/facts/",
};

async function fetchData() {
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

async function main() {
  const result = await fetchData();

  if (result !== null) {
    // console.log("Result", result);
    dataProcessor(result);
  } else {
    console.log("No Data!");
  }
}

function dataProcessor(arr) {
  arr.forEach((element, index) => {
    console.log("Data created at: " + element.createdAt);
    console.log("User is: " + element.user);
    console.log(
      index +
        "    Type is: " +
        element.type +
        "  -------  " +
        element.text +
        "\n"
    );
  });

  console.log("Total INFO# is: " + arr.length);
}

main();
