console.log("this is Promises...");
let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No Random No. Allowed below .5(promise 1)");
  } else {
    setTimeout(() => {
      console.log("Resolved 1");

      resolve("Random No. Allowed above .5(promise 1)");
    });
  }
});
let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No Random No. Allowed below .5(promise 2)");
  } else {
    setTimeout(() => {
      console.log("Resolved 2");

      resolve("Random No. Allowed above .5(promise 2)");
    });
  }
});
let p3 = Promise.allSettled([prom1, prom2]);
p3.then((a) => {
  console.log(a);
}).catch(err=>{
    console.log(err)
});
