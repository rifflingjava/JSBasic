var a = 20;
	console.log(a + 100);  // 使用内存

var s1 = 'abc';
var s2 = "abc";

var b1 = true;
var o1 = { m: 20 }
	console.log(o1.m);

var o2 =  { m1: 10, m2: 20 }
	console.log(o2.m1);

Array.prototype.ABC1=function(){
	console.log("Calling ABC1()");
}

Array.ABC2=function(){
	console.log("Calling ABC2(): "+arguments.callee);
}

var array1 = ["a1","a2"];

array1.ABC1();
Array.ABC2();
	
for(i in array1){
}

	