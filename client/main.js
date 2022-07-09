let milesInputForm = document.getElementById("milesInputForm");
let milesInput = document.getElementById("milesInput");
const date = new Date();

// function newLog(body) {
//   console.log(body);
// }

function inputFormHandler(event) {
  event.preventDefault();
  
  const date = new Date();
  let currentDate = `${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getFullYear()}`;
  // console.log(currentDate);
  
  let body = {
    date: currentDate,
    miles: `${milesInput.value} miles`,
  };
  
  axios.post("/api/log", body).then((res) => {
    res.send(body)
  });
  console.log('this is body' , body);
  // newLog(body);
  milesInput.value = "";
}

milesInputForm.addEventListener("submit", inputFormHandler);
