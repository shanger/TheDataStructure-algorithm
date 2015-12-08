function Queue(){
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

function enqueue(element){
	this.dataStore.push(element);
}

function dequeue(){
	return this.dataStore.shift();		//数组的shift方法 删除数组的第一个元素
}

function front(){	//队首元素
	return this.dataStore[0];
}

function back(){	//队尾元素
	return this.dataStore[this.dataStore.length-1];
}

function toString(){
	var retStr = "",i = 0, len = this.dataStore.length;
	for(; i < len; i++){
		retStr += this.dataStore[i] + "\n"; 
	}
	return retStr;
}

function empty(){
	if(this.dataStore.length == 0){
		return true;
	}else{
		return false;
	}
}

/*var q = new Queue();
q.enqueue('shanger1');
q.enqueue('shanger2');
q.enqueue('shanger3');
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log(q.front());
console.log(q.back());
console.log(q.empty());*/

//应用实例
var dancer = [{'sex':'F','name':'gege1'},
{'sex':'F','name':'gege2'},
{'sex':'F','name':'gege3'},
{'sex':'F','name':'gege4'},
{'sex':'M','name':'shanger1'},
{'sex':'M','name':'shanger2'},
{'sex':'M','name':'shanger3'},
{'sex':'M','name':'shanger4'},
{'sex':'M','name':'shanger5'},
{'sex':'M','name':'shanger6'},];

var mDancer = new Queue();
var fDancer = new Queue();
for(var i = 0,len = dancer.length;i < len ; i++){
	if(dancer[i].sex == 'F'){
		fDancer.enqueue(dancer[i]);
	}else{
		mDancer.enqueue(dancer[i]);
	}
}
dance(mDancer,fDancer);
function dance(males,females){
	console.log('舞会组合如下：');
	while(!males.empty() && !females.empty()){
		var male = males.dequeue();
		console.log('男舞者是：' + male.name);
		var female = females.dequeue();
		console.log('女舞者是：'+ female.name);
	}
	if(males.empty()){
		console.log(females.front()+'女士需要等待。');
	}else{
		console.log(males.front().name+'先生需要等待。');
	}
};
