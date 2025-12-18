

let cartData = () => {
    let str = '';
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    console.log(cart);
    cart.forEach((item, index) => {
        str += `<tr>
                    <th scope="col">
                        <img src="${item.image}" alt="img-1">
                    </th>
                    <th scope="col">
                        <button class="p-2" onclick="removeQty(${index})">-</button>
                        <span class="p-2" id="qty-${index}">${item.qty || 1}</span>
                        <button class="p-2" onclick="addQty(${index})">+</button>
                        <button class="btn btn-danger" onclick="removeItem(${index})">Remove</button>
                    </th>
                    <th scope="col">
                        ₹${item.price * (item.qty || 1)}
                    </th>
                </tr>`;
    });
    str += '<tr><th colspan="3" class="text-end">Total: ₹' + cart.reduce((total, item) => total + item.price * (item.qty || 1), 0) + '</th></tr>';
    document.querySelector('.cart-body').innerHTML = str;
    localStorage.setItem("cartItems", JSON.stringify(cart));
}
cartData();

let addQty = (index) => {
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    cart[index].qty = (cart[index].qty || 1) + 1;
    document.getElementById(`qty-${index}`).innerText = cart[index].qty;
    localStorage.setItem("cartItems", JSON.stringify(cart));
}

let removeQty = (index) => {
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (cart[index].qty > 1) {
        cart[index].qty--;
        localStorage.setItem("cartItems", JSON.stringify(cart));
        document.getElementById(`qty-${index}`).innerText = cart[index].qty;

        let currentCount = JSON.parse(localStorage.getItem('cart')) || 0;
        let newCount = currentCount - 1;
        if (newCount < 0) newCount = 0;
        cartCount.innerHTML = newCount;
        localStorage.setItem('cart', JSON.stringify(newCount));
    }
}

let removeItem = (index) => {
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    let removedQty = cart[index].qty || 1;
    cart.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cart));

    let currentCount = JSON.parse(localStorage.getItem('cart')) || 0;
    let newCount = currentCount - removedQty;
    if (newCount < 0) newCount = 0;
    cartCount.innerHTML = newCount;
    localStorage.setItem('cart', JSON.stringify(newCount));

    cartData();
}

let saveCount = JSON.parse(localStorage.getItem('cart')) || 0;
cartCount.innerHTML = saveCount;
let cartAdd = () => {
    let newCount = parseInt(cartCount.innerHTML) + 1;    
    cartCount.innerHTML = newCount;
    localStorage.setItem('cart', JSON.stringify(newCount));
}
