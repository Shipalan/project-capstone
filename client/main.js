let milesInputForm = document.getElementById("milesInputForm");
let milesInput = document.getElementById("milesInput");
const date = new Date();

function newLog(body) {
  axios.post("/api/log" (res,req), body)
    .then(res.status(200).send(body));
}

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

  console.log(body)
  newLog(body);
  milesInput.value = "";
}

milesInputForm.addEventListener("submit", inputFormHandler);
