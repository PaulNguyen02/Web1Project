function User(username, pass, ho, ten, email, products, donhang) {
	this.ho = ho || '';
	this.ten = ten || '';
	this.email = email || '';

	this.username = username;
	this.pass = pass;
	this.products = products || [];
	this.donhang = donhang || [];
}

function equalUser(u1, u2) {
	return (u1.username == u2.username && u1.pass == u2.pass);
}

function Promo(name, value) {
	this.name = name;
	this.value = value;

	this.toWeb = function () {
		if (!this.name) return "";
		var contentLabel = "";
		switch (this.name) {
			case "giamgia":
				contentLabel = `<i class="fa fa-bolt"></i> Giảm ` + this.value + `&#8363;`;
				break;

			case "tragop":
				contentLabel = `Trả góp ` + this.value + `%`;
				break;

			case "giareonline":
				contentLabel = `Giá rẻ online`;
				break;

			case "moiramat":
				contentLabel = "Mới ra mắt";
				break;
		}

		var label =
			`<label class=` + this.name + `>
			` + contentLabel + `
		</label>`;

		return label;
	}
}

function Product(masp, name, img, price, star, rateCount, promo) {
	this.masp = masp;
	this.img = img;
	this.name = name;
	this.price = price;
	this.star = star;
	this.rateCount = rateCount;
	this.promo = promo;
}

function addToWeb(p, ele, returnString) {
	// Chuyển star sang dạng tag html
	var rating = "";
	if (p.rateCount > 0) {
		for (var i = 1; i <= 5; i++) {
			if (i <= p.star) {
				rating += `<i class="fa fa-star"></i>`
			} else {
				rating += `<i class="fa fa-star-o"></i>`
			}
		}
		rating += `<span>` + p.rateCount + ` đánh giá</span>`;
	}


	var price = `<strong>` + p.price + `&#8363;</strong>`;
	if (p.promo && p.promo.name == "giareonline") {
		price = `<strong>` + p.promo.value + `&#8363;</strong>
				<span>` + p.price + `&#8363;</span>`;
	}

	var chitietSp = 'chitietsanpham.html?' + p.name.split(' ').join('-');

	var newLi =
	`<li class="sanPham">
		<a href="` + chitietSp + `">
			<img src=` + p.img + ` alt="">
			<h3>` + p.name + `</h3>
			<div class="price">
				` + price + `
			</div>
			<div class="ratingresult">
				` + rating + `
			</div>
			` + (p.promo && p.promo.toWeb()) + `
			<div class="tooltip">
				<button class="themvaogio" onclick="themVaoGioHang('`+p.masp+`', '`+p.name+`'); return false;">
					<span class="tooltiptext" style="font-size: 15px;">Thêm vào giỏ</span>
					+
				</button>
			</div>
		</a>
	</li>`;

	if(returnString) return newLi;

	var products = ele || document.getElementById('products');
	products.innerHTML += newLi;
}