// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   const totalPrice = quantity * pricePerDroid;
//   if (totalPrice > customerCredits) {
//     return "Insufficient funds!";
//   } else {
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//   }
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"



// function slugify(title) {
//     return title.toLowerCase().split(' ').join('-');
// }

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"


//   function isEnoughCapacity(products, containerSize) {
//     let totalQuantity = 0;

//     for (let product in products) {
//         totalQuantity += products[product];
//     }

//     return totalQuantity <= containerSize;
// }

// // Перевірка роботи функції
// const products1 = { apples: 2, grapes: 4 };
// const containerSize1 = 10;
// console.log(isEnoughCapacity(products1, containerSize1)); // Повинно вивести true

// const products2 = { pencils: 8, notebooks: 3 };
// const containerSize2 = 5;
// console.log(isEnoughCapacity(products2, containerSize2)); // Повинно вивести false

// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false



////
//  ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]


let customer = {
  name: 'John',
  age: 30,
  balance: 100,
  deduct: function(amount) {
    this.balance -= amount;
  },

  topUp: function(amount) {
    this.balance += amount;
  },

  getDiscount: function() {
    return discount;
  },

  setDiscount: function(discountPercentage) {
    this.discount = discountPercentage;
  },

  getBalance: function() {
    return this.balance;
  },

  getOrders: function() {
    return this.orders;
  },

  addOrder: function(orderAmount, orderName) {
    if (!this.orders) {
      this.orders = [];
    }
    this.orders.push({ amount: orderAmount, name: orderName });
    return this.orders;
  },
};

console.log('Balance before deduction:', customer.balance);
customer.deduct(50);
console.log('Balance after deduction:', customer.balance);

console.log('Balance before top up:', customer.balance);
customer.topUp(20);
console.log('Balance after top up:', customer.balance);



const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return balance;
  },
  getDiscount() {
    return discount;
  },
  setDiscount(value) {
    discount = value;
  },
  getOrders() {
    return orders;
  },
  addOrder(cost, order) {
    balance -= cost - cost * discount;
    orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]