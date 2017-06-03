/// call apply caller caller bind

// call(thisObj, arg1,arg2, ... argN) 方法
function Obj(){
    this.value = "对象！";
}

var value = "global 变量";

function Fun1() {
    alert(this.value);
}

//window.Fun1(); //global 变量
//Fun1.call(window); //global 变量
Fun1.call(document.getElementById('myText')); //input text
Fun1.call(new Obj()); //对象！

var first = {
    num: 42
};

var second = {
    num: 24
};

function multiply(mult) {
    return this.num * mult;
}

multiply.call(first, 5); // returns 42 * 5
multiply.call(second, 5); // returns 24 * 5

// apply(this, [arg1, arg2,..,argN])方法

var func = new function() {
    this.a = "func";
}

var myfunc = function(x, y) {
    var a = "myfunc";
    alert(this.a);
    alert(x + y);
}

myfunc.call(func, "var", "fun"); // "func" "var fun"

myfunc.apply(func, ["var", "fun"]); // "func" "var fun"
//caller 属性: 返回一个对函数的引用，即调用了当前函数的函数体。
//functionName.caller ：functionName 对象是所执行函数的名称。
//对 于函数来说，caller 属性只有在函数执行时才有定义。 如果函数是由 JScript 程序的顶层调用的，那么 caller 包含的就是 null 。如果在字符串上下文中使用 caller 属性，那么结果和 functionName.toString 一样，也就是说，显示的是函数的反编译文本。

function CallLevel(){
    if (CallLevel.caller == null) {
        alert("CallLevel was called from the top level.");
    } else {
        alert("CallLevel was called by another function:\n" + CallLevel.caller);
    }
}

function funCaller(){
    CallLevel();
}

CallLevel();
funCaller()

//arguments.callee属性: 返回正被执行的 Function 对象，也就是所指定的 Function 对象的正文。
//[function.]arguments.callee：可选项 function 参数是当前正在执行的 Function 对象的名称。
//callee 属性的初始值就是正被执行的 Function 对象。
//callee 属性是 arguments 对象的一个成员，它表示对函数对象本身的引用，这有利于匿 函数的递归或者保证函数的封装性，例如下边示例的递归计算1到n的自然数之和。而该属性仅当相关函数正在执行时才可用。还有需要注意的是callee拥有length属性，这个属性有时用于验证还是比较好的。arguments.length 是实参长度，arguments.callee.length 是形参长度，由此可以判断调用时形参长度是否和实参长度一致。
// callee可以打印其本身
function calleeDemo() {
    alert(arguments.callee);
}

// 用于验证参数
function calleeLengthDemo(arg1, arg2) {
    if (arguments.length == arguments.callee.length) {
        window.alert("验证形参和实参长度正确！");
        return;
    } else {
        alert("实参长度：" + arguments.length);
        alert("形参长度： " + arguments.callee.length);
    }
}

//递归计算
var sum = function(n){
    if (n <= 0) {
        return 1;
    } else {
        return n + arguments.callee(n - 1);
    }
}
///bind
var first_object = {
    num: 42
};

var second_object = {
    num: 24
};

function multiply(mult) {
    return this.num * mult;
}

Function.prototype.bind = function(obj) {
    var method = this,
    temp = function() {
        return method.apply(obj, arguments);
    };

    return temp;
}

var first_multiply = multiply.bind(first_object);
first_multiply(5); // returns 42 * 5

var second_multiply = multiply.bind(second_object);
second_multiply(5); // returns 24 * 5


//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//caller 与 callee 区别的一些举例：
function a() {
    b();
}

function b() {
    alert(b === arguments.callee)
    alert(b.caller === a)
    alert(arguments.callee.caller === a)
}
a();

//———-
function calleeTest() {
    arguments.callee.say("Mr.CT", "您好！"); // 获取当前函数句柄
}

calleeTest.say = function(userName, value) {
    alert(userName + "说:" + value);
};

function callerTest() {
    (function() {
        arguments.callee.caller.goodbye("Mr.CT", "Canca Torvals"); // 获取调用当前函数的函数
    })();
}

callerTest.goodbye = function(userName, userName2) {
    alert(userName + " 向 " + userName2 + " 说再见.");
};

calleeTest();
callerTest();
 

