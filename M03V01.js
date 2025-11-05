//*Stateless vs Statefull 
const counter1=(amount)=>{
    let count=0;
   count=count+amount;
    return count;

} 
console.log( counter(3));
console.log( counter(2))

const counter={
    count:0,
    add (amount){
        this.count=this.count+amount;
        return this.count;

    },
    print(){
        console.log(this.count);

    }
}
counter.add(3);
counter.add(2);


counter.print();
