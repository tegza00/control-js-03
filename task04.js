const user = {
   name: "",
   balance: 0,
   giveMoney: function(amount) {
      this.balance += amount;
    },
    balanceInfo: function() {
      console.log(`Поточний баланс користувача ${this.name}: ${this.balance}`);
    }
  };
  const users = [
    { name: 'Alice', balance: 500 },
    { name: 'Bob', balance: 200 },
    { name: 'Charlie', balance: 1000 },
  ];
  users.forEach(userObj => {
    user.giveMoney.call(userObj, 100); 
  });
  const wealthyUsers = users.filter(userObj => userObj.balance > 500);
  const balances = users.map(userObj => userObj.balance);
  console.log(balances);
  user.balanceInfo.call(users[0]);
  