
function changePrice(selectElement, priceId) {
    
    document.getElementById(priceId).innerHTML = selectElement.value + " SAR";
}


function addToCart(itemName, priceOrId) {
    let finalPrice;
    
    
    if (isNaN(priceOrId)) {
        let priceText = document.getElementById(priceOrId).innerHTML;
        finalPrice = Number(priceText.replace(" SAR", ""));
    } else {
        finalPrice = Number(priceOrId);
    }


    let cart = JSON.parse(localStorage.getItem('syntaxCart')) || [];
    cart.push({ name: itemName, price: finalPrice });
    localStorage.setItem('syntaxCart', JSON.stringify(cart));

    alert(itemName + " added to your cart! ☕");
}


function renderCheckout() {
    let cart = JSON.parse(localStorage.getItem('syntaxCart')) || [];
    let list = document.getElementById('order-list');
    let totalDisplay = document.getElementById('total-amount');
    let total = 0;

    if (!list) return;

    if (cart.length === 0) {
        list.innerHTML = "<li>Your cart is empty.</li>";
        totalDisplay.innerHTML = "0";
        return;
    }

    let html = "";
    cart.forEach(item => {
        html += "<li>" + item.name + " - " + item.price + " SAR</li>";
        total += Number(item.price);
    });

    list.innerHTML = html;
    totalDisplay.innerHTML = total;
}


function validateForm() {
    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;


    if(name == "" || email == "" || phone == ""){
        alert("Please fill all fields!");
        return false;
    }

    alert("Thank you " + name + "! Your order has been received ☕");
    localStorage.removeItem('syntaxCart');
    return true;
}