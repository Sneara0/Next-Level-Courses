class node{
    constructor(value){
        this.value=value;
        this.next=null;

    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    appened(value){
        const newNode= new node(value);

        if( this.head === null){
            this.head=newNode
            this.tail=newNode

        } else{
            this.tail.next=newNode;
            this.tail=newNode;
            
        }
        this.length++;

    }

    prepend(){

    }

    remove(){

    }

    print(){
        let currentNode= this.head;

        while(currentNode !== null){
            console.log (currentNode.value);
            currentNode= currentNode.next



        }

    }
}

const List = new LinkedList ();
List.appened(1);
List.appened(2);
List.appened(3);
List.print()