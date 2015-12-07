function List(){
	this.listSize = 0;
	this.pos = 0;	//位置
	this.dataStroe = [];	//初始化空数组保存列表元素
	this.clear = clear;		//清空列表中所有元素
	this.find = find;		//删除元素的辅助函数
	this.toString = toString; //返回列表的字符串形式
	this.insert = insert;	//在当前元素后插入元素
	this.append = append;	//在列表最后插入元素
	this.remove = remove;   //从列表中删除元素
	this.front =  front;	//移动pos到列表的第一个元素
	this.end = end;
	this.prev = prev;		//将当前位置前移一位
	this.next = next;
	this.length = length;
	this.currPos = currPos; //返回列表的当前位置
	this.moveTo = moveTo;	//将当前位置移动到指定位置
	this.getElement = getElement;
	this.contains = contains;
}

function append(element){
	this.dataStroe[this.listSize++] = element;
}

function find(element){
	var i = 0,len = this.dataStore.length;
	for( i; i < len; i++){
		if(this.dataStore[i] == element){
			return i;
		}
	}
	return -1;
}

function remove(element){
	var foundAt = this.find(element);
	if(foundAt > -1 ){
		this.dataStore.splice(foundAt,1);
		--this.listSize;
		return true;
	}
	return false;
}

function length(){
	return this.listSize;
}

function toString() {
	return this.dataStore;
}

function insert(element,after){
	var insertPos =  this.find(after);
	if(insertPos > -1){
		this.dataStore.splice(insertPos + 1,0,element);
		++this.listSize;
		return true;
	}
	return false;
}

function clear(){
	delete this.dataStore;
	this.dataStore.length = 0;
	this.listSize = this.pos = 0;
}

function contains(element){
	var i = 0,len = this.dataStore.length;
	for(i ; i < len; i++){
		if(this.dataStore[i] == element){
			return true;
		}
	}
	return false;
}

function front(){
	this.pos = 0;
}

function end(){
	this.pos = this.listSize - 1;
}

function prev(){
	if(this.pos > 0){
		--this.pos;
	}
}

function next(){
	if(this.pos < this.listSize - 1){
		++this.pos;
	}
}

function currPos(){
	return this.pos;
}

function moveTo(position){
	this.pos =  position;
}

function getElement(){
	return this.dataStroe[this.pos];
}
//测试代码

/*var friends = new List();
friends.append('shan');
friends.append('hu');
friends.append('liu');
friends.append('erhuo');
friends.append('hou');
console.log(friends.length());
console.log(friends.listSize);
friends.front();
console.log(friends.getElement());*/