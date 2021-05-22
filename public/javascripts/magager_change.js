var table = document.getElementsByClassName('showData')[0];
var rows = table.rows;//获取所有行
// console.log("lenth", rows.length)

var c_value;
var c_user;
var c_index;
for (var i = 0; i < rows.length; i++) {
    var row = rows[i];//获取每一行
    var list = row.cells; //获取每一列
    for (var j = 0; j < list.length - 1; j++) {  //除去删除按钮
        // var td = list[j].innerHTML;//获取具体单元格    string
        // console.log(td)
        var td_input = list[j].children[0]
        td_input.onchange = function () {
            // console.log(this)             //选中的input
            // console.log(this.value)                //改变后的值
            // console.log(this.parentNode.parentNode)    //改变input所在的tr
            // console.log(this.parentNode.parentNode.children[5].children[0].attributes[1].value)   //改变input所在的tr 的user

            var a = this;
            var b = this.parentNode.parentNode.children;
            function _index() {
                for (var k = 0; k < list.length - 1; k++) {
                    if (a == b[k].children[0]) {
                        return k;
                    }
                }
            }
            c_index = _index();
            if (c_index == 0) {
                c_index = 'id';
            } else if (c_index == 1) {
                c_index = 'number';
            } else if (c_index == 2) {
                c_index = 'name';
            } else if (c_index == 3) {
                c_index = 'sex';
            } else if (c_index == 4) {
                c_index = 'age';
            } else if (c_index == 5) {
                c_index = 'user';
            } else if (c_index == 6) {
                c_index = 'password';
            } else if (c_index == 7) {
                c_index = 'phonenumber';
            } else if (c_index == 8) {
                c_index = 'identity';
            } else if (c_index == 9) {
                c_index = 'islogout';
            } else if (c_index == 10) {
                c_index = 'create_time';
            } else {
                c_index = 'logout_time';
            }
            c_value = this.value;
            c_user = this.parentNode.parentNode.children[5].children[0].attributes[1].value
            // console.log(c_value);
            // console.log(c_index)
            // console.log(c_user);

            ajax({
                url: "http://localhost:3000/magager/change",
                type: 'post',
                data: {
                    value: c_value,
                    index: c_index,
                    user: c_user
                },
                dataType: 'json',
                timeout: 10000,
                contentType: "application/json",
                success: function (data) {
                    if (data != 'success') {
                        alert(data);
                    }
                    window.location.href = '/magager/';
                },
                //异常处理
                error: function (e) {
                    console.log(e);
                }
            })
        }
    }
}









//ajax原身js代码
function ajax(options) {
    options = options || {};  //调用函数时如果options没有指定，就给它赋值{},一个空的Object
    options.type = (options.type || "GET").toUpperCase();/// 请求格式GET、POST，默认为GET
    options.dataType = options.dataType || "json";    //响应数据格式，默认json

    var params = formatParams(options.data);//options.data请求的数据

    var xhr;

    //考虑兼容性
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveObject) {//兼容IE6以下版本
        xhr = new ActiveXobject('Microsoft.XMLHTTP');
    }

    //启动并发送一个请求
    if (options.type == "GET") {
        xhr.open("GET", options.url + "?" + params, true);
        xhr.send(null);
    } else if (options.type == "POST") {
        xhr.open("post", options.url, true);

        //设置表单提交时的内容类型
        //Content-type数据请求的格式
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }

    //    设置有效时间
    setTimeout(function () {
        if (xhr.readySate != 4) {
            xhr.abort();
        }
    }, options.timeout)

    //    接收
    //     options.success成功之后的回调函数  options.error失败后的回调函数
    //xhr.responseText,xhr.responseXML  获得字符串形式的响应数据或者XML形式的响应数据
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300 || status == 304) {
                options.success && options.success(xhr.responseText, xhr.responseXML);
            } else {
                options.error && options.error(status);
            }
        }
    }
}

//格式化请求参数
function formatParams(data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    }
    arr.push(("v=" + Math.random()).replace(".", ""));
    return arr.join("&");

}