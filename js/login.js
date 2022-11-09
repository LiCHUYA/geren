// 1.获取元素
// 登陆界面---------------------------------------------
// 账号
let user = document.querySelector('.user');
let user_span = document.querySelector('.user_span');
// 密码
let pwd = document.querySelector('.pwd')
let pwd_span = document.querySelector('.pwd_span')


// 注册界面-------------------------------------------------
let user1 = document.querySelector('.user1');
let user1_span = document.querySelector('.user1_span');
// 密码
let pwd1 = document.querySelector('.pwd1')
let pwd1_span = document.querySelector('.pwd1_span')
// 密码
let repwd2 = document.querySelector('.repwd2')
let pwd2_span = document.querySelector('.pwd2_span')
let btn_zhuce=document.querySelector('#btn_zhuce')

// 按钮
let btn = document.querySelector('button')
// 封装的正则函数
function verifyuser(reg, u, i_span) {
  if (reg.test(u.value)) {
    i_span.className = 'right'
    i_span.innerHTML = '正确'
  } else {
    i_span.className = 'error'
    i_span.innerHTML = '输入错误'
  }
}
// 定义正则
user.addEventListener('change', function () {
  let reg = /^[A-Za-z0-9]+$/
  verifyuser(reg, user, user_span)
})
// 密码
pwd.addEventListener('change', function () {
  let reg = /^[A-Za-z0-9]+$/
  verifyuser(reg, pwd, pwd_span)
})

// 注册界面的表单
user1.addEventListener('change', function () {
  let reg = /^[A-Za-z0-9]+$/
  verifyuser(reg, user1, user1_span)
})
// 密码
pwd1.addEventListener('change', function () {
  let reg = /^[A-Za-z0-9]+$/
  verifyuser(reg, pwd1, pwd1_span)
})
// 复选密码
repwd2.addEventListener('change', function () {
  let reg = /^[A-Za-z0-9]+$/
  verifyuser(reg, repwd2, pwd2_span)
  if (repwd2.value !== pwd1.value) {
    pwd2_span.className = 'error'
    pwd2_span.innerHTML = '输入错误'
  } else {
    pwd2_span.className = 'right'
    pwd2_span.innerHTML = '输入正确'
  }
})
// 登陆界面阻止按钮自动刷新
btn.addEventListener('click', function (e) {
  if (pwd_span.classList.contains('right') && user_span.classList.contains('right')) {
    btn.style.type = 'submit'
    console.log(user)
    // localStorage.username = user.value;
    // localStorage.passward = pwd.value;
    open('http://127.0.0.1:5501/index.html')
    console.log(user.value)
  } else {
    e.preventDefault()
    alert('用户名或密码错误！')
  }
})
// 注册界面的
btn_zhuce.addEventListener('click', function (e) {
  // e.preventDefault()
  if (pwd1_span, user1_span, pwd2_span.classList.contains('right')) {
    btn.style.type = 'submit'
  }
})

  // 注册登陆的切换
  $('.a4').on('click', function () {
    $('.login').hide();
    $('.zhuce').show();
  })
  $('.a4-1').on('click', function () {
    $('.login').show();
    $('.zhuce').hide();
  })

  // 注册功能
  $('#form-zhuce').on('submit', function (e) {
    e.preventDefault()
    var data = {
      username: $('#form-zhuce [name=user]').val(),
      password: $('#form-zhuce [name=password]').val()
    }
    $.post('http://127.0.0.1:3007/api/reguser',data, function (res) {
      if (res.status !== 0) {
        return console.log(res.message + '注册失败')
      }
      console.log('注册成功')
    })
  })


