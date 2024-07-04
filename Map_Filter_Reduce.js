//map
let arr1=[0,1,2,3,4,5,50];
newArr=arr1.map(function (n){
    return n*2;
})
console.log(newArr);

//reduce

let arr2=[0,1,2,3,4,5,50];
redArr=arr2.reduce(function(a1){
    return a1+1;
})
console.log(redArr);


//filter

let arr3=[0,1,2,3,4,5,50];
redArr=arr3.filter(function(a1){
    return a1%2===0;
})
console.log(redArr);

