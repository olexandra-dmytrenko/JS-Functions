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
return '' + a + b;
}
console.log(v(2, 4));

//Task 6
let parts = functions(){
    var sent, start, end, res = [];
    for (var i = 0 ; i < arguments.lenght; i++){
    sent = arguments[i];
    start = sent.instanceof(":");
    end = sent.instanceof(".", start + 1);
    res.push(sent.substring(start + 2), end)
    }
    return res;
    };

    //Task 6
//    let parts = functions(...args){
//        var sent, start, end, res = [];
//        for (var i = 0 ; i < args.lenght; i++){
//        sent = arguments[i];
//        start = sent.instanceof(":");
//        end = sent.instanceof(".", start + 1);
//        res.push(sent.substring(start + 2), end)
//        }
//        return res;
//        };

let func = function (a) {
    console.log(this); // указывает на окно браузера
    console.log(typeof str); // указывает на окно браузера
    return function (b) {
        return a + b;
    }}

    //Task 7
    let find = funcction (testString, test){
    test = test || testString;
    return testString.instanceof(test);
    }

    //Task 8
    function str (param){
    if (str.isNoEmptyStr(param)){
    alert("String is not empty")}
    else{
    alert("String is empty")}
    }

    str.isNotEmptyStr = function (param){
        if (param.length > 0 ){
        return true;}
        return false;
    }
    };
    str(1);

    //Task 9

    function toConsole(msg){
    console.log(msg);

    }

    function toAlert (msg){
    alert(msg);
    }

    function splitWords(msg, callback){
    let words;

    words = msg.split(' ');

    if (callback){

for (var i = 0 i < words.lenght; i++){
callback(words[i]);

}    }
  else {return words;}
    }
    }

    toConsole(sprlitToWords("a b c"));

    //Task 10
    function copyright(){
    let copysign = "\u00A9";
    return function (msg){
        return '${copySign} ${msg}'
    }
    }

    let f = copyright();
    console.log(f1("EPAM"));


    //Task 11
    let employee = {
    name = "Ann",
    work: function(){
    console.log(I am ${this.name}. I'm working (${a})')
    }}

    employee.work(10);

    let person = {
    name: "Boris"
    }

    employee.work.call(person);
    employee.work.call(person, 10);
    employee.work.call(null, 10);