function Signinform()
{
    document.write(`
    <div class="signin">
        <div class="wrap-image">    
            <div class="bar">                       
                <div class="closesgnform">
                    <button class="closesgnformbtn" onclick="CloseSignin()">X</button>
                </div>
            </div>                 
            <div class="signin-form">
                
                <div class="title-form">
                    <h3>Đăng nhập</h3>
                </div>
                <div class="content">
                    <form>
                        <div class="signinusername">
                            <h3>Tên đăng nhập</h3>
                            <input class="signintextfield" type="text" placeholder="Username">
                        </div>
                        <div class="signinpsswd">
                            <h3>Mật khẩu</h3>
                            <input class="signinpasswdchar" type="password">
                        </div>
                        <div class="signinbtn">
                            <button class="loginbtn">Đăng nhập</button>
                        </div>
                        <div class="signup-part">
                            <h4>Bạn chưa có tài khoản ? Hãy đăng ký <h4>
                            <div class="signupbtn"><a onclick="ShowSignup()">Đăng ký<a/></div>
                        </div>
                    </form>               
                </div>          
            </div>
        </div>
    </div>`);
}
function Signupform()
{
    document.write(`
    <div class="signup">
        <div class="wrap-image">    
            <div class="bar">                       
                <div class="closesgpform">
                    <button class="closesgpformbtn" onclick="CloseSignup()">X</button>
                </div>
            </div>                 
            <div class="signup-form">               
                <div class="Title-form">
                    <h3>Đăng ký</h3>
                </div>
                <div class="content">
                    <form>
                        <div class="fullname">
                            <h3>Họ và tên</h3>
                            <input class="signuptextfield" type="text" placeholder="Nguyễn Văn A">
                        </div>
                        <div class="address">
                            <h3>Địa chỉ</h3>
                            <input class="signuptextfield" type="text" placeholder="12/3">
                        </div>
                        <div class="phonenumber">
                            <h3>Số điện thoại</h3>
                            <input class="signuptextfield" type="text" placeholder="09xxxxxxxx">
                        </div>
                        <div class="signupusername">
                            <h3>Tên đăng nhập</h3>
                            <input class="signuptextfield" type="text" placeholder="Username">
                        </div>
                        <div class="signuppsswd">
                            <h3>Mật khẩu</h3>
                            <input class="signuppasswdchar" type="password">
                        </div>
                        <div>
                            <button class="signupbutton">Đăng ký</button>
                        </div>                    
                    </form>               
                </div>          
            </div>
        </div>
    </div>` );
}
function ShowSignin()
{
    targList = document.getElementsByClassName("signin");
    if (targList) {
        for (var x = 0; x < targList.length; x++) {
            targList[x].style.visibility = "visible";
        }
    }
}
function ShowSignup()
{
    CloseSignin();
    targList = document.getElementsByClassName("signup");
    if (targList) {
        for (var x = 0; x < targList.length; x++) {
            targList[x].style.visibility = "visible";
        }
    }
}
function CloseSignin()
{
    targList = document.getElementsByClassName("signin");
    if (targList) {
        for (var x = 0; x < targList.length; x++) {
            targList[x].style.visibility = "hidden";
        }
    }
}
function CloseSignup()
{
    targList = document.getElementsByClassName("signup");
    if (targList) {
        for (var x = 0; x < targList.length; x++) {
            targList[x].style.visibility = "hidden";
        }
    }
}