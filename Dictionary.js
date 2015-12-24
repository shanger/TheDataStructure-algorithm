function Dictionary(){
	this.add = add;
	this.datastore = new Array();
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
	this.clear = clear;
	this.count = count;
}
function count(){
   var n = 0;
   for( var key in Object.keys(this.datastore) ){++n;}
   return n;
}
function add(key,value){
	this.datastore[key] = value;
}
function find(key){
	return this.datastore[key];
}
function remove(key){
	delete this.datastore[key];
}
function showAll(){
//var datakeys = Array.prototype.slice.call(Object.keys(this.datastore));
	var newarr = {}
	for(var key in Object.keys(this.datastore).sort()){
		var n = 0,count = 0;
		while(this.datastore[n]){
			if(this.datastore[key] == this.datastore[n]){count++;}
			n++;
		}
		newarr[this.datastore[key]] = count;
		
	}
	for(var key in newarr){
		console.log(key + ':' +newarr[key]);
	}

}
function clear(){
   Object.keys(this.datastore).forEach(function(key){
      delete this.datastore[key];
   },this)
}
var pbook = new Dictionary(),arr = 'the brown fox jumped over the blue fox'.split(' ');
for(var i = 0, len = arr.length;i < len;i++){
	pbook.add(i,arr[i])
}
pbook.showAll();