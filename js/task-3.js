
//   ## задача 1

// function getElementWidth(content, padding, border) {
//   const contentWidth = parseFloat(content) * 2;
//   const paddingWidth = parseFloat(padding) * 2;
//   const borderWidth = parseFloat(border);
  
//   return contentWidth + paddingWidth + borderWidth;
// }

// getElementWidth("50px", "8px", "4px"); // повертає 62
// getElementWidth("60px", "12px", "8.5px"); // повертає 80.5
// getElementWidth("200px", "0px", "0px"); // повертає 200

// ## задача 2

// function checkForSpam(message) {
//   let lowerCaseMessage = message.toLowerCase();
//   if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Перевірка роботи функції
// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// function filterArray(numbers, value) {
//   let filteredArray = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       filteredArray.push(numbers[i]);
//     }
//   }

//   return filteredArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// const profile = {
//   username: "Jacob",
//   playTime: 300,
//   changeUsername(newName) {
//       this.username = newName;
//   },
//   updatePlayTime(hours) {
//       this.playTime += hours;
//   },
//   getInfo() {
//       return `${this.username} has ${this.playTime} active hours!`;
//   }
// };

// profile.changeUsername("John");
// profile.updatePlayTime(50);
// console.log(profile.getInfo());


// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

const sortByDescendingFriendCount = (users) => {
    return users.sort((a, b) => b.friends.length - a.friends.length);
};

console.log(
    sortByDescendingFriendCount([
      {
        name: "Moore Hensley",
        friends: ["Sharron Pace"],
        gender: "male"
      },
      {
        name: "Sharlene Bush",
        friends: ["Briana Decker", "Sharron Pace"],
        gender: "female"
      },
      {
        name: "Ross Vazquez",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        gender: "male"
      },
      {
        name: "Elma Head",
        friends: ["Goldie Gentry", "Aisha Tran"],
        gender: "female"
      },
      {
        name: "Carey Barr",
        friends: ["Jordan Sampson", "Eddie Strong"],
        gender: "male"
      },
      {
        name: "Blackburn Dotson",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        gender: "male"
      },
      {
        name: "Sheree Anthony",
        friends: ["Goldie Gentry", "Briana Decker"],
        gender: "female"
      }
    ])
  );
  // [
  //   {
  //     name: "Ross Vazquez",
  //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  //     gender: "male"
  //   },
  //   {
  //     name: "Sharlene Bush",
  //     friends: ["Briana Decker", "Sharron Pace"],
  //     gender: "female"
  //   },
  //   {
  //     name: "Elma Head",
  //     friends: ["Goldie Gentry", "Aisha Tran"],
  //     gender: "female"
  //   },
  //   {
  //     name: "Carey Barr",
  //     friends: ["Jordan Sampson", "Eddie Strong"],
  //     gender: "male"
  //   },
  //   {
  //     name: "Blackburn Dotson",
  //     friends: ["Jacklyn Lucas", "Linda Chapman"],
  //     gender: "male"
  //   },
  //   {
  //     name: "Sheree Anthony",
  //     friends: ["Goldie Gentry", "Briana Decker"],
  //     gender: "female"
  //   },
  //   {
  //     name: "Moore Hensley",
  //     friends: ["Sharron Pace"],
  //     gender: "male"
  //   }
  // ]
  