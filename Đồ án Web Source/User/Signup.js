function Customer(username, phonenumber, name, address, password, repassword)
{
    this.username=username;
    this.phonenumber=phonenumber;
    this.name=name;
    this.address=address;
    this.password=password;
    this.repassword=repassword;
}
function Check(password, repassword)
{
    if(password.localeCompare(repassword)==0)
        return true;
    else
        return false;
}
function Info()
{
    var username=document.getElementById('username').value;
    var  phonenumber=document.getElementById('phonenumber').value;
    var name=document.getElementById('name').value;
    var address=document.getElementById('address').value;
    var password=document.getElementById('password').value;
    var repassword=document.getElementById('repassword').value;
    if(Check(password, repassword)==true && document.getElementById('checkbox').checked==true)
    {
        var customer= new Customer(username, phonenumber, name, address, password, repassword);
        alert(customer.username+" "+customer.name+" "+customer.phonenumber+" "+customer.address+" "+customer.password);
    }  
    else
    {
        alert("Đăng kí lỗi");
    }
}

