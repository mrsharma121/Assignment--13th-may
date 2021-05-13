const x  = window.prompt("Enter the numbers");
let arr = []
for (let i = 0; i<x ; i++ ){
    if (i%2 === 0){
        arr.push((i+1)**2  + 1 )
    }
    if (i%2 !== 0){
        arr.push((i+1)**2 -1 )
    }
}
console.log(arr[arr.length-1])