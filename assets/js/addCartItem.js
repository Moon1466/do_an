const cartListItem = document.querySelector(".cart__item-list")
const cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart)
const cartHTML = cart.map(({ image, name, price, quantity }) => {
    return `
                                 <li class="cart-item">
                                    <div class="cart-item__wrapper">
                                        <div class="cart-item__selection">
                                            <input type="checkbox" class="cart-item__select">
                                        </div>
                                        <div class="cart-item__img-container">
                                            <img src="${image}" alt=""
                                                class="cart-item__img">
                                        </div>
                                        <div class="cart-item__detail">
                                            <div class="cart-item__name">${name}</div>
                                            <div class="cart-item__price">${price}</div>
                                            <div class="cart-item__notice"></div>
                                        </div>
                                        <div class="cart-item__quantity">
                                            ${quantity}
                                        </div>
                                        <div class="cart-item__total">
${parseFloat(price.replace(/[,.đ]/g, "")) * quantity} đ
                                            </div>
                                        <div class="cart-item__remove">
                                            <a>
                                                <img src="./assets/images/icon/remove.svg" alt=""
                                                    class="cart-item__icon">
                                            </a>
                                        </div>
                                    </div>
                                </li>
    `
}).join()

cartListItem.innerHTML = cartHTML;