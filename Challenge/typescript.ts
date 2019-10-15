// 1st solution

var result = 'x ';
for (var i = 0; i < 11; i++) {

    for (var j = 0; j < 11; j++) {

        if(i == 0 && j > 0){
          result += '[' + j + ']';
        } 
        else if(j == 0 && i>0){
          result += '[' + i + '] ';
        } 
        else if(i>0 && j>0){
        result += (i*j) + ' ';
        }
    }
    result += '\n'
}

console.log(result);

//2nd, from Serri


var array :number[] =[1,2,3,4,5,6,7,8,9,10];

//with IN you call the index of the array, with of call the Value of the array

for(let i of array){
    for(let j of array){
        document.getElementById('result').innerHTML += `${i} x ${j} = ${i*j}<br>`; 
    }


}

//3rd Chris

var array1To10: number[] = [];

for (var i = 1; i < 11; i ++) {
array1To10.push(i);
}

console.log(array1To10);

var nested1To10: number[] = [];

for (var value of array1To10) {
for (var j = 1; j < 11; j += 1) {
nested1To10.push(j + " * " + value + " = " + value * j);
}
}

console.table(nested1To10);