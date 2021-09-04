// Video Slider JS
const videoSlide = document.querySelector(".videoSlider");
const videobtn1 = document.querySelector("#videobtn1");
const videobtn2 = document.querySelector("#videobtn2");
const videobtn3 = document.querySelector("#videobtn3");
const videobtn4 = document.querySelector("#videobtn4");
const video1 = document.querySelector("#video1");
const video2 = document.querySelector("#video2");
const video3 = document.querySelector("#video3");
const video4 = document.querySelector("#video4");

videobtn1.onclick = function () {
  videoSlide.style.transform = "translateX(25%)";
  videobtn1.classList.add("activeVideoSlide");
  videobtn2.classList.remove("activeVideoSlide");
  videobtn3.classList.remove("activeVideoSlide");
  videobtn4.classList.remove("activeVideoSlide");

  video1.classList.add("activeVideo");
  video2.classList.remove("activeVideo");
  video3.classList.remove("activeVideo");
  video4.classList.remove("activeVideo");
};

videobtn2.onclick = function () {
  videoSlide.style.transform = "translateX(-30%)";

  videobtn2.classList.add("activeVideoSlide");
  videobtn1.classList.remove("activeVideoSlide");
  videobtn3.classList.remove("activeVideoSlide");
  videobtn4.classList.remove("activeVideoSlide");

  video1.classList.remove("activeVideo");
  video2.classList.add("activeVideo");
  video3.classList.remove("activeVideo");
  video4.classList.remove("activeVideo");
};

videobtn3.onclick = function () {
  videoSlide.style.transform = "translateX(-85%)";

  videobtn3.classList.add("activeVideoSlide");
  videobtn2.classList.remove("activeVideoSlide");
  videobtn1.classList.remove("activeVideoSlide");
  videobtn4.classList.remove("activeVideoSlide");

  video1.classList.remove("activeVideo");
  video2.classList.remove("activeVideo");
  video3.classList.add("activeVideo");
  video4.classList.remove("activeVideo");
};

videobtn4.onclick = function () {
  videoSlide.style.transform = "translateX(-140%)";

  videobtn4.classList.add("activeVideoSlide");
  videobtn2.classList.remove("activeVideoSlide");
  videobtn1.classList.remove("activeVideoSlide");
  videobtn3.classList.remove("activeVideoSlide");

  video1.classList.remove("activeVideo");
  video2.classList.remove("activeVideo");
  video4.classList.add("activeVideo");
  video3.classList.remove("activeVideo");
};

// Calculator JS

// BMI
const resultContainer = document.querySelector(".resultsContainer");
const bmiWeight = document.querySelector(".form__input__weight__bmi");
const bmiHeight = document.querySelector(".form__input__height__bmi");
const bmiBtn = document.querySelector(".submitBtn__bmi");
bmiBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const weight = bmiWeight.value;
  const height = bmiHeight.value;
  resultContainer.innerHTML = "";
  if (weight && height) {
    bmiHeight.value = "";
    bmiWeight.value = "";
    let BMI = Math.trunc((weight / (height * height)) * 1000000);
    BMI = BMI / 100;
    resultContainer.innerHTML = `<br><p>Details you Entered are Height ${height}cm and Weight ${weight}Kg</p>`;
    resultContainer.innerHTML += `<br><br><h3>Your BMI is ${BMI}</h3>`;
    if (BMI < 18) resultContainer.innerHTML += `<br><h3>(UNDERWEIGHT)</h3>`;
    else if (BMI < 25) resultContainer.innerHTML += `<br><h3>(NORMAL)</h3>`;
    else if (BMI < 30) resultContainer.innerHTML += `<br><h3>(OVERWEIGHT)</h3>`;
    else if (BMI < 18) resultContainer.innerHTML += `<br><h3>(OBESE)</h3>`;
    else resultContainer.innerHTML += `<br><h3>(EXTREMELY OBESE)</h3>`;
  } else {
    resultContainer.innerHTML = `<br><br><h3>Any INPUT is Empty, Please Check !!</h3>`;
  }
});

