
const currentUserRoles=["user","editor","manager"];
const  featureAccessRoles=["admin","manager"];
const canAccess= currentUserRoles.some((role)=> featureAccessRoles.includes(role));
//console.log(canAccess);
const arr= Array.from([1,2,3],(value,i)=> value * value);
console.log(arr);