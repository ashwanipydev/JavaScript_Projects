const clockEl = document.querySelector("#clock")
setInterval(function(){
  let date = new Date()
  clockEl.innerHTML = date.toLocaleTimeString()
},1000)