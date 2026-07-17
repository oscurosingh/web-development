// let obj = {
//     a: 1,
//     b: "Harry"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };
// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
// console.log(rabbit.eats)

class animal {
    constructor(name) {
        this.name = name
        console.log('obj is created..');
    }
    eats() {
        console.log('Eats');

    }
    jumps() {
        console.log('Jumps');

    }
}

class Lion extends animal {
    constructor(name) {
        super(name)
        console.log("Object is created and he is a lion...")
    }
    eats(){
        super.eats()
        console.log('Lion eats meat')
    }
}
let a = new animal("moti");
console.log(a);

let l = new Lion("Shera")
console.log(l)
