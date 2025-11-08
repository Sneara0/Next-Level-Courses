let usersA = [];
let usersB = [];
const USER_COUNT = 25000; 


const createUser = (id) => ({
  id: `user_id${id}`,
  name: `user_name${id}`
});


for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000)); 
}

const commonFriendsSlow = (usersA, usersB) => {
  const startTime = performance.now();

  const commonFriends = [];
//!n^2
  usersA.forEach((userA) => {
    //*n
    usersB.forEach((userB) => {
      if (userA.id === userB.id) {
        commonFriends.push(userB);
      }
    });
  });

  const endTime = performance.now();

  return {
    count: commonFriends.length,
    timeTookToFinish: (endTime - startTime).toFixed(2) + " ms"
  };
};

console.log(commonFriendsSlow(usersA, usersB));


//set


for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000)); 
}

const commonFriendsFast = (usersA, usersB) => {
  const startTime = performance.now();

  const commonFriends = [];
//!n^2
  usersA.forEach((userA) => {
    //*n
    usersB.forEach((userB) => {
      if (userA.id === userB.id) {
        commonFriends.push(userB);
      }
    });
  });

  const endTime = performance.now();

  return {
    count: commonFriends.length,
    timeTookToFinish: (endTime - startTime).toFixed(2) + " ms"
  };
};

console.log(commonFriendsFast(usersA, usersB));

