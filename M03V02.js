const createCounter = () => {
  let count = 0;

  return (amount) => { 
    count = count + amount;
    return count;
  };
};


class Counter {
  constructor(count) {
    this.count = count;
  }
  add(amount) {
    this.count = this.count + amount;
  }
  print() {
    console.log(this.count);
  }
}
const counter=createCounter();
console.log( counter(5));
console.log( counter(7));

const counter1= new Counter(5);
counter1.add(3);
counter1.add(2);
counter1.print();

const counter2=new Counter(10);
counter2.add(5);
counter2.add(7);
counter2.print();
