// DOM references
let inpFno = document.querySelector("#inpFno");
let inpDes = document.querySelector("#inpDes");
let inpTime = document.querySelector("#inpTime");
let inpGate = document.querySelector("#inpGate");
let inpRemarks = document.querySelector("#inpRemarks");

const addBtn = document.querySelector(".add");
const box = document.querySelector(".box");
const admin = document.querySelector(".admin");
const inputs = document.querySelectorAll(".input");

const airportMessage = document.querySelector(".airportMessage");

const checkPassword = document.querySelector(".checkPassword");
const inpPassword = document.querySelector(".inpPassword");

let flight; // made available for global scope
let iterated;
// add new row / div by creating for each instance of input fields
// populate divs with new values

addBtn.onclick = () => {
  flight = [
    inpFno.value,
    inpDes.value,
    inpTime.value,
    inpGate.value,
    inpRemarks.value,
  ];

  // create divs for each instance of field inputs
  for (i = 0; i < flight.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "newflight");

    document.querySelector(".subheaders").appendChild(div);

    div.innerHTML = flight[i];
    console.log(flight[i]);
  }

  // input values set empty
  for (i = 0; i < flight.length; i++) {
    const inputs = document.querySelectorAll(".input");
    inputs[i].value = "";
  }
};

// random access keys
let keymaster;
let accessKey = new Uint32Array(1);
window.crypto.getRandomValues(accessKey);

for (var i = 0; i < accessKey.length; i++) {
  console.log(accessKey[i]);
  keymaster = accessKey[i];
}

//  access control
checkPassword.onclick = () => {
  if (inpPassword.value == keymaster + "12") {
    console.log("Tillatelse gitt");
    document.querySelector(".tilgang").style.visibility = "hidden";

    admin.style.display = "block";
  } else {
    console.log("Ingen tillatelse");
  }
  inpPassword.value = "";
};

// close admin input

document.querySelector(".close").onclick = () => {
  admin.style.display = "none";
};

// show admin log in field
document.querySelector(".adminBox").onclick = () => {
  document.querySelector(".tilgang").style.visibility = "visible";
};
