const letters =["a", ["b", ["c", ["d", ["e"]],"f"]]];
console.log(letters[1][1][1][1])
function deepIterator(target){
    console.log("Argument: ", target);
    if(typeof target === "object"){
        for(const key in target){
            deepIterator(target[key])
        }
    }
     else{
            console.log("Logged value:", target);
        }
 }   
const numbers = [1, [2, [4, [5, [6]], 3]]];
console.log(deepIterator(numbers));
