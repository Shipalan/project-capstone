let tripList = document.getElementById("tripList");
let dateList = document.getElementById("dateList");
let historyDateList = document.getElementById("historyDateList")
let historyTripList = document.getElementById("historyTripList")
let milesInputForm = document.getElementById("milesInputForm");
let milesInput = document.getElementById("milesInput");
const date = new Date();

//Get full history----------------------------------------------------

const getHistory = () => {
  axios
    .get("/api/history")
    .then((res) => {
      let data = res.data
      data.forEach((e, i, a) => {
        let milesLi = document.createElement("p");
        let dateLi = document.createElement("p");
        milesLi.textContent = a[i].miles;
        historyTripList.appendChild(milesLi);

        dateLi.textContent = a[i].date;
        historyDateList.appendChild(dateLi);
      });
      res.send(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

getHistory();

//Get the 5 most recent logs----------------------------------------

const getRecentLogs = () => {
  axios
    .get("/api/recentLogs")
    .then((res) => {
      let data = res.data;
      data.forEach((e, i, a) => {
        let milesLi = document.createElement("p");
        let dateLi = document.createElement("p");
        milesLi.textContent = a[i].miles;
        tripList.appendChild(milesLi);

        dateLi.textContent = a[i].date;
        dateList.appendChild(dateLi);
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
      res.status(200);
      getRecentLogs();
    })
    .catch((err) => {
      err.status(400);
    });
}

//Create the object body for the input------------------------

function inputFormHandler(event) {
  // event.preventDefault();

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

//Delete function---------------------------------------------------

const deleteTrip = (event) => {
  console.log(event.target.id)
  axios.delete("/api/deleteTrip/" + event.target.id)
  .then(function (res) {
    res.status(200)
  })
  .catch(function (err) {
    res.status(400).send(err)
  })
}

milesInputForm.addEventListener("submit", inputFormHandler);
