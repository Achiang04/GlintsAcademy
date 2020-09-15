const fetch = require("node-fetch");
// const options = {
//   url: "https://api.github.com/repos/request/request",
//   headers: {
//     "User-Agent": "request",
//   },
// };

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         const info = JSON.parse(body);
//         console.log(info.name)
//         console.log(info.stargazers_count + " Stars");
//         console.log(info.forks_count + " Forks");
//     }
// }
// request(options).then((e) => console.log(e));

const requestProm = () => {
  return fetch("https://api.github.com/repos/request/request")
    .then((response) => response.json())
    .then((json) => {
      //   console.log(json.stargazers_count);
      return json.stargazers_count;
    })
    .catch((error) => {
      console.error(error);
    });
};
// console.log(getMoviesFromApi());
requestProm().then((e) => console.log(e));

const requestWait = async () => {
  try {
    let response = await fetch("https://api.github.com/repos/request/request");
    let json = await response.json();
    console.log(json);
    // return json.stargazers_count;
    return json.name;
  } catch (error) {
    console.error(error);
  }
};
console.log(requestWait());
requestWait().then((e) => console.log(e));
