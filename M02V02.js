const rawApiData=[


    
  {
    id: 1,
    name: "Wireless Headphones",
    price: 3500,
    quantity: 1,
    category: "Electronics",
    rating: 4.5,
    stock: 10,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4200,
    quantity: 2,
    category: "Electronics",
    rating: 4.8,
    stock: 7,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 1500,
    quantity: 1,
    category: "Accessories",
    rating: 4.2,
    stock: 15,
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 2800,
    quantity: 1,
    category: "Electronics",
    rating: 4.6,
    stock: 5,
  },

];
//*process
//TODO filter=>Electronics
//TODO Sort by ==>Rating
//TODO Slice=>top 3
//TODO Map =>transform object shape to {name:"Name"}



const topElectronicsProducts=rawApiData.filter(
(item) =>item.category==="Electronics"
).sort((a,b)=> b.rating -a.rating).slice(0,3)
.map((item)=>{
    return {name:item.name};
}

);
console.log(topElectronicsProducts)