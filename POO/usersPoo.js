// @ts-check
/* eslint-disable import/prefer-default-export */
import * as trees from '@hexlet/immutable-fs-trees';

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // Devolver una copia de la matriz para evitar que sea modificado desde fuera
  },
});

const user1 = makeUser({
  friends: [
    makeUser({ id: 1 }),
    makeUser({ id: 2 }), // amigo en común
  ],
});
const user2 = makeUser({
  friends: [
    makeUser({ id: 2 }), // amigo en común
    makeUser({ id: 3 }),
  ],
});


// BEGIN (write your solution here)
const getMutualFriends = (user1, user2) => {
    const f1 = user1.getFriends();
    const f2 = user2.getFriends();
    const f3 = {};
    return f1.filter((friend1) => 
        f2.some((friend2) => friend1.id === friend2.id)
    );
}
// END

console.log(getMutualFriends());

