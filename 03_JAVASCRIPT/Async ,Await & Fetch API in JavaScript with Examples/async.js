// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     }
//     )
// }
async function getData() {
    //    json free fake api placeholder
    let x =fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = (await x).json()
      console.log(x);
      return 200
      
}
async function main() {
    console.log('Loading Moddules');
    console.log('Do Something Else');
    console.log('Load Data');

    let data = await getData()

    console.log(data);
    console.log('Process Data');
    console.log('task 2');
}

main()