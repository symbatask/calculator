
let buttons = document.querySelectorAll(".calc")
let out = document.querySelector(".viewer")

 let num = ""
let onecheck = false
let expression = ""



buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        let currentValue = btn.textContent
        if(currentValue === "C"){

            num = ""
            expression = ""
            out.textContent = ""
        }
        else if (currentValue === "="){
            out.textContent= eval(expression)
            num = ""
        }
        else if(["+","-","*","/"].includes(currentValue)) {
          out.textContent= eval(expression)
            expression=eval(expression)+currentValue
            num = ""
            }



            else{
         num = num+currentValue
            expression = expression+currentValue
            out.textContent  = num
            
        }

    })
})



















