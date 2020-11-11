// UC Generates 10 Random 3 Digit number.
const randArr=[];
for(let i=0;i<10;i++) {
    randArr.push(Math.floor(Math.random()*(999-100+1)+100));
}
console.log(randArr);
const copyArray=randArr.slice();

// UC find the 2nd largest and the 2nd smallest element without sorting the array.
let max=Math.max(...randArr);
let pos=randArr.indexOf(max);
randArr.splice(pos,1);
let max2=Math.max(...randArr);
console.log("Second Maximum number: "+max2);
let min=Math.min(...randArr);
pos=randArr.indexOf(min);
randArr.splice(pos,1);
let min2=Math.min(...randArr);
console.log("Second Minimum number: "+min2);

// UC program to sort the array and then find the 2nd largest and the 2nd smallest element.
console.log(copyArray);
copyArray.sort();
console.log("Second Max: "+copyArray[copyArray.length-2]+" Second Min: "+copyArray[1]);

// UC Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array
let r;
let n;
let rev=0;
let arr=[];
for(let i=10;i<100;i++) {
    n=i;
    rev=0;
    while(n>0) {
        rev=(rev*10)+(n%10);
        n=parseInt(n/10);
    }
    if(i==rev)
    arr.push(i);
}
console.log("Digits that are repeated twice: "+arr);



