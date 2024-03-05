class Node{
    constructor(title, script=null, crisis=null){
        this.title=title;
        this.script=script;
        this.crisis=crisis;
        this.next=null;
        this.prev=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.currentNode=null;
        this.no_of_nodes=null;
        this.currpos=null;
    }

    addItem(title, script, crisis){
        const newNode= new Node(title, script, crisis);
        if(!this.head){
            this.head=newNode;
            this.currentNode=newNode;
            this.no_of_nodes++;
            return;
        }
        let temp= this.head;
         while(temp.next){
            temp=temp.next;
        }
        newNode.prev= temp;
        temp.next= newNode;
        this.no_of_nodes++;

    }

    display(){
            console.log(`${this.currentNode.script}`);
        }
        
        gotoNext(){
            if(this.currentNode && this.currentNode.next!==null){
                this.currentNode=this.currentNode.next;
                this.currpos++;
                return;
            }
            else{
            console.log(`Invalid move`);
            }
        }

        gotoPrev(){
            if(this.currentNode && this.currentNode.prev!==null){
                this.currentNode=this.currentNode.prev;
                this.currpos--;
                return;
            }
            else{
            console.log(`Invalid move`);
            }
        }
    }

export  {Node, LinkedList};