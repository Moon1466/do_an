const plusValue = document.querySelector("#plus")
const minusValue = document.querySelector("#minus")
const productValue = document.querySelector("#productValue")

console.log(productValue)

let initValue = 1
productValue.textContent = initValue;

plusValue.addEventListener("click" , () =>{
     if (initValue >= 1) {
        initValue++
        productValue.textContent = initValue
     }    
})

minusValue.addEventListener("click", () =>{
    if (initValue > 1) {
        initValue--
        productValue.textContent = initValue
     }
 })