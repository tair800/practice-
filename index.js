
let buttons=document.querySelectorAll(".tablinks");
let divs=document.querySelectorAll(".tabcontent");

buttons.forEach(btn=>{
    btn.onclick=function(){
        divs.forEach(div=>{
            div.classList.add("d-none")
        })
        let dataId=btn.getAttribute("data-id")
        let div=document.getElementById(dataId)
        div.classList.remove("d-none")        
    }
})