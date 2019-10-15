var array1To10 = [];
for (var i = 1; i < 11; i++) {
    array1To10.push(i);
}
console.log(array1To10);
var nested1To10 = [];
for (var _i = 0, array1To10_1 = array1To10; _i < array1To10_1.length; _i++) {
    var value = array1To10_1[_i];
    for (var j = 1; j < 11; j += 1) {
        var result = j * value;
        nested1To10.push(j + "*" + value + " = " + j * value + "<br>");
    }
}
$("#result").append(nested1To10);
