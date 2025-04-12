// 

const users = [
    { name: 'Alice', balance: 100, gender: 'female' },
    { name: 'Bob', balance: 150, gender: 'male' },
    { name: 'Eve', balance: 80, gender: 'female' },
    { name: 'John', balance: 200, gender: 'male' }
  ];
  
  const getTotalBalanceByGender = (users, gender) => {
    const totalBalance = users
      .filter(user => user.gender === gender)
      .reduce((acc, user) => acc + user.balance, 0);
  
    return totalBalance;
  };
  
  console.log(getTotalBalanceByGender(users, 'female')); // Повинно вивести 180
  console.log(getTotalBalanceByGender(users, 'male')); // Повинно вивести 350

  const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863