// BMR
const bmrAge = document.querySelector(".form__input__age__bmr");
const bmrWeight = document.querySelector(".form__input__weight__bmr");
const bmrHeight = document.querySelector(".form__input__height__bmr");
const bmrBtn = document.querySelector(".submitBtn__bmr");
bmrBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const bmrGenderArr = document.getElementsByName("csex11");
  const bmrGender = bmrGenderArr[0].checked ? "Male" : "Female";
  const age = bmrAge.value;
  const weight = bmrWeight.value;
  const height = bmrHeight.value;
  resultContainer.innerHTML = "";
  if (weight && height && age) {
    bmrHeight.value = "";
    bmrWeight.value = "";
    bmrAge.value = "";
    resultContainer.innerHTML = `<br><p>Details you Entered are Age ${age}years, Gender ${bmrGender}, Height ${height}cm and Weight ${weight}Kg</p>`;
    if (bmrGender === "Male") {
      let BMR = Math.trunc((10 * weight + 6.25 * height - 5 * age + 5) * 100);
      BMR = BMR / 100;
      resultContainer.innerHTML += `<br><br><h3>Your BMR is ${BMR}[Approx]</h3>`;
    } else {
      let BMR = Math.trunc((10 * weight + 6.25 * height - 5 * age - 161) * 100);
      BMR = BMR / 100;
      resultContainer.innerHTML += `<br><br><h3>Your BMR is ${BMR}[Approx]</h3>`;
    }
  } else {
    resultContainer.innerHTML = `<br><br><h3>Any INPUT is Empty, Please Check !!</h3>`;
  }
});

// Ideal Weight
const iwAge = document.querySelector(".form__input__age__iw");
const iwHeight = document.querySelector(".form__input__height__iw");
const iwBtn = document.querySelector(".submitBtn__iw");
iwBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const iwGenderArr = document.getElementsByName("csex22");
  const iwGender = iwGenderArr[0].checked ? "Male" : "Female";
  const height = iwHeight.value;
  const age = iwAge.value;
  resultContainer.innerHTML = "";
  if (age && height) {
    iwHeight.value = "";
    iwAge.value = "";
    resultContainer.innerHTML = `<br><p>Details you Entered are Age ${age}years, Gender ${iwGender} and Height ${height}cm</p>`;
    if (iwGender === "Male") {
      let idealW = Math.trunc(height - 100 - (height - 150) / 2);
      resultContainer.innerHTML += `<br><br><h3>Ideal Weight should be : ${idealW}Kg</h3>`;
    } else {
      let idealW = Math.trunc(height - 100 - (height - 150) / 4);
      resultContainer.innerHTML += `<br><br><h3>Ideal Weight should be : ${idealW}Kg</h3>`;
    }
  } else {
    resultContainer.innerHTML = `<br><br><h3>Any INPUT is Empty, Please Check !!</h3>`;
  }
});

const lbmWeight = document.querySelector(".form__input__weight__lbm");
const lbmHeight = document.querySelector(".form__input__height__lbm");
const lbmBtn = document.querySelector(".submitBtn__lbm");
lbmBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const lbmGenderArr = document.getElementsByName("csex33");
  const lbmGender = lbmGenderArr[0].checked ? "Male" : "Female";
  const weight = lbmWeight.value;
  const height = lbmHeight.value;
  resultContainer.innerHTML = "";
  if (weight && height) {
    lbmHeight.value = "";
    lbmWeight.value = "";
    resultContainer.innerHTML = `<br><p>Details you Entered are Gender ${lbmGender}, Height ${height}cm and Weight ${weight}Kg</p>`;
    if (lbmGender === "Male") {
      let LBM = Math.trunc(
        (0.3281 * weight + 0.33929 * height - 29.5336) * 100
      );
      LBM = LBM / 100;
      resultContainer.innerHTML += `<br><br><h3>Lean Body Mass is : ${LBM}Kg[Approx]</h3>`;
    } else {
      let LBM = Math.trunc(
        (0.29569 * weight + 0.41813 * height - 43.2933) * 100
      );
      LBM = LBM / 100;
      resultContainer.innerHTML += `<br><br><h3>Lean Body Mass is : ${LBM}Kg[Approx]</h3>`;
    }
  } else {
    resultContainer.innerHTML = `<br><br><h3>Any INPUT is Empty, Please Check !!</h3>`;
  }
});
