const formEl = document.querySelector("form")


formEl.addEventListener("submit",(e)=>{
  e.preventDefault()
  const heightEl = parseInt(document.querySelector("#height").value)
  const weightEl = parseInt(document.querySelector("#weight").value)
  const resultsEl = document.querySelector("#results")

  if(heightEl < 0 || isNaN(heightEl) || heightEl === " "){
    resultsEl.innerHTML = `Please enter a valid height.${heightEl}`
  }else if(weightEl < 0 || isNaN(weightEl) || weightEl === ""){
    resultsEl.innerHTML = `Please enter a valid weight.${weightEl}`
  }else{
    const bmi = (weightEl / ((heightEl * heightEl) / 10000)).toFixed(2);
    //show the result
    resultsEl.innerHTML = `<span>${bmi}</span>`;
  }

})