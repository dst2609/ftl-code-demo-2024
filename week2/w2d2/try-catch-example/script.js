// Define a division function 
// with a try-catch block
function divideTwoNums(a, b) {
    try {
      if (b === 0 ) {
        throw new Error ("cannot divide by 0");
      }
      return a/b;
    } catch (error) {
        // Log the error message
        console.log(`Error while dividing: ${error.message}`);
    }
}
console.log(divideTwoNums(10, 0));