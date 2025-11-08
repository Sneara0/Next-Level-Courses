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

    prepend( value){

         const newNode= new node(value);

        if( this.head === null){
            this.head=newNode
            this.tail=newNode

        } else{
            newNode.next=this.head
            this.head=newNode
           
            
        }
        this.length++;

    }



    insert(index,value){
        if(index<0 || index> this.length){
            console.error("index out of bound:sohoz Bangla Vasai muri kha")
            return undefined;
        }
        if (index===0){
            return this.prepend(value);
        }




        if(index=== this.length){
            return this.appened(value)
        }
        //if the insert is in the middle
        // find leading node
     const leadingNode= this._traverseToIndex(index-1);
     const holdingNode=leadingNode.next

     const newNode =new node(value);
     leadingNode.next=newNode;
     newNode.next=holdingNode;
     this.length++;

      
        
    }


    remove(index){
        if(index===0){
            const removeItem= this.head.value
            this.head=this.head.next;


            if (this.length ===1){
                this.tail=null
            }

            this.length--;
            return removeItem

        }




        const leadingNode= this._traverseToIndex(index-1);
        const nodeToRemove= leadingNode.next
        leadingNode.next=nodeToRemove.next

        leadingNode.next=nodeToRemove.next

    }
    _traverseToIndex(index){
        let count=0;
        let currentNode=this.head;

        while (count!==index){

            currentNode= currentNode.next;
            count++;
        }
        return currentNode
        
      }
    

      
    print(){
        const arr=[]
        let currentNode= this.head;

        while(currentNode !== null){
            arr.push (currentNode.value);
            currentNode= currentNode.next



        }

        console.log(arr.join("→"),"→null")

    }
}

const List = new LinkedList ();
List.appened("A");
List.appened("B");
List.appened("C");
List.appened("D");

List.print()
List.remove(2)
List.print()