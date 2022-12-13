function addproducttocart(p)
{
    localStorage.setItem("products", p);
}
function Total()
{
    var sum=0;
    for(let i=0;i<localStorage.length;i++)
    {
        var p=localStorage.getItem("products[i]");
        sum+=p.price;
    }
    return sum;
}
function Left_Menu()
{
    document.write(`
    <div class="vertical_menu">
                    <ul class="Extend_List">
                        <li class="MenuItem">
                            <a class="directory" href="#">Laptop</a>
                            <ul class="Extend_List1">
                                <li class="MenuItem1"><a href="#">Asus</a></li>
                                <li class="MenuItem1"><a href="#">Acer</a></li>
                                <li class="MenuItem1"><a href="#">Lenovo</a></li>
                                <li class="MenuItem1"><a href="#">Dell</a></li>
                                <li class="MenuItem1"><a href="#">HP</a></li>
                                <li class="MenuItem1"><a href="#">MSI</a></li>
                                <li class="MenuItem1"><a href="#">LG</a></li>
                                <li class="MenuItem1"><a href="#">Gigabyte</a></li>
                            </ul>
                        </li>
                        <li class="MenuItem">
                            <a class="directory" href="#">CPU</a>
                            <ul class="Extend_List1">
                                <li class="MenuItem1">
                                    <a class="directory2" href="#">Intel</a>
                                    <ul class="Extend_List2">
                                        <li class="MenuItem2"><a href="#">Pentium</a></li>
                                        <li class="MenuItem2"><a href="#">Core i3</a></li>
                                        <li class="MenuItem2"><a href="#">Core i5</a></li>
                                        <li class="MenuItem2"><a href="#">Core i7</a></li>
                                        <li class="MenuItem2"><a href="#">Core i9</a></li>
                                    </ul>
                                </li>
                                <li class="MenuItem1">
                                    <a class="directory2" href="#">AMD</a>
                                    <ul class="Extend_List2">
                                        <li class="MenuItem2"><a href="#">Athlon</a></li>
                                        <li class="MenuItem2"><a href="#">Ryzen 3</a></li>
                                        <li class="MenuItem2"><a href="#">Ryzen 5</a></li>
                                        <li class="MenuItem2"><a href="#">Ryzen 7</a></li>
                                        <li class="MenuItem2"><a href="#">Ryzen 9</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="MenuItem">
                            <a class="directory" href="#">RAM</a>
                            <ul class="Extend_List1">
                                <li class="MenuItem1"><a href="#">Kington</a></li>
                                <li class="MenuItem1"><a href="#">Kingmax</a></li>
                                <li class="MenuItem1"><a href="#">Gigabyte</a></li>
                                <li class="MenuItem1"><a href="#">G Skill</a></li>
                                <li class="MenuItem1"><a href="#">Corsair</a></li>
                            </ul>                       
                        </li>
                        <li class="MenuItem">
                            <a class="directory" href="#">GPU</a>
                            <ul class="Extend_List1">
                                <li class="MenuItem1"><a href="#">GYGABYTE</a></li>
                                <li class="MenuItem1"><a href="#">MSI</a></li>
                                <li class="MenuItem1"><a href="#">ASUS</a></li>
                                <li class="MenuItem1"><a href="#">SAPPHIRE</a></li>
                                <li class="MenuItem1"><a href="#">COLORFUL</a></li>
                            </ul>
                        </li>
                        <li class="MenuItem">
                            <a class="directory" href="#">Mainboard</a>
                            <ul class="Extend_List1">
                                <li class="MenuItem1"><a href="#">ASUS</a></li>
                                <li class="MenuItem1"><a href="#">ASROCK</a></li>
                                <li class="MenuItem1"><a href="#">GIGABYTE</a></li>
                                <li class="MenuItem1"><a href="#">MSI</a></li>
                                <li class="MenuItem1"><a href="#">INTEL</a></li>
                            </ul>
                        </li>
                        <li class="MenuItem">
                            <a class="directory" href="#">SSD</a>
                            <ul class="Extend_List1">
                                <li class="MenuItem1"><a href="#">LEXAR</a></li>
                                <li class="MenuItem1"><a href="#">Western Digital</a></li>
                                <li class="MenuItem1"><a href="#">Transcend</a></li>
                                <li class="MenuItem1"><a href="#">Samsung</a></li>
                                <li class="MenuItem1"><a href="#">Kingston</a></li>
                                <li class="MenuItem1"><a href="#">Kingmax</a></li>
                                <li class="MenuItem1"><a href="#">Sandisk</a></li>
                                <li class="MenuItem1"><a href="#">ADATA</a></li>
                                <li class="MenuItem1"><a href="#">COLORFUL</a></li>
                                <li class="MenuItem1"><a href="#">Intel</a></li>
                                <li class="MenuItem1"><a href="#">GIGABYTE</a></li>
                            </ul>
                        </li>
                        <li class="MenuItem">
                            <a class="directory" href="#">HDD</a>
                            <ul class="Extend_List1">
                                <li class="MenuItem1"><a href="#">TOSHIBA</a></li>
                                <li class="MenuItem1"><a href="#">Western Digital</a></li>
                                <li class="MenuItem1"><a href="#">Seagate</a></li>
                            </ul>
                        </li>
                        <li class="MenuItem">
                            <a class="directory" href="#">PSU</a>
                            <ul class="Extend_List1">
                                <li class="MenuItem1"><a href="#">COOLER MASTER</a></li>
                                <li class="MenuItem1"><a href="#">Golden Field</a></li>
                                <li class="MenuItem1"><a href="#">CORSAIR</a></li>
                                <li class="MenuItem1"><a href="#">GYGABYTE</a></li>
                                <li class="MenuItem1"><a href="#">ACBEL</a></li>
                                <li class="MenuItem1"><a href="#">ASUS</a></li>
                                <li class="MenuItem1"><a href="#">MSI</a></li>
                            </ul>
                        </li>
                        <li class="MenuItem">
                            <a class="directory" href="#">Tản nhiệt</a>
                            <ul class="Extend_List1">
                                <li class="MenuItem1"><a href="#">DEEPCOOL</a></li>
                                <li class="MenuItem1"><a href="#">XIGMATEK</a></li>
                                <li class="MenuItem1"><a href="#">ID-COOLING</a></li>
                                <li class="MenuItem1"><a href="#">Corsair</a></li>
                                <li class="MenuItem1"><a href="#">COOLER</a></li>
                                <li class="MenuItem1"><a href="#">GOLDEN</a></li>
                                <li class="MenuItem1"><a href="#">EROSI</a></li>
                            </ul>
                        </li>
                        <li class="MenuItem">
                            <a class="directory" href="#">Case</a>
                            <ul class="Extend_List1">
                                <li class="MenuItem1"><a href="#">SAMA</a></li>
                                <li class="MenuItem1"><a href="#">XIGMATEK</a></li>
                                <li class="MenuItem1"><a href="#">GOLDEN FIELD</a></li>
                                <li class="MenuItem1"><a href="#">DEEPCOOL</a></li>
                                <li class="MenuItem1"><a href="#">COOLER MASTER</a></li>
                                <li class="MenuItem1"><a href="#">AEROCOOL</a></li>
                                <li class="MenuItem1"><a href="#">ASUS</a></li>
                            </ul>
                        </li>
                        <li class="MenuItem">
                            <a class="directory" href="#">Màn hình</a>
                            <ul class="Extend_List1">
                                <li class="MenuItem1"><a href="#">ACER</a></li>
                                <li class="MenuItem1"><a href="#">ASUS</a></li>
                                <li class="MenuItem1"><a href="#">AOC</a></li>
                                <li class="MenuItem1"><a href="#">BENQ</a></li>
                                <li class="MenuItem1"><a href="#">COOLER MASTER</a></li>
                                <li class="MenuItem1"><a href="#">HP</a></li>
                                <li class="MenuItem1"><a href="#">DELL</a></li>
                                <li class="MenuItem1"><a href="#">Lenovo</a></li>
                                <li class="MenuItem1"><a href="#">LG</a></li>
                                <li class="MenuItem1"><a href="#">Samsung</a></li>
                                <li class="MenuItem1"><a href="#">ViewSonic</a></li>
                                <li class="MenuItem1"><a href="#">MSI</a></li>
                                <li class="MenuItem1"><a href="#">PHILIPS</a></li>
                            </ul>
                        </li>
                        <li class="MenuItem">
                            <a class="directory" href="#">Thiết bị ngoại vi</a>
                            <ul class="Extend_List1">
                                <li class="MenuItem1">
                                    <a class="directory2" href="#">Bàn phím</a>
                                    <ul class="Extend_List2">
                                        <li class="MenuItem2"><a href="#">Logitech</a></li>
                                        <li class="MenuItem2"><a href="#">Mitsumi</a></li>
                                        <li class="MenuItem2"><a href="#">Genius</a></li>
                                        <li class="MenuItem2"><a href="#">Rapoo</a></li>
                                        <li class="MenuItem2"><a href="#">Microsoft</a></li>
                                    </ul>
                                </li>
                                <li class="MenuItem1">
                                    <a class="directory2" href="#">Chuột</a>
                                    <ul class="Extend_List2">
                                        <li class="MenuItem2"><a href="#">Asus</a></li>
                                        <li class="MenuItem2"><a href="#">Logitech</a></li>
                                        <li class="MenuItem2"><a href="#">Corsair</a></li>
                                        <li class="MenuItem2"><a href="#">Razer</a></li>
                                        <li class="MenuItem2"><a href="#">Microsoft</a></li>
                                        <li class="MenuItem2"><a href="#">Steelseries</a></li>
                                        <li class="MenuItem2"><a href="#">Akko</a></li>
                                    </ul>
                                </li>                           
                            </ul>
                        </li>
                        <li class="MenuItem">
                            <a class="directory" href="#">Thiết bị âm thanh</a>
                            <ul class="Extend_List1">
                                <li class="MenuItem1">
                                    <a class="directory2" href="#">Loa</a>
                                    <ul class="Extend_List2">
                                        <li class="MenuItem2"><a href="#">Bose</a></li>
                                        <li class="MenuItem2"><a href="#">Harman</a></li>
                                        <li class="MenuItem2"><a href="#">JBL</a></li>
                                        <li class="MenuItem2"><a href="#">Logitech</a></li>
                                        <li class="MenuItem2"><a href="#">Microlab</a></li>
                                        <li class="MenuItem2"><a href="#">SoundMAX</a></li>
                                    </ul>
                                </li>
                                <li class="MenuItem1">
                                    <a class="directory2" href="#">Earphone</a>
                                    <ul class="Extend_List2">
                                        <li class="MenuItem2"><a href="#">Audio-technica</a></li>
                                        <li class="MenuItem2"><a href="#">Sony</a></li>
                                        <li class="MenuItem2"><a href="#">JBL</a></li>
                                        <li class="MenuItem2"><a href="#">Sudio</a></li>
                                    </ul>
                                </li>
                                <li class="MenuItem1">
                                    <a class="directory2" href="#">Headphone</a>
                                    <ul class="Extend_List2">
                                        <li class="MenuItem2"><a href="#">Audio-technica</a></li>
                                        <li class="MenuItem2"><a href="#">Sony</a></li>
                                        <li class="MenuItem2"><a href="#">JBL</a></li>
                                        <li class="MenuItem2"><a href="#">HyperX</a></li>
                                        <li class="MenuItem2"><a href="#">Razer</a></li>
                                        <li class="MenuItem2"><a href="#">Corsair</a></li>
                                        <li class="MenuItem2"><a href="#">Cooler</a></li>
                                    </ul>
                                </li>                      
                            </ul>
                        </li>
                    </ul>
                </div>
    `);
}
function renderproduct(arr) {    //Load sản phẩm
    for (let i = 0; i < arr.length/3; i++) {
        var p = arr[i];    
        document.write(`
            			<div class="items">
                            <a href="#">
                                <div class="wrapper-item">
                                    <div class="container-item">
                                        <div class="div-img-product">
                                            <img class="img-product" src="${p.Image}">
                                        </div>
                                        <div class="content-product">
                                            <div class="textbox-product">
                                            <div class="name-product">${p.MASP}</div>
                                                <div class="name-product">${p.Name}</div>
                                            </div>
                                            <div></div>
                                            <button class="add-to-cart" style="background-color: var(--backcolor1);" onclick="addproducttocart(${p.MASP})">
                                                Mua ngay
                                            </button>
                                            <div class="price">
                                                <span>${p.price}</span>
                                                <i class="fa-sharp fa-solid fa-dong-sign"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        `);
    }
}
