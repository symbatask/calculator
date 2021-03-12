
let buttons = document.querySelectorAll("button")
let out = document.querySelector(".right1")
let num = ""
let expression = ""
let checkNum


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
        else if (currentValue === "%") {

            out.innerText = expression*0.01
            num = ''
        }
        else if(["+","-","*","/"].includes(currentValue)) {
            if(["+","-","*","/"].includes(expression[expression.length-1])){
                expression=expression.slice(0,expression.length-1)+currentValue

            }
            else{
                if(checkNum===false){
                    expression=expression+currentValue
                    checkNum=true
                }
                else {
                    out.textContent= eval(expression)
                    expression=eval(expression)+currentValue
                    num = ""
                }
            }
        }



        else{
            num = num+currentValue
            expression = expression+currentValue
            out.textContent  = num

        }

    })
})