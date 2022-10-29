//1.tab 获取所有的小li
let lis = document.querySelectorAll('.tab-row  li')
let divs = document.querySelectorAll('.proall .main')
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', function () {
        console.log(11)
        // 找到以前的active 类，移除掉
        document.querySelector('.tab-row li.active').classList.remove('active')
        // 当前的元素添加
        this.classList.add('active')
        // 2. 底部显示隐藏模块  一定要写到点击事件的里面
        document.querySelector('.proall .active').classList.remove('active')

        // div对应序号的那个加上active 
        divs[i].classList.add('active')
    })
}

// 2.echarts导入
let myChart = echarts.init(document.querySelector('.echarts-two'))
// console.log(1)
// 配置
option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
// 颜色写在这里
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    series: [
        {
            name: 'Area Mode',
            type: 'pie',
            radius: [40, 86],
            center: ['45%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 5
            },
            data: [
                { value: 30, name: 'rose 1' },
                { value: 28, name: 'rose 2' },
                { value: 26, name: 'rose 3' },
                { value: 24, name: 'rose 4' },
                { value: 22, name: 'rose 5' },
                { value: 20, name: 'rose 6' },
                { value: 18, name: 'rose 7' },
                { value: 16, name: 'rose 8' }
            ],
            // label里面修改引导线等样式
            lable: {
                // 文字
                fontsize: 10
            },
            // 引导线
            lableLine: {
                length8:1
            }
        }
    ]
};
// 追加
myChart.setOption(option);
// 当浏览器窗口缩放时 图也跟着缩放
window.addEventListener('resize', function () { 
    myChart.resize();
})

// 日历
var month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var month_name = ["January", "Febrary", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"];
var holder = document.getElementById("days");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var ctitle = document.getElementById("calendar-title");
var cyear = document.getElementById("calendar-year");
var my_date = new Date();
var my_year = my_date.getFullYear();
var my_month = my_date.getMonth();
var my_day = my_date.getDate();
//获取某年某月第一天是星期几
function dayStart(month, year) {
    var tmpDate = new Date(year, month, 1);
    return (tmpDate.getDay());
}
//计算某年是不是闰年，通过求年份除以4的余数即可
function daysMonth(month, year) {
    var tmp = year % 4;
    if (tmp == 0) {
        return (month_olympic[month]);
    } else {
        return (month_normal[month]);
    }
}
function refreshDate() {
    var str = "";
    var totalDay = daysMonth(my_month, my_year); //获取该月总天数
    var firstDay = dayStart(my_month, my_year); //获取该月第一天是星期几
    var myclass;
    for (var i = 1; i < firstDay; i++) {
        str += "<li></li>"; //为起始日之前的日期创建空白节点
    }
    for (var i = 1; i <= totalDay; i++) {
        if ((i < my_day && my_year == my_date.getFullYear() && my_month == my_date.getMonth()) || my_year < my_date.getFullYear() || (my_year == my_date.getFullYear() && my_month < my_date.getMonth())) {
            myclass = " class='lightgrey'"; //当该日期在今天之前时，以浅灰色字体显示
        } else if (i == my_day && my_year == my_date.getFullYear() && my_month == my_date.getMonth()) {
            myclass = " class='green greenbox'"; //当天日期以绿色背景突出显示
        } else {
            myclass = " class='darkgrey'"; //当该日期在今天之后时，以深灰字体显示
        }
        str += "<li" + myclass + ">" + i + "</li>"; //创建日期节点
    }
    holder.innerHTML = str; //设置日期显示
    ctitle.innerHTML = month_name[my_month]; //设置英文月份显示
    cyear.innerHTML = my_year; //设置年份显示
}
refreshDate(); //执行该函数
prev.onclick = function (e) {
    e.preventDefault();
    my_month--;
    if (my_month < 0) {
        my_year--;
        my_month = 11;
    }
    refreshDate();
}
next.onclick = function (e) {
    e.preventDefault();
    my_month++;
    if (my_month > 11) {
        my_year++;
        my_month = 0;
    }
    refreshDate();
}