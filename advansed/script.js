// sum of a+b+c+d

var a = 7;

var b = 14;

var c = "21";

c = Number(c);
console.log(typeof(c));

var d = '36';
d = Number(d);

var e = 42;

var sum = (a + b + c + d + e);
console.log(sum);

// multiplication
var f = '1';
f = Number(f);

var g = 15;

var h = 8;

var i = "1";
i = Number(i);

var product = (f * g * i * h);
console.log(product);

//division

var division = (sum / product);
console.log(division);

var multiDarray = [

    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6, 17],
    [3, 5, 26, 3]
];


console.log(multiDarray[1][1], multiDarray[4][2], multiDarray[5][3], multiDarray[2][3], multiDarray[2][1]);