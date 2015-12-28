function Set(){
this.dataStore = [];
this.add = add;
this.remove = remove;
//this.size = size;
this.union = union; //取并集
this.intersect = intersect; //取交集
this.subset = subset; //判断集合是不是另一个集合的子集
this.difference = difference; //求两个集合的补集
this.contains = contains;
this.size = size;
this.show = show;
}
function add(data){
if(this.dataStore.indexOf(data) < 0){
this.dataStore.push(data);
return true;
}else{
return false;
}
}
function remove(data){
var pos = this.dataStore.indexOf(data);
if(pos > -1){
this.dataStore.splice(pos,1);
return true;
}else{
return false;
}
}
function union(set){
var tempSet = new Set(); //为了不修改原集合
for(var i = 0,len = this.dataStore.length ;i < len;i++){
tempSet.add(this.dataStore[i]);
}
for(var i =0, len = set.dataStore.length;i < len;i++){
if(!tempSet.contains(set.dataStore[i])){
tempSet.add(set.dataStore[i]);
}
}
return tempSet;
}
function subset(set){
if(this.size() > set.size()){ //如果长度大于set则本集合不可能是set的子集
console.log('size');
return false;
}else{
for( var i = 0,len = this.dataStore.length;i < len;i++)
{
if(!set.contains(this.dataStore[i])){ //如果本集合中存在set中不存在的成员，则本集合不可能是set的子集
console.log(number);
return false;
}
}
}
return true;

}
function intersect(set){
var tempSet = new Set();
for(var i = 0,len = this.dataStore.length ;i < len;i++){
if(set.contains(this.dataStore[i])){
tempSet.add(set.dataStore[i]);
}
}
return tempSet;
}
function difference(set){
var tempSet = new Set(),Ldata,Sdata;
Ldata = this.size() > set.size()?this:set
Sdata = this.size() > set.size()?set:this;
for(var i = 0,len = Ldata.dataStore.length;i < len;i++){
if(!Sdata.contains(Ldata.dataStore[i])){
tempSet.add(Ldata.dataStore[i]);
}
}
return tempSet;
}
function contains(data){ //辅助方法 检查元素是否存在于集合中
if(this.dataStore.indexOf(data) > -1){
return true;
}else{
return false;
}
}
function size(){
return this.dataStore.length;
}
function show(){
return this.dataStore;
}
var names = new Set();
names.add('David');
names.add('Jennifer');
names.add('Cynthia');
names.add('Mike');
names.add('Raymond');
/*if(names.add('Mike')){
console.log('Mike add')
}else{
console.log("Can't add Mike, must already be in set");
}
console.log(names.show());
if(names.remove('Mike')){
console.log('Mike remove')
}else{
console.log("Can't remove Mike, must already be in set");
}*/
var test = new Set();
test.add('David');
test.add('Jennifer');
test.add('Cynthia');
test.add('Mike');
test.add('Raymond');
test.add('shan');
console.log(names.union(test));
console.log(names.intersect(test));
console.log(names.subset(test));
console.log(test.difference(names));