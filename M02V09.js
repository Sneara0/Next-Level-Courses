//Denormalizing Data (client-side joins)


const users=[

    {id:1,name:"Alice",countryId:1},
    {id:2,name:"Bob",countryId:2},
    {id:3,name:"Charlie",countryId:1}

]

const posts=[
    
        {id:1,usersId:102,title:"my first post"},

        {id:2,usersId:103,title:"React Hooks"},
        {id:3,usersId:101,title:"Data Structures"},
        {id:4,usersId:100,title:"Css in fun"},
        {id:5,usersId:106,title:"Node js basics"},
  

    
]

//TODO CREATE HASHTABLE OF POSTS
//0(n)
const postByuserId= posts.reduce((table,posts)=>{
    const {usersId}=posts
    if(!table[usersId]){
        table[usersId]=[]
    }
    table[usersId].push(posts)
    return table
  
},{})
console.log(postByuserId)

//0(n)
const usersWithPosts= users.map((user)=>{
    return{
        ...user,

        //o(1)

        posts: postByuserId[user.id] || []
    }
})
console.log(JSON.stringify(usersWithPosts))