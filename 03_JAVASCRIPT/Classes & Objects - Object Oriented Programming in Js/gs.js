// getter & setter methods are special methods that allow you to define how to access and modify the properties of an object.

// Example 1: Object literal with getter and setter
const person = {
	firstName: 'Jane',
	lastName: 'Doe',
	// getter: behaves like a property access (person.fullName)
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
	// setter: allows assignment (person.fullName = 'John Smith') and custom side-effects/validation
	set fullName(value) {
		const parts = value.split(' ');
		this.firstName = parts[0] || '';
		this.lastName = parts[1] || '';
	}
};

console.log(person.fullName); // "Jane Doe" (uses getter)
person.fullName = 'John Smith'; // (uses setter)
console.log(person.firstName); // "John"
console.log(person.lastName);  // "Smith"

// Example 2: Class with getters/setters and validation
class Rectangle {
	constructor(width, height) {
		this._width = width;   // convention: underscore for internal property
		this._height = height;
	}

	// read-only computed property
	get area() {
		return this._width * this._height;
	}

	// setter with validation
	set width(value) {
		if (value <= 0) throw new Error('Width must be positive');
		this._width = value;
	}

	get width() {
		return this._width;
	}

	set height(value) {
		if (value <= 0) throw new Error('Height must be positive');
		this._height = value;
	}

	get height() {
		return this._height;
	}
}

const rect = new Rectangle(5, 3);
console.log(rect.area); // 15 (uses getter)
rect.width = 10;        // uses setter with validation
console.log(rect.area); // 30

// Notes:
// - Getters let you expose computed or derived values like properties.
// - Setters let you control and validate changes to internal state.
// - They provide a clean API while keeping internal representation flexible.

// example 3

class user{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name
    }
    set name(value){
        if (value.length<4) {
            console.log('Name is too short');
            return
        } 
        this._name = value
    }
}

let User = new user("shubham")
console.log(User.name);

User.name ="ana"
console.log(User.name);

