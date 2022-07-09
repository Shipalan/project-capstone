let milesInputForm = document.getElementById("milesInputForm");
let milesInput = document.getElementById("milesInput");
const date = new Date();

const getRecentLogs = () => {
  axios
    .get("/api/recentLogs")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// const getRecentLogs = () => {
//   axios.get('/api/recentLogs')
//       .then(({data: {date, miles}}) => {
//           console.log(date)
//           console.log(miles)
//       })
// }

function newLog(body) {
  console.log("new log", body);
  axios.post("/api/log", body).then((res) => {
    getRecentLogs();
    console.log("this is body", res.data);
  });
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

  newLog(body);
  milesInput.value = "";
}

getRecentLogs
milesInputForm.addEventListener("submit", inputFormHandler);
