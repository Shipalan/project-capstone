let milesInputForm = document.getElementById("milesInputForm");
let milesInput = document.getElementById("milesInput");
const date = new Date();

//Get the 5 most recent logs----------------------------------------

const getRecentLogs = () => {
  axios
    .get("/api/recentLogs")
    .then((res) => {
      res.data.forEach((e, i, a) => {
        let milesLi = document.createElement("p");
        milesLi.textContent = a[i].miles;
        document.getElementById("tripList").appendChild(milesLi);

        let dateLi = document.createElement("p");
        dateLi.textContent = a[i].date;
        document.getElementById("dateList").appendChild(dateLi);
      });
      res.status(200).send(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
getRecentLogs();

//Send body to api----------------------

function newLog(body) {
  axios
    .post("/api/log", body)
    .then((res) => {
      getRecentLogs();
    })
    .then((res) => {
      res.status(200);
    });
}

//Create the object body for the input------------------------

function inputFormHandler(event) {
  event.preventDefault();

  const date = new Date();
  let currentDate = `${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getFullYear()}`;

  let body = {
    date: currentDate,
    miles: `${milesInput.value} miles`,
  };

  newLog(body);
  milesInput.value = "";
}

milesInputForm.addEventListener("submit", inputFormHandler);
