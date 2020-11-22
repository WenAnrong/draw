/*
这里是名单页面的js代码
请在data数组内写入名字
*/

var data = [];

window.onload = function() {
  shuffle(data);
  setName();
}

function setName() {
  var html = '';
  for (var i = 0; i < data.length; i += 5) {
    if (i % 2 == 0) {
      html += '<tr class="pure-table-odd">';
    } else {
      html += '<tr>';
    }
    if((data.length - i) > 4){
      html += '<td>' + data[i] + '</td><td>' + data[i + 1] + '</td><td>' + data[i + 2] + '</td><td>' + data[i + 3] + '</td><td>' + data[i + 4] + '</td>';
    }else{
      var demo = i;
      for(var x=0;x<(data.length - demo);x++){
        html += '<td>' + data[i] + '</td>';
        i++;
      }
    }
    html += '</tr>';
    var body = document.querySelector('#body');
    body.innerHTML = html;
  }
}

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

//返回上一级按钮配置
function back(){
  window.location.href = 'index.html';
}