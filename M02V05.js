//count subtotal

const  cartItems=[
    { id: 1, name: 'Item A', price: 10.0, quantity: 2 },
    { id: 2, name: 'Item B', price: 15.0, quantity: 4 },
    { id: 3, name: 'Item C', price: 7.5, quantity: 3 },

];

const subtotal= cartItems.reduce((subtotal,product)=>{
    console.log(subtotal,product);
    return subtotal + product.price * product.quantity;
},0);
//console.log(subtotal)

//find best scorer
const students=[
    {id:1,name:'Alice',score:85},
    {id:2,name:'Bob',score:92},
    {id:3,name:'Charlie',score:88},
];
const bestStudent=students.reduce((bestStudent,students)=>{
    console.log(bestStudent,students);
    if
    (bestStudent.score > students.score ? bestStudent : students){
        return bestStudent;
        {
            return students;
        }
    }

    

    

},students[0]);
console.log(bestStudent);
