const myDivCart = document.querySelector(".header-act__cart");
const myDropdownCart = document.querySelector(".cart-dropdown");

myDivCart.addEventListener("mouseover", () => {
    myDropdownCart.style.display = "block";
})


document.addEventListener("click", function(event) {
    if (!myDropdownCart.contains(event.target) && event.target !== myDivCart) {
      myDropdownCart.style.display = "none";
    }
  });
