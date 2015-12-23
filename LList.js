
        function Node(element){
            this.element = element;
            this.previous = null;
            this.next = null;
        }
        function List(){
            this.head = new Node('head');
            this.find = find;
            this.insert = insert;
            this.display = display;
            this.remove = remove;
            this.findLast = findLast;
        }
        function findLast(){
            var currNode = this.head;
            while(!(currNode.next == null)){
                currNode = currNode.next;
            }
            return currNode;
        }
        function find(item){
            var currNode = this.head;
            while(currNode.element != item){
                currNode = currNode.next;
            }
            return currNode;
        }

        function insert(newelement,item){

            var newNode = new Node(newelement);
            var current = this.find(item);
            if( current.next != null){
                var theback = this.find(current.next.element);
                theback.previous = newNode;
            }
            newNode.next = current.next;
            newNode.previous = current;
            current.next = newNode;
        }


        function display(){
            var current = this.head;
            while(!(current.next == null)){
                console.log(current.next.element);
                current = current.next;
            }
        }

        function remove(item){
            var currNode = this.find('item');
            if(!(currNode.next == null)){
                currNode.previous.next = currNode.next;
                currNode.next.previous = currNode.previous;
                currNode.next = null;
                current.previous = null;
            }
        }
        var mylist = new List();
        mylist.insert('test1','head');
        mylist.insert('test2','test1');
        mylist.insert('test3','test2');
        mylist.insert('liger','test2');
        mylist.display();