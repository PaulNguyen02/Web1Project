function Add()
{
    var name=document.getElementById("user").value;
    var psw=document.getElementById("password").value;
    var user={username: name, password: psw};
    var text = JSON.stringify(user);
    alert("Tài khoản đã lưu "+text);
}