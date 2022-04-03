import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// document.getElementById("form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const title = document.getElementById("title").value;
//   const desc = document.getElementById("description").value;
//   alert(
//     `Berhasil menambahkan playlist ! \nTitle : ${title} \nDescription : ${desc}`
//   );
//   document.getElementById("title").value = "";
//   document.getElementById("description").value = "";
// });

//use fetch and not async
// function getAPI() {
//   fetch(
//     "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"
//   )
//     .then((response) => {
//       console.log(response.json());
//     })
//     .then((data) => {
//       return data;
//     })
//     .catch((err) => alert(`Error : ${err.data}`));
// }

// //use fetch and async
// async function getAsyncAPI() {
//   try {
//     const respAsync = await fetch(
//       "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"
//     );
//     const data = await respAsync.json();
//     return data;
//   } catch (e) {
//     alert(`Error : ${e}`);
//   }
// }

// const data_song = getAPI();

// console.log(data_song)

const secret_key = process.env.REACT_APP_SPOTIFY_ID_CLIENT;

// console.log(secret_key);

// document.getElementById("btn").onclick = function GetAPI() {
//   getAsyncAPI();
//   console.log(secret_key);
// };

