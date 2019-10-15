declare var $;
var array1To10: number[] = [];

for (var i = 1; i < 11; i ++) {
	array1To10.push(i);
}

console.log(array1To10);

var nested1To10: number[] = [];

for (let value of array1To10) {
	for (let j = 1; j < 11; j += 1) {
		let result = j*value;
		nested1To10.push(`${j}*${value} = ${j*value}<br>`);
	}
}

$("#result").append(nested1To10);