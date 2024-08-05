

function display(arr){
return JSON.parse(JSON.stringify(arr))
}
let a=[1,2,3,4,5];
let deepCopy=display(a)
deepCopy.push(6);
console.log(a);
console.log(deepCopy);