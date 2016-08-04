// Task 1
function(a, b) { return a + "" + b; }
function conc(a, b) { return a + "" + b; }
// Task 2
var conc = function(a, b) {
return a === b ? 1 : -1;
}
//Task 3
<button id="task3" onclick="(function() {console.log('Message');
})()">Click</button>

//Task 4
let f = function fibo(n) {
  return n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
};
console.log(f(5));

//Task 5
let v = (function conc(a,b)){
return "" + a + b;
}
console.log(v(2, 4));
