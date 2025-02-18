const nameProduct = document.querySelector("#nameProduct");
const imgProduct = document.querySelector("#imgProduct")
const priceValue = document.querySelector("#priceValue")
const appCompleted = document.querySelector("#add-completed")


const addBtn = document.querySelector("#addCart")

function showAddCompletedMessage() {
     const messageDiv = document.createElement("div");
    messageDiv.id = "add-completed";
    messageDiv.className = "add-completed";
    messageDiv.style.display = "flex";
    messageDiv.innerHTML = `
        <img src="./assets/images/icon/green-succsess.svg" alt="" class="add-completed__img">
        <span class="add-completed__label">Đã thêm sản phẩm thành công</span>
    `;

   document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

addBtn.addEventListener("click", () => {
    const product = {
        image: imgProduct ? imgProduct.src : '',
        name: nameProduct ? nameProduct.textContent : '',
        quantity: productValue ? productValue.textContent : 0,
        price: priceValue ? priceValue.textContent : ''
    };

    const cart = JSON.parse(localStorage.getItem('cart')) || [];



    const existingProduct = cart.find(item => item.name === product.name);

    if (existingProduct) {
        // Nếu sản phẩm đã có trong giỏ hàng, hiển thị thông báo hoặc thực hiện hành động khác
        alert('Sản phẩm này đã có trong giỏ hàng!');
    } else {
        // Nếu sản phẩm chưa có trong giỏ hàng, thêm vào giỏ hàng
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Sản phẩm đã được thêm vào giỏ hàng.');


        showAddCompletedMessage();



    }


})




 

