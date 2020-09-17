// Pair Programming #1: 16 Sep 2020
const participants = ['Helen Ouyang', 'Jillian Martin', 'Sherwin Kwan'];
console.log('This pair program was created collaboratively on 16 Sep 2020 by:')
for (let participant of participants) {
  console.log(participant);
}
console.log('');

const raisinAlarm = function(cookie) {
  for (const item of cookie) {
    if (item === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};

// testing

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"])); // Raisin alert!
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"])); // Raisin alert!
console.log(raisinAlarm(["🍫", "🍫", "🍫"])); // All good!

// Receive an array
// Check each item in the array
// If the item is a raisin then return an alert
// If not continue looping
// If there are no raising return All Good!

// Stretch
// Receive an array of arrays

const raisinAlarmArray = function(cookies) {
  // Put your solution here
  let result = [];
  for (let cookie of cookies) {
    result.push(raisinAlarm(cookie));
  }
  return result;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
)); // ["Raisin alert!", "Raisin alert!", "All good!"]

// Check each array in the array
// Find out if that array has a raisin or not
// Add Raisin alert! or All good! to a results array
// Return a results array

// BTW if you need it: \u1F347 should be a grape