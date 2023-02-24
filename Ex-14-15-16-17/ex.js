// Ex-14- Create Guest List

let guests = ["ali", "wali", "ayesha"];

// for (let i = 0; i < guests.length; i++) {
//     console.log(`Hey ${guests[i]},It would be pleasure if you accept today's dinner at my home\n`);
//   }






// Ex-15 Change Guest List

console.log(`\n\n\n\n\n${guests.join(" and ")} can't come.`);

guests.splice(1, 2, "omer", "hassan");

for (let i = 0; i < guests.length; i++) {
  console.log(
    `\nHey ${guests[i]},It would be pleasure if you accept today's dinner at my home`
  );
}






// Ex-16

guests.unshift("hamza");
guests.push("ubaid");
guests.splice(1, 0, "ayesha");

console.log(
  "\n\n\n\n\nHey guys, I have found a good size table for our dinner."
);

for (let i = 0; i < guests.length; i++) {
  console.log(
    `\nHey ${guests[i]},It would be pleasure if you accept today's dinner at my home`
  );
}








// Ex-17

console.log(
  "\nSorry Guys! here is a bad news, my new table wouldn't arrive on time, now I can invite only 2 people for dinner\n"
);

while (guests.length > 2) {
  // let removed_guest = guests.pop();
  console.log(
    `${guests.pop()},I have deeply apologized I can't invite you for supper due to space issue.`
  );
}

for (let i = 0; guests.length > 0; i++) {
  if (i < guests.length) {
    console.log(`\n${guests[i]}, you're primarily invited for today.`);
  } else {
    guests.pop();
  }
}
console.log(guests);
