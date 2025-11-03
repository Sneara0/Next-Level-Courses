//Generate a looukup table

const postsArray=[
    {id:1,title:"Post One",content:"This is post one",author:"Author A"},
    {id:2,title:"Post Two",content:"This is post two",author:"Author B"},
    {id:3,title:"Post Three",content:"This is post three",author:"Author C:"},
]

const looukupTable= postsArray.reduce((table,post)=>{
    table[post.id]=post;
    return table;




},{})
console.log(looukupTable);

//!const post=postsArray.find(post=>post.id===2);

const post=looukupTable[2];

for (let post in looukupTable){
    console.log(post);
}
console.log(looukupTable[post]);
console.log(post);
