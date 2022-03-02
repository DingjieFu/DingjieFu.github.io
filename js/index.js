// 初始化
Bmob.initialize("f89ecd993347c04e", "001103");
Bmob.debug(true);

// 函数

// 注册账号
function register_account() {
    let params = {
        username: document.getElementById("username").value,
        email: document.getElementById("emailadress").value,
        password: document.getElementById("pwd").value
    }
    let confirmPwd = document.getElementById("confirmPwd").value
    if (params.password === confirmPwd) {
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
    else {
        alert("密码不一致")
    }
}
// 登录账号
function login_account() {
    Bmob.User.login(document.getElementById("userName").value, document.getElementById("pWd").value).then(res => {
        location.href = "pages/home.html";
    }).catch(err => {
        alert(err.error);
    });
}