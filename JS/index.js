function register_account() {
    let params = {
        username: document.getElementById("username").value,
        email: document.getElementById("emailadress").value,
        password: document.getElementById("pwd").value
    }
    Bmob.User.register(params).then(res => {
        console.log(res);
        alert("注册成功");
        form_box.style.left = '5%';
        register_box.classList.add('hidden');
        login_box.classList.remove('hidden');
    }).catch(err => {
        alert(err.error);
    });
}

function login_account() {
    Bmob.User.login(document.getElementById("userName").value, document.getElementById("pWd").value).then(res => {
        location.href = "pages/home.html";
    }).catch(err => {
        alert(err.error);
    });
}