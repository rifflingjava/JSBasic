/**
 * http://usejsdoc.org/
 */
var color = 'blue';
 
function changeColor() {
    var anotherColor = 'red';
 
    function swapColors() {
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
    }
 
    swapColors();
}
 
changeColor();
	console.log(color); //red
///////// Return as function
function f1(){
    var n=999;
    function f2(user){
    	//arguments:  { '0': 'test1', '1': 'test2' }
    	console.warn(arguments);
    	console.info(user+":"+n);
    }
    return f2;
}
var result=f1();
result("test1", "test2"); // 999	
setTimeout(result("xxx1"), 100000);
