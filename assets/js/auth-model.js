const accountHeader = document.querySelector('#model-account')
console.log(accountHeader)

const authModelTemplate = document.querySelector('#auth-modal-template')
console.log(authModelTemplate)

accountHeader.addEventListener("click", () => {
    authModelTemplate.style.display = "block";
})

authModelTemplate.addEventListener("click" , (e) => {
    console.log(e.target)
    if(e.target === authModelTemplate){
        authModelTemplate.style.display = "none";
    }
})

