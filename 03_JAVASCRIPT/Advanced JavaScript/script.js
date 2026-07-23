function Sleep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done');
        }, 1000);
    });
}
const sum = async (a, b, c)=>{
    return a+b+c
}

async function Main() {
    let s = await Sleep();
    console.log(s);


    let [x,y,z] = [1, 5, 7, 8, 9, 10];
    console.log(x, y, z);


        let obj = {
        a: 1, 
        b: 2,
        c: 3
    }
    let {a,b} = obj
    console.log(a,b);
    

    let arr =[1,3,6];
    console.log(...arr);
    console.log(sum(arr[0],arr[1],arr[2]));
    console.log(sum(...arr));
    
    // Higher-order function - function that returns a function
    // Higher-order function - function that takes another function as an argument
    const multiplier = (factor) => {
        return (num) => num * factor;
    }
    const double = multiplier(2);
    console.log('Higher-order function:', double(5));
    console.log('Higher-order function:', double(6));
    
    // Closures - inner function has access to outer function's variables
    const createCounter = () => {
        let count = 0;
        return {
            increment: () => ++count,
            decrement: () => --count,
            getCount: () => count
        }
    }
    const counter = createCounter();
    console.log('Closures - Counter:', counter.increment(), counter.increment(), counter.getCount());
    
    // Promise.all - wait for multiple promises to resolve
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 100));
    Promise.all([promise1, promise2]).then(values => {
        console.log('Promise.all result:', values);
    });
    
    // Array methods - map, filter, reduce
    const numbers = [1, 2, 3, 4, 5];
    const squared = numbers.map(n => n ** 2);
    console.log('Map (squared):', squared);
    
    const evens = numbers.filter(n => n % 2 === 0);
    console.log('Filter (evens):', evens);
    
    const product = numbers.reduce((acc, n) => acc * n, 1);
    console.log('Reduce (product):', product);
    
    // Optional chaining and nullish coalescing
    const user = { name: 'John', address: { city: 'NYC' } };
    console.log('Optional chaining:', user?.address?.city ?? 'Unknown');
    
}

Main();