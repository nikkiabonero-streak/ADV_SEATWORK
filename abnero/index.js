const ageInput = document.getElementById("ageInput");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  let age = ageInput.value;

  if (age === "") {
    result.textContent = "Please enter your age.";
  } else {
    let days = age * 365;
    result.textContent = `You are approximately ${days} days old.`;
  }

 
  result.classList.remove("show");
  void result.offsetWidth;
  result.classList.add("show");
});
