document.addEventListener('DOMContentLoaded', () => {
    // Lấy giỏ hàng từ localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartBody = document.getElementById('cart-body');
    const cartSummary = document.querySelector('.cart-summary');

    // Kiểm tra giỏ hàng không rỗng
    if (cart.length === 0) {
        cartBody.innerHTML = '<p>Giỏ hàng của bạn đang trống.</p>';
    } else {
        let totalPrice = 0;

        cart.forEach(product => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px;">
                <span>${product.name}</span> - 
                <span>Giá: $${product.price.toFixed(2)}</span> - 
                <span>Số lượng: ${product.quantity}</span>
            `;
            cartBody.appendChild(cartItem);

            // Tính tổng giá
            totalPrice += product.price * product.quantity;
        });

        cartSummary.innerHTML = `Tổng giá: $${totalPrice.toFixed(2)}`;
    }

    // Hiển thị thông tin người dùng nếu cần
    const userEmail = localStorage.getItem('userEmail');
    const userPhone = localStorage.getItem('userPhone');
    const userAddress = localStorage.getItem('userAddress');

    document.getElementById('user-email').innerText = userEmail || 'Chưa có thông tin';
    document.getElementById('user-phone').innerText = userPhone || 'Chưa có thông tin';
    document.getElementById('user-address').innerText = userAddress || 'Chưa có thông tin';
});
