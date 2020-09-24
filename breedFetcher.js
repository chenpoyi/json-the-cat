const request = require('request');
const userArg = process.argv.slice(2);
request(`https://api.thecatapi.com/v1/breeds/search?q=${userArg[0]}`, (error, response, body) => {
  //console.log(typeof body);
  if (error) {
    throw error;
  }
  if (body === '[]') {
    console.log("Breed not found.");
  } else {
    const data = JSON.parse(body);
    console.log(data[0]['description']);
  }

});
