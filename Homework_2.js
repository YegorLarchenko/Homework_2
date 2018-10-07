// №1

var x1 = prompt ("x1",""); 
var y1 = prompt ("y1","");  
var x2 = prompt ("x2","");  
var y2 = prompt ("y2",""); 
var distance = function (x1, y1, x2, y2) {
 return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}
alert(distance(x1, y1, x2, y2));

// №2
var sum = 0;

for( var i = 1; i <= 10; i++) {
    sum = sum + +prompt ("vvedite", "")
}
alert (sum);

// №3
var n = +(prompt("vvedite n",""));

for(var i = 1; i <= n; i++) {
    for(var j = 1; j < i + 1; j++) {
        console.log(j);
    }
}

// // №4
var n = +(prompt("enter number of cards","")),
truesum = 0,
badsum = 0;

for (var i = 1; i <= n; i++) {
    truesum += i;
}
for (var j = 1; j <= n -1; j++) {
    badsum += +prompt("enter number of chosen","");
    alert(truesum - badsum);
}

