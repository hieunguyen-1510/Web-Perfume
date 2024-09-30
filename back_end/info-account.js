// Hàm chuyển đổi hiển thị mật khẩu
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}

// Hàm cho phép chỉnh sửa số điện thoại
function editPhone() {
    const phoneInput = document.getElementById('phone');
    phoneInput.disabled = false;
    phoneInput.focus();
}

// Hàm cho phép chỉnh sửa mật khẩu
function editPassword() {
    const passwordInput = document.getElementById('password');
    passwordInput.disabled = false;
    passwordInput.focus();
}

// Xử lý lưu thay đổi
document.getElementById('account-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Xử lý lưu số điện thoại và mật khẩu mới
    console.log(`Số điện thoại: ${phone}, Mật khẩu: ${password}`);
    alert('Lưu thay đổi thành công!');

    // Sau khi lưu xong, khóa lại các input
    document.getElementById('phone').disabled = true;
    document.getElementById('password').disabled = true;
});
