/*
这是主页面的js代码
请在arr数组内写入名字
*/

var arr = [];
var swap = arr.slice();
var manSum = arr.length;
var reduce = 0;

//打乱数组
function shuffle(name) {
  var length = name.length,
    index, temp;
  for (var point = length - 1; point >= 0; point--) {
    index = Math.floor(Math.random() * point);
    temp = name[index];
    name[index] = name[point];
    name[point] = temp;
  }
  return name;
}

//进入时加载
window.onload = function() {
  shuffle(arr);
  document.querySelector('#sum').innerHTML = ' ' + arr.length + ' ';
  document.querySelector('#reduce').innerHTML = reduce;
  document.querySelector('#surplus').innerHTML = arr.length;
}

//重新抽取按钮配置
function reboot() {
  var snum = parseInt(Math.random() * manSum);
  var luck = arr[snum];
  document.querySelector('#showName').innerHTML = luck;

  //将抽取到的人移除
  arr.splice(snum, 1);
  reduce++;
  if (manSum <= 1) {
    arr = swap.slice();
    reduce = 0;
    manSum = arr.length;
    shuffle(arr);
  } else {
    manSum--;
  }

  document.querySelector('#showName').style.fontSize = '60px';
  document.querySelector('#surplus').innerHTML = ' ' + manSum + ' ';
  document.querySelector('#reduce').innerHTML = ' ' + reduce + ' ';
  shuffle(arr);

  //动画展示
  document.querySelector('#showName').style.animationName = 'first';
  setTimeout(function() {
    document.querySelector('#showName').style.animationName = 'end';
  }, 1200);
}

//名单按钮配置
function page() {
  window.location.href = 'page.html';
}

//关于按钮配置
function about(){
  alert(`
  这是一个网页端的抽签程序
  网页作者：WenAnrong
  送给全体同学!
  `);
}