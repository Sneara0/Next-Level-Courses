//SORT
const numbers=[40,100,1,5,25,10];
const fruits=["Banana","Orange","apple","mango"];

//const sortedNumber=numbers.sort((a,b)=>a-b);
//console.log(sortedNumber)
//console.log(numbers);

fruits.sort((a,b)=>a.localeCompare(b));
//console.log(fruits);

//Nested Array flat
//const arr=[1,2,3,[4,5,6,[7,8,9,[10,11]]]];
//const flatArr=arr.flat(Infinity);
//console.log(flatArr);


const tagsFromPosts=[

    ["JavaScript","CSS","TypeScript"],
    ["TypeScript","Java","GoLang"],
    ["HTML","CSS","Sass"],
];
//const filterTags=[...new Set(tagsFromPosts.flat())];
//console.log(filterTags);

//some
const number=[1,3,5,7,9,10];
const hasEvenNumber=number.some((number) =>number %2===0) ;
console.log(hasEvenNumber);



const currentUserRoles=["user","editor","manager"];
const  featureAccessRoles=["admin","manager"];
const canAccess= currentUserRoles.some((role)=> featureAccessRoles.includes(role));
//console.log(canAccess);
const arr= Array.from([1,2,3],(value,i)=> value * value);
console.log(arr);