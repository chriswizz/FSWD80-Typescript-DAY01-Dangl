declare var $;
function MenuConstructor(name: string, soup: string, mainMeal: string, dessert: string, price: number, img: string) {

	this.name = name;
	this.soup = soup;
	this.mainMeal = mainMeal;
	this.dessert = dessert;
	this.price = price;
	this.img = img;
};

var menu1 = new MenuConstructor("Menu 1", "Soup 1", "Main Meal 1", "Dessert 1", 15, "menu1.jpg");
var menu2 = new MenuConstructor("Menu 2", "soup 2", "Main Meal 2", "Dessert 2", 12, "menu2.jpg");
var menu3 = new MenuConstructor("Menu 3", "soup 3", "Main Meal 3", "Dessert 3", 9, "menu3.jpg");
var menu4 = new MenuConstructor("Menu 4", "soup 4", "Main Meal 4", "Dessert 4", 5, "menu4.jpg");

// const soup1 = menu1.soup;
const {name: name1, soup: soup1, mainMeal: mainMeal1, dessert: dessert1, price: price1, img: img1} = menu1;
const {name: name2, soup: soup2, mainMeal: mainMeal2, dessert: dessert2, price: price2, img: img2} = menu2;
const {name: name3, soup: soup3, mainMeal: mainMeal3, dessert: dessert3, price: price3, img: img3} = menu3;
const {name: name4, soup: soup4, mainMeal: mainMeal4, dessert: dessert4, price: price4, img: img4} = menu4;

var menues = [menu1, menu2, menu3, menu4];

for (let value of menues) {
	$(".mainRow").append(`

		<div class="col-6 card" style="width: 18rem;">
		  <div class="img-container embed-responsive embed-responsive-16by9">
		  	<img src="${value.img}" class="card-img-top embed-responsive-item" alt="...">
		  </div>
		  <div class="card-body">
		    <h5 class="card-title">${value.name}</h5>
		    <p class="card-text font-weight-bold">€ ${value.price}.00</p>
		  </div>
		  <ul class="list-group list-group-flush">
		    <li class="list-group-item">${value.soup}</li>
		    <li class="list-group-item">${value.mainMeal}</li>
		    <li class="list-group-item">${value.dessert}</li>
		  </ul>
		  <div class="d-flex justify-content-between align-items-center card-body">
		    <button type="button" class="btn btn-click btn-primary">Like</button>
		    <div type="number" class="output font-weight-bold">0</div>
		    <div>
			    <span class="fa fa-star checked"></span>
				<span class="fa fa-star checked"></span>
				<span class="fa fa-star checked"></span>
				<span class="fa fa-star"></span>
				<span class="fa fa-star"></span>
			</div>
		    <a href="#" class="card-link">Another link</a>
		  </div>
		</div>

		`);
}

$(document).ready(function() {

	var btns = document.getElementsByClassName("btn-click");
	var outputs = document.getElementsByClassName("output");

	function printValue(i) {
		let output = $(outputs[i]).text()
		$(outputs[i]).text(parseInt(output) + 1);
	}

	for (let i = 0; i < btns.length; i++) {
		$(btns[i]).on("click", () => {
			printValue(i);
		});
	}
});


