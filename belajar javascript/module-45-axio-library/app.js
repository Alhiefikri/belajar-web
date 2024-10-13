axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.error(`error : ${error}`);
  });

// Metode get Async await
async function getPost() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(res.data);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

getPost(); // Memanggil fungsi

// post method

// async function post() {
//   try {
//     const postData = {
//       title: "Post Baru",
//       body: "Ini adalah body dari post baru",
//       userId: 1,
//     };
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(postData),
//     });
//     if (!res.ok) {
//       throw new Error("Network response not ok");
//     }
//     const data = await res.json();
//     console.log("Data posted: ", data);
//   } catch (error) {
//     console.log("Error posting data: ", error);
//   }
// }

// post();

// post data method Promise

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify(postData),
// })
//   .then((response) => response.json())
//   .then((data) => console.log("Data posted: ", data))
//   .catch((error) => {
//     console.log("Error posting data: ", error);
//   });
