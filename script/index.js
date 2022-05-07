// populated from array

const flightNumbers = ["NO123", "SA342", "WZ332", "RY567", "SA567"];

// forEach values in array run method..
// create p for each value and then append to col-1
//  populated let p with array values
flightNumbers.forEach((number) => {
  let p = document.createElement("p");
  document.querySelector(".col-1").appendChild(p);
  p.innerHTML += number;
});

// destinations

const destinations = ["Bergen", "Oslo", "Trondheim", "Kristiansand", "Tromsø"];

destinations.forEach((destination) => {
  let p = document.createElement("p");
  document.querySelector(".col-2").appendChild(p);
  p.innerHTML += destination;
});

// Times

const times = ["7:30", "9:15", "10:45", "11:00", "12:00"];
times.forEach((time) => {
  let p = document.createElement("p");
  document.querySelector(".col-3").appendChild(p);
  p.innerHTML += time;
});

// Gates

const gates = ["A-43", "F-65", "H-88", "F-45", "N-10"];
gates.forEach((gate) => {
  let p = document.createElement("p");
  document.querySelector(".col-4").appendChild(p);
  p.innerHTML += gate;
});

// Remarks

const remarks = [
  "Boarding",
  "Innstilt",
  "Innsjekking",
  "Boarding",
  "Forsinket",
];
remarks.forEach((remark) => {
  let p = document.createElement("p");
  document.querySelector(".col-5").appendChild(p);
  p.innerHTML += remark;
});
