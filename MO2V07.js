const surveyResponses=[
    "A",
    "B",
    "A",
    "C",
    "B",
    "A",
    "D",
    "C",
    "B",
    "A",
]

const sales = [
  {
    item: "Laptop",
    category: "Electronics",
    quantity: 2,
    price: 75000
  },
  {
    item: "Shirt",
    category: "Clothing",
    quantity: 5,
    price: 1200
  },
  {
    item: "Book",
    category: "Stationery",
    quantity: 3,
    price: 350
  }
];
//TODO initiate empty object
//TODO check if the response already exit or not
//TODO If exits increment the count
//TODO the not initialize it with 1

const Count= surveyResponses.reduce((table,response)=>{
   // console.log(table,":",response);
    //if (table[response]){
       // table[response] = table[response] + 1;


   // }else{
    //    table[response]=1;

  //  }

  table[response]=(table[response] || 0) +1;
   return table;

},{})
console.log(Count);