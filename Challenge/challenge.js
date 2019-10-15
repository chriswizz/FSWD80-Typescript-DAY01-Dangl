function MenuConstructor(name, soup, mainMeal, dessert, price, img) {
    this.name = name;
    this.soup = soup;
    this.mainMeal = mainMeal;
    this.dessert = dessert;
    this.price = price;
    this.img = img;
}
;
var menu1 = new MenuConstructor("Menu 1", "Soup 1", "Main Meal 1", "Dessert 1", 15, "menu1.jpg");
var menu2 = new MenuConstructor("Menu 2", "soup 2", "Main Meal 2", "Dessert 2", 12, "menu2.jpg");
var menu3 = new MenuConstructor("Menu 3", "soup 3", "Main Meal 3", "Dessert 3", 9, "menu3.jpg");
var menu4 = new MenuConstructor("Menu 4", "soup 4", "Main Meal 4", "Dessert 4", 5, "menu4.jpg");
// const soup1 = menu1.soup;
var name1 = menu1.name, soup1 = menu1.soup, mainMeal1 = menu1.mainMeal, dessert1 = menu1.dessert, price1 = menu1.price, img1 = menu1.img;
var name2 = menu2.name, soup2 = menu2.soup, mainMeal2 = menu2.mainMeal, dessert2 = menu2.dessert, price2 = menu2.price, img2 = menu2.img;
var name3 = menu3.name, soup3 = menu3.soup, mainMeal3 = menu3.mainMeal, dessert3 = menu3.dessert, price3 = menu3.price, img3 = menu3.img;
var name4 = menu4.name, soup4 = menu4.soup, mainMeal4 = menu4.mainMeal, dessert4 = menu4.dessert, price4 = menu4.price, img4 = menu4.img;
var menues = [menu1, menu2, menu3, menu4];
for (var _i = 0, menues_1 = menues; _i < menues_1.length; _i++) {
    var value = menues_1[_i];
    $(".mainRow").append("\n\n\t\t<div class=\"col-6 card\" style=\"width: 18rem;\">\n\t\t  <div class=\"img-container embed-responsive embed-responsive-16by9\">\n\t\t  \t<img src=\"" + value.img + "\" class=\"card-img-top embed-responsive-item\" alt=\"...\">\n\t\t  </div>\n\t\t  <div class=\"card-body\">\n\t\t    <h5 class=\"card-title\">" + value.name + "</h5>\n\t\t    <p class=\"card-text font-weight-bold\">\u20AC " + value.price + ".00</p>\n\t\t  </div>\n\t\t  <ul class=\"list-group list-group-flush\">\n\t\t    <li class=\"list-group-item\">" + value.soup + "</li>\n\t\t    <li class=\"list-group-item\">" + value.mainMeal + "</li>\n\t\t    <li class=\"list-group-item\">" + value.dessert + "</li>\n\t\t  </ul>\n\t\t  <div class=\"d-flex justify-content-between align-items-center card-body\">\n\t\t    <button type=\"button\" class=\"btn btn-click btn-primary\">Like</button>\n\t\t    <div type=\"number\" class=\"output font-weight-bold\">0</div>\n\t\t    <div>\n\t\t\t    <span class=\"fa fa-star checked\"></span>\n\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t</div>\n\t\t    <a href=\"#\" class=\"card-link\">Another link</a>\n\t\t  </div>\n\t\t</div>\n\n\t\t");
}
$(document).ready(function () {
    var btns = document.getElementsByClassName("btn-click");
    var outputs = document.getElementsByClassName("output");
    function printValue(i) {
        var output = $(outputs[i]).text();
        $(outputs[i]).text(parseInt(output) + 1);
    }
    var _loop_1 = function (i) {
        $(btns[i]).on("click", function () {
            printValue(i);
        });
    };
    for (var i = 0; i < btns.length; i++) {
        _loop_1(i);
    }
});
