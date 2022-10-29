// 1.获取元素
// 账号
let user = document.querySelector('.user');
let user_span = document.querySelector('.user_span');
// 密码
let pwd = document.querySelector('.pwd')
let pwd_span = document.querySelector('.pwd_span')
    // 按钮
let btn = document.querySelector('button')
    // 定义正则
user.addEventListener('change', function() {
        console.log('1')
        let reg = /^[a-z ]{1,10}$/
        if (reg.test(user.value)) {
            user_span.className = 'right'
            user_span.innerHTML = '正确'
        } else {
            user_span.className = 'error'
            user_span.innerHTML = '输入错误'
        }
    })
    // 密码
pwd.addEventListener('change', function() {
    console.log('1')
    let reg = /^[0-9a-z ]{1,10}$/
    if (reg.test(pwd.value)) {
        pwd_span.className = 'right'
        pwd_span.innerHTML = '正确'
    } else {
        pwd_span.className = 'error'
        pwd_span.innerHTML = '输入错误'
    }
})
// 阻止按钮自动刷新
btn.addEventListener('click', function(e) {
    if (pwd_span.classList.contains('right') && user_span.classList.contains('right')) {
        btn.style.type = 'submit'
        console.log(user)
        localStorage.username = user.value;
        localStorage.passward = pwd.value;
open('http://localhost:63342/%E4%B8%AA%E4%BA%BA/index.html')
        console.log(user.value)


    } else {
        e.preventDefault()
        alert('用户名或密码错误！')
    }
})
