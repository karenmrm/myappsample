console.log('Hello Km');
const addition = new Function("a", "b", "return a+b");
addition(1, 1);
console.log('addition result is '+addition(2,3));