let oilChangeInput = document.getElementById("oilChangeInput");
let oilChangeInputForm = document.getElementById("oilChangeInputForm");
let oilChangeTripList = document.getElementById("oilChangeTripList");
let oilChangeDateList = document.getElementById("oilChangeDateList");

//Get Oil change history--------------------------------------------

const getOilChangeHistory = () => {
  axios
    .get("/api/oilChangeHistory")
    .then((res) => {
      let data = res.data;
      data.forEach((e, i, a) => {
        let milesLi = document.createElement("p");
        let dateLi = document.createElement("p");
        // milesLi.setAttribute("id", "oMilesP");
        // dateLi.setAttribute("id", "oDateP");
        milesLi.textContent = a[i].changed_at;
        oilChangeTripList.appendChild(milesLi);

        dateLi.textContent = a[i].date;
        oilChangeDateList.appendChild(dateLi);

        // milesLi.addEventListener("click", deleteTrip)
        // dateLi.addEventListener("click", deleteTrip)
    });
    res.send(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

getOilChangeHistory();

//Submit Oil change------------------------------------------------------
function oilChangeInputFormHandler(event) {
  // event.preventDefault();
  console.log(oilChangeInput.value);

  const date = new Date();
  let currentDate = `${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getFullYear()}`;

  let body = {
    date: currentDate,
    changed_at: `${oilChangeInput.value} miles`,
  };

  // console.log(body)

  newOilChangeLog(body);
  oilChangeInput.value = "";
}

//Oil changed log submit----------------------------------------------------
function newOilChangeLog(body) {
  // console.log(body);
  axios
    .post("/api/oilChangeLog", body)
    .then((res) => {
      res.status(200);
      getRecentLogs();
    })
    .catch((err) => {
      err.status(400);
    });
}

oilChangeInputForm.addEventListener("submit", oilChangeInputFormHandler);
