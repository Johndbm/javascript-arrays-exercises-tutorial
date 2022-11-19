let arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
//*****************
for (let i = 0; i < 10; i++) {
    const randomInt = Math.floor(Math.random(i) * 10 + 1);
    let addedInt = arr.push(randomInt);
}

console.log(arr)