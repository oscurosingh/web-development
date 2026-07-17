function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3000);
    }
    )
}

console.log('Loading Moddules');
console.log('Do Something Else');
console.log('Load Data');

let data = getData()
// here we use then in place of async wait
data.then((v) => {
    console.log(data);
    console.log('Process Data');
    console.log('task 2');
}
)