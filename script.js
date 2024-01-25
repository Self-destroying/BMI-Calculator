// select input for user's enter
let ageValue = document.getElementById("age");
let weightValue = document.getElementById("weight");
let heightValue = document.getElementById("height");
// select button
let button = document.getElementById("button");
// select form for
let form = document.querySelector("form");
// select gender for calculate BMI
let gender = document.querySelectorAll(".gender");
// default svg in page
let defultB = document.getElementById("SvgDad");
// tiny woman
let tinWoman = document.getElementById("tinyDad");
// tiny child woman
let tintChildWoman = document.querySelector("#tinyChild #result");
// normal woman
let normalWoman = document.getElementById("normalDad");
// normal child woman
let normalChildWoman = document.querySelector("#normalChild #result1");
// fat woman
let overAgeWoman = document.getElementById("overageDad");
// fat woman child
let fatChildWoman = document.querySelector("#overageChild #result5");
// tiny man
let tinyman = document.getElementById("tinyMen");
// tiny man child
let childManTiny = document.querySelector("#tinyCMen #result2");
// normal man
let normalMan = document.getElementById("normalMen");
// normal child man
let childManNormal = document.querySelector("#normalCMen #result3");
// fat man
let fatMan = document.getElementById("overMen");
// fat man child
let childManFat = document.querySelector("#overCMen #result4");
// select result in html
// let p = document.getElementById("result");
// global gender value
let fmGender;
// not access for default act
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
// define event click for button
button.addEventListener("click", bMI);
// function calculate
function bMI() {
  // calculate BMI
  let ages = +ageValue.value;
  let weights = +weightValue.value;
  let heights = +heightValue.value;
  // just for check
  console.log(ages);
  console.log(weights);
  console.log(heights);
  let calculateHeight = heights / 100;
  let bmiCalculate = weights / (calculateHeight * calculateHeight);
  // check gender and BMI for male and female
  // man
  // style normal man
  if (fmGender == "male") {
    if (bmiCalculate >= 18.5 && bmiCalculate <= 25) {
      defultB.style.display = "none";
      normalMan.style.display = "flex";
      // add p to html card
      childManNormal.innerHTML = "";
      childManNormal.innerHTML += `<strong style= 'color: #ded6d6;
      text-align: center;
      font-family: "Hey Comic";
      font-size: 30px;'>your BMI is normal :
      <br>
       ${bmiCalculate.toFixed(2)}</strong>
      <strong style='color: #ded6d6;text-align: center;
      font-family: "Hey Comic";font-size: 30px;'>your age is: ${ages}</strong>`;
      // remove another card
      tinyman.style.display = "none";
      fatMan.style.display = "none";
      // remove woman card
      tinWoman.style.display = "none";
      normalWoman.style.display = "none";
      overAgeWoman.style.display = "none";
      // start tint man
    } else if (bmiCalculate <= 16 && bmiCalculate < 18.5) {
      tinyman.style.display = "flex";
      // add p to html card
      childManTiny.innerHTML = "";
      childManTiny.innerHTML += `<strong style= 'color: #ded6d6;
      text-align: center;
      font-family: "Hey Comic";
      font-size: 30px;'>your BMI is underage :
      <br>
       ${bmiCalculate.toFixed(2)}</strong>
      <strong style='color: #ded6d6;text-align: center;
      font-family: "Hey Comic";font-size: 30px;'>your age is: ${ages}</strong>`;
      // remove another card
      defultB.style.display = "none";
      fatMan.style.display = "none";
      normalMan.style.display = "none";
      // remove woman card
      tinWoman.style.display = "none";
      normalWoman.style.display = "none";
      overAgeWoman.style.display = "none";
      //  start fat man
    } else if (bmiCalculate > 25 && bmiCalculate < 100) {
      fatMan.style.display = "flex";
      defultB.style.display = "none";
      // add p to html card
      childManFat.innerHTML = "";
      childManFat.innerHTML += `<strong style= 'color: #ded6d6;
      text-align: center;
      font-family: "Hey Comic";
      font-size: 30px;'>your BMI is overage :
      <br>
       ${bmiCalculate.toFixed(2)}</strong>
      <strong style='color: #ded6d6;text-align: center;
      font-family: "Hey Comic";font-size: 30px;'>your age is: ${ages}</strong>`;
      // remove another card
      normalMan.style.display = "none";
      tinyman.style.display = "none";
      // remove woman card
      tinWoman.style.display = "none";
      normalWoman.style.display = "none";
      overAgeWoman.style.display = "none";
    }
  }
  // female
  else if (fmGender == "female") {
    if (bmiCalculate > 18.5 && bmiCalculate <= 24.9) {
      normalWoman.style.display = "flex";
      // remove another card
      tinWoman.style.display = "none";
      overAgeWoman.style.display = "none";
      // man remove
      tinyman.style.display = "none";
      normalMan.style.display = "none";
      fatMan.style.display = "none";
      defultB.style.display = "none";
      // add p in html
      normalChildWoman.innerHTML = "";
      normalChildWoman.innerHTML += `<strong style= 'color: #ded6d6;
      text-align: center;
      font-family: "Hey Comic";
      font-size: 30px;'>your BMI is normal :
      <br>
       ${bmiCalculate.toFixed(2)}</strong>
      <strong style='color: #ded6d6;text-align: center;
      font-family: "Hey Comic";font-size: 30px;'>your age is: ${ages}</strong>`;
    } else if (bmiCalculate <= 18.5) {
      tinWoman.style.display = "flex";
      // remove another card
      defultB.style.display = "none";
      normalWoman.style.display = "none";
      overAgeWoman.style.display = "none";
      // remove man card
      tinyman.style.display = "none";
      normalMan.style.display = "none";
      fatMan.style.display = "none";
      tintChildWoman.innerHTML = "";
      tintChildWoman.innerHTML += `<strong style= 'color: #ded6d6;
      text-align: center;
      font-family: "Hey Comic";
      font-size: 30px;'>your BMI is underage :
      <br>
       ${bmiCalculate.toFixed(2)}</strong>
      <strong style='color: #ded6d6;text-align: center;
      font-family: "Hey Comic";font-size: 30px;'>your age is:
      <br>
      ${ages}</strong>`;
    } else if (bmiCalculate >= 25 && bmiCalculate <= 180) {
      overAgeWoman.style.display = "flex";
      // remove another card
      tinWoman.style.display = "none";
      normalWoman.style.display = "none";
      defultB.style.display = "none";
      // remove man card
      tinyman.style.display = "none";
      normalMan.style.display = "none";
      fatMan.style.display = "none";
      fatChildWoman.innerHTML = "";
      fatChildWoman.innerHTML += `<strong style= 'color: #ded6d6;
      text-align: center;
      font-family: "Hey Comic";
      font-size: 30px;'>your BMI is overage :
      <br>
       ${bmiCalculate.toFixed(2)}</strong>
      <strong style='color: #ded6d6;text-align: center;
      font-family: "Hey Comic";font-size: 30px;'>your age is: ${ages}</strong>`;
    }
    console.log(bmiCalculate.toFixed(2));
  }
}
// search in gender item
gender.forEach((item) => {
  item.addEventListener("click", recolonization);
  function recolonization() {
    fmGender = item.getAttribute("data-gender");
  }
});
