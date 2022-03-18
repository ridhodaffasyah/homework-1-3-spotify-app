import './index.css';

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const desc = document.getElementById("description").value;
  alert(
    `Berhasil menambahkan playlist ! \nTitle : ${title} \nDescription : ${desc}`
  );
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
});

//use fetch and not async
function getAPI() {
  fetch(
    "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(`Using fetch not async :`, data);
    })
    .catch((err) => alert(`Error : ${err.data}`));
}

//use fetch and async
async function getAsyncAPI() {
  try {
    const respAsync = await fetch(
      "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"
    );
    const data = await respAsync.json();
    console.log(`Using fetch async :`, data);
  } catch (e) {
    alert(`Error : ${e}`);
  }
}

const secret_key = process.env.REACT_APP_SPOTIFY_ID_CLIENT;

document.getElementById("btn").onclick = function GetAPI() {
  getAsyncAPI();
  getAPI();
  console.log(secret_key);
};

