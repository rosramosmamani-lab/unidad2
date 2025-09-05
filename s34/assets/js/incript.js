let fruits = [
    "manzana", "sandia","mandarina","mango"
];
console.log("push");
fruits.push("fresa");
console.log(fruits);

console.log("pop");

fruits.pop();
console.log(fruits);

console.log("unshift");
fruits.unshift("uva");
console.log(fruits);

console.log("shift");

let deletedItem = fruits.shift();
console.log(`elemento eliminado con shift ${deletedItem}`);
console.log("includes");
console.log(fruits.includes("mandarina"));
console.log(fruits.includes("kiwi"));

console.log("index0f");

console.log(fruits.indexOf("mandarina"));
console.log(fruits.indexOf("kiwi"));

console.log("join");

console.log(fruits.join());
console.log(fruits.join("<"));
console.log(fruits.join("--🍉🍉"));
console.log(fruits.join(" (✿◡‿◡)\n"));
console.log(fruits.join(" <3 "));
console.log(fruits.join("🌻🌷"));

console.log("=========");
fruits = [ "manzana", "platano","mandarina","mango"];
console.log(fruits);
console.log("slice");

console.log(fruits.slice(2));
console.log(fruits.slice(1,3));



fruits.splice(2,2,"sandia","kiwi","arandanos");
console.log(fruits);

console.log("=========");
let nums = [1,2,3,4,5,6,7,8,9,];
console.log(nums);


let numberMap = nums.map((x)=> x +2);
console.log(numberMap);

console.log(nums.map((x)=> x*3));

console.log("filter");
let filteredNums = nums.filter((x) => x >5);

console.log(filteredNums);
console.log(nums.filter((x)=> x < 6));
console.log(nums.filter((x)=> x % 2 ===0));

console.log(nums.reduce((a,b)=> a*b,1));
