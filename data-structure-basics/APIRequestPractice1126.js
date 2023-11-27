/**
 * The aim of this file is to prompt the frequent utilization of the JS Fetch method.
 *
 * Log:
 * 11-26-2023 7 times
 */

const apiUrl = "https://cat-fact.herokuapp.com/facts/";

async function fetchData() {
  try {
    // response here means HTTP response received from the server
    const response = await fetch(apiUrl, { method: "GET" });

    if (!response.ok) {
      throw new Error("HTTP Error!");
    }

    // fetch returns promises that need to be resolved before you can access their actual data.
    const data = await response.json();
    dataProcessor(data);
  } catch (e) {
    console.log(e);
  }
}

function dataProcessor(data) {
  let dataContent = [];
  for (let i = 0; i < data.length; i++) {
    dataContent.push({ userId: data[i].user, description: data[i].text });
  }
  console.log(dataContent);
}
