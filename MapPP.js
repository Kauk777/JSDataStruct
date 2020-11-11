// UC Dice values
let dice=new Map();
function getVal() {
    return (Math.floor(Math.random() * 10) % 6 + 1);
}
let s=new Array(7).fill(0);
let flag=0;
while(true) {
    s[getVal()]++;
    for(let i=1;i<=6;i++) {
        if(s[i]==10)
        flag=1;
    }
    if(flag==1)
    break;
}

for(let i=1;i<=6;i++)
dice.set(i,s[i]);

for(let [key, value] of dice.entries()) {
    console.log(key+" = "+value);
}
let copyArr=s.slice(1);
//console.log(copyArr);
copyArr.sort((a, b) => a - b);
//console.log(copyArr);
console.log("Number reached Max times: "+s.indexOf(copyArr[5])+" and Min times: "+s.indexOf(copyArr[0]));

// UC program to store individuals having birthday in same month
function getRandomMonth(val) {
    return (Math.floor(Math.random() * Math.floor(val)) + 1);
}
let indv=new Map();
for(let i=1;i<=50;i++) {
    indv.set(i,getRandomMonth(12));
}

let monthArr=[...indv.values()]
console.log(monthArr);


