document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        window.location.href = 'index.html'; // Redirige a la página principal
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

let items = [];
let total = 0;

function addItem() {
    const ref = document.getElementById('ref').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const size = document.getElementById('size').value;
    const price = parseFloat(document.getElementById('price').value);
    
    const item = { ref, quantity, size, price, subtotal: price * quantity };
    items.push(item);
    updateCart();
}

function updateCart() {
    const cart = document.getElementById('cart');
    cart.innerHTML = '';
    total = 0;

    items.forEach((item, index) => {
        total += item.subtotal;
        cart.innerHTML += `<tr>
            <td>${item.ref}</td>
            <td>${item.quantity}</td>
            <td>${item.size}</td>
            <td>${item.price}</td>
            <td>${item.subtotal}</td>
            <td><button onclick="removeItem(${index})">Eliminar</button></td>
        </tr>`;
    });

    document.getElementById('total').innerText = total.toFixed(2);
}

function removeItem(index) {
    items.splice(index, 1);
    updateCart();
}
