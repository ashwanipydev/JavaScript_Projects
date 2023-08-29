const boxEl = document.querySelectorAll(".box")
const bodyEl = document.querySelector("body")

boxEl.forEach((box)=> box.addEventListener("click",(e)=>{
    const key = e.target.id
    switch (key) {
        case e.target.id = "grey":
            bodyEl.style.backgroundColor = e.target.id
            break;
        case e.target.id = "white":
            bodyEl.style.backgroundColor = e.target.id
            break;
        case e.target.id = "blue":
            bodyEl.style.backgroundColor = e.target.id
            break;
        case e.target.id = "yellow":
            bodyEl.style.backgroundColor = e.target.id
            break;
        case e.target.id = "green":
            bodyEl.style.backgroundColor = e.target.id
            break;
         
        default:
            break;
    }
}))