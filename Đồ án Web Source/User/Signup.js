function Add()
{
    var phonenumber=document.getElementById("phonenumber").value;
    var name=document.getElementById("username").value;
    var address=document.getElementById("address").value;
    var psw=document.getElementById("password").value;
    var user={contact:phonenumber, username: name, address: address ,password: psw};
    var text = JSON.stringify(user);
    alert("Tài khoản đã lưu "+text);
}