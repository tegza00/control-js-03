const user1 = {
    firstName: 'John',
    lastName: 'Doe',
    friends: [
      { firstName: 'Jane', lastName: 'Doe' },
      { firstName: 'Bob', lastName: 'Smith' },
      { firstName: 'Alice', lastName: 'Wonderland' },
    ],
  };
  const user2 = {
    name: 'Juan',
    surname: 'Hernandez',
    friends: [
      { name: 'Maria', surname: 'Garcia' },
      { name: 'Carlos', surname: 'Rodriguez' },
      { name: 'Ana', surname: 'Lopez' },
    ],
  };
  function friendsInfo() {
    this.friends.forEach(friend => {
      console.log(`Ім'я друга: ${friend.firstName || friend.name}, Прізвище друга: ${friend.lastName || friend.surname}`);
    });
  }
  friendsInfo.call(user1);
  friendsInfo.apply(user2);
  