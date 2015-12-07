function Stack(){
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}

function push(element){
	this.dataStore[this.top++] = element;
}

function peek(){	//返回栈顶元素
	return this.dataStore[this.top - 1];
}

function pop(){
	return this.dataStore[--this.top];
}

function clear(){
	this.top = 0;
}
function length(){
	return this.top;
}

/*var myStack = new Stack();
myStack.push('gg');
myStack.push('hh');
console.log(myStack.top);
console.log(myStack.peek());
console.log(myStack.pop());*/

//应用--进制转换
function changeBase(num,base){
	var s = new Stack();
	do{
		s.push(num % base);
		num = Math.floor(num / base);
	}while(num > 0);
	var converted = '';
	while(s.length() > 0){
		converted += s.pop();
	}
	return converted;
}
console.log(changeBase(32,2));
console.log(changeBase(32,8));