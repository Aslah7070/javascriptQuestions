// Task: Write a function to find the first non-repeating character in a string.?

function display(str){
    let freaquency={}//store the freaquency of the str
    for(let x of str){
        freaquency[x]= (freaquency[x]||0)+1
        // console.log(freaquency);
    }

    //find the non repeating char
    for(let x of str){
    if(freaquency[x]===1)
        return x
    }
    return null

}
console.log(display("heyhello"));

