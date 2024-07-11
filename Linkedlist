const list = {
    value: 'a',
    next: {
    value: 'b',
    next: null
    }
    }

    class Node {
        constructor(value, next = null) {
        this.value = value;
        this.next = next;
        }
        }
        
    class Linkedlist{
        constructor(){
            this.head = null;
        }
    }
    
        function insert(value){
            const newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
       
        }

        function insetList(Node){
            const newNode = new Node(value);
            if(!this.head){
                this.head = newNode;
                return;
            }
            let current = this.head;
            while(current.next){
                current = current.next;

            }
            current.next = newNode;

        }

        function size(){
            let count = 0 ;
            let current = head;
            while(current!== null){
                count ++;
                current = current.next;
            }
            return count;
            }

            function at (n){
                if(n<0){
                    return null;
                }
                let current = this.head;
                let count = 0;
                while (current){
                    if(count === n){
                        return current;
                    }
                    count ++;
                    current = current.next;
                }
                return null;


            }
            function join (seperator = ','){
                if (!this.head){
                    return '';
                }
                let current = this.head;
                let result = '';
        
                while (current) {
                    result += current.value;
                    if (current.next) {
                        result += separator;
                    }
                    current = current.next;
                }
        
                return result;
            
            }

            function map(func) {
                const newList = new LinkedList();
        
                let current = this.head;
                while (current) {
                    newList.append(func(current.value));
                    current = current.next;
                }
        
                return newList;
            }


            function filter(func){
                const newList = new LinkedList();
                let current = this.head;
                while (current){
                    if(func (current.value)){
                        newList.append(current.value);
                    }
                    current =  current.value;
                }
                return newList;
            }

            function find(func){
                let current = this.head;
                while (current){
                    if (func(current.value) == current)
                        return true;
                
               current=current.next;
            }
            return null;
            }
        


        
        
    
