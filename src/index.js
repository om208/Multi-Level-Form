import "../assets/css/style.css";

// const form = document.querySelector("form");
const form = document.forms.multi_Level_Form;
// ======> reference of form

const onlyContainer = document.querySelector(".container");

// const steps = document.querySelectorAll("form .step");
const steps = Array.from(document.querySelectorAll("form .step"));
// ======> get array of all the all HTML elements

const nextBtn = document.querySelectorAll("form .next-btn");

const prevBtn = document.querySelectorAll("form .previous-btn");

// const showForm = document.getElementById("conform_the_details");

// console.log(showForm);
//-------------------------------------------------------------------------------------------------------------------------------

const fName = document.getElementById("firstName");
console.log(fName);

//-------------------------------------------------------------------------------------------------------------------------------

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
//------------------------------------------ Above Section for "Next" Button Functionality----------------------------------------
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});
//------------------------------------------ Above Section for "Previous" Button Functionality----------------------------------------

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}
//------------------------------------------ Above section of "function use by Next and Previous Button"----------------------------------------

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  console.log("Submit Event Fired");
  const formdata = event.target;

  // console.log(formdata);
  new FormData(formdata);
  // =====>immediate after new formData function constructor created
  // ======>"onformdata" event trigred
}

form.addEventListener("formdata", handleFormData);

function handleFormData(event) {
  const data = event.formData;
  console.log("formdata is created");

  const extratedData = [...data];

  console.log([extratedData]);

  console.log(Object.prototype.toString.call(data));
  // ====> we get of all inputs values in "formData" datatype, it is private datatype
  // =======> and is empty
  // =======> need to extract information from it using (...spread) spread Operator
  //=====> formdata

  //----------------------------------------------------------

  const entriesObj = Object.fromEntries(extratedData);
  const payloadFormat = JSON.stringify(entriesObj);

  console.log(payloadFormat);
  form.reset();

  console.log(onlyContainer);
  onlyContainer.innerHTML = `
  <div>
    <h1> <strong>Your form is Successfully submited</strong></h1>
    <br>
    <p> and your input data is ready to use anywair I am convert it into <strong>JSON format </strong></p>
    <br>
    <p> JSON format of this input :-
    <br>
    ${payloadFormat}</p>
    <br>
    <p> or you can see in console Window open Developer Mode of browser see it in console <p>
    <br>
    </div>
  
    `;
}

//-------------------------------------------------------------------------------------------------------------------------------

// -----------------> old method of getting data from input fillds

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const inputs = [];
//   form.querySelectorAll("input").forEach((input) => {
//     const { name, value } = input;
//     inputs.push({ name, value });
//   });
//   console.log(inputs);
//   form.reset();
// });
