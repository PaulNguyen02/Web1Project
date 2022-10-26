function Customer(username, password)
{
    this.username=username;
    this.password=password;
}
function Info()
{
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var customer= new Customer(username,password);
    alert(customer.username+" "+customer.password);
}
