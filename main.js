var a = document.getElementById("a");
const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://example.com');
    a.innerHTML = response.data;
  } catch (error) {
    a.innerHTML = 'Error fetching data:', error;
  }
}

fetchData();