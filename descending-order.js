
//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


//SOLUTION 1
function descendingOrder(n){
    //...
    //first make it a string
    //thrn split the string into individual numbers
    // then sort the string from b-a
    //then join and convert back to number
    let splin = n.toString().split('').sort((a,b) => b-a).join('')
    return Number(splin)

  }

//SOLUTION 2
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }