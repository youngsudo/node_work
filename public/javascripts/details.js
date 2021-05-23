$(document).ready(function () {
    //  $('#body')[0].children[6].children[0].children[1].type = 'password'
    var inp_number = $('#body')[0].children[1].children[0].children[1];
    var inp_name = $('#body')[0].children[2].children[0].children[1];
    var inp_sex = $('#body')[0].children[3].children[0].children[1];
    var inp_age = $('#body')[0].children[4].children[0].children[1];
    var inp_user = $('#body')[0].children[5].children[0].children[1];
    var inp_password = $('#body')[0].children[6].children[0].children[1];
    var inp_phonenumber = $('#body')[0].children[7].children[0].children[1];
    var inp_identity = $('#body')[0].children[8].children[0].children[1];
    var inp_createTime = $('#body')[0].children[9].children[0].children[1];

    //number
    inp_number.onblur = function () {
        console.log($(this).val());
        var number = $(this).val();
        if (number == '' || number == undefined || number == null) {
            alert('请填写编号');
        } else if (number.indexOf(" ") >= 0) {
            alert("编号中不能有空格！！！");
            $(this).val('');
        } else if (number.length > 8 || number.length < 3) {
            alert("编号要在3到8位之间,当前有" + number.length + "位");
        } else {
           
        }
    }
    //name
    inp_name.onblur = function () {
        var name = $(this).val(); 
        if (name == '' || name == undefined || name == null) {
            alert('请填写名字');
        } else if (name.indexOf(" ") >= 0) {
            alert("名字中不能有空格！！！");
            $(this).val('');
        } else if (name.length > 8 || name.length < 1) {
            alert("名字要在1到8位之间,当前有" + name.length + "位");
        } else {
          
        }
    }
    //sex
    inp_sex.onblur = function () {
        var sex = $(this).val();
        if (sex == '' || sex == undefined || sex == null) {
            alert('请填写性别');
        } else if (sex != "男" && sex != "女") {
            alert("除了男或女，你想自己是哪种！！！");
            $(this).val('');
        } else {
        
        }
    }
     //age
     inp_age.onblur = function () {
        var age = $(this).val();
        if (age == '' || age == undefined || age == null) {
            alert('请填写编号');
        } else if (age <0 || age >200) {
            alert("最多给你活到200岁");
            $(this).val('');
        } else {
          
        }
    }
     //phonenumber
     inp_phonenumber.onblur = function () {
        var phonenumber = $(this).val();
        if (phonenumber == '' || phonenumber == undefined || phonenumber == null) {
            alert('请填写电话号码');
        } else if (phonenumber.length<3 ||phonenumber.length >11) {
            alert("电话号码只能在3-11位之间");
            $(this).val('');
        } else {
       
        }
    }
     //identity
     inp_identity.onblur = function () {
        var sex = $(this).val();
        if (sex == '' || sex == undefined || sex == null) {
            alert('请填写性别');
        } else if (sex != "学生" && sex != "老师" && sex !="管理员") {
            alert("只能是学生,老师或管理员！！！");
            $(this).val('学生');
        } else {
           
        }
    }

    //password
    $('#password')[0].type = 'password';
    $('#see_button').click(function(){
       if( $('#password')[0].type == 'password'){
        $('#password')[0].type = 'text';
       }else{
        $('#password')[0].type = 'password';
       }
    })

    //
    $('#but_return').click(function(){
        window.history.back();
    })
});
