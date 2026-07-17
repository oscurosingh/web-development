let a =prompt("Enter first number:");
let b =prompt("Enter second number:");


if (isNaN(a)|| isNaN(b)){
    throw SyntaxError("This is not allowed..")
    console.log('Not Allowed');   
}

let sum =parseInt(a)+parseInt(b)

function main(){
    let x =1 ;
    try{
        console.log('this is sum',sum*x);
        return true
    } catch (error){
        console.log('Error:',error.message);
        return false
    }
    finally{
        console.log('This is finally block');
    }
}
main()