# JavaScript Classes & Objects — Object-Oriented Programming

## 1. What is OOP?

**Object-Oriented Programming (OOP)** is a programming approach where code is organized around **objects** that contain:

* **Properties** → data/state
* **Methods** → behavior/actions

```js
const user = {
  name: "Oscuro",
  age: 20,

  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

user.greet();
```

OOP helps make large applications **organized, reusable, and maintainable**.

---

# 2. Object

An object is a collection of **key-value pairs**.

```js
const car = {
  brand: "Toyota",
  model: "Camry",
  start() {
    console.log("Car started");
  }
};
```

Here:

* `brand`, `model` → properties
* `start()` → method

Access them using:

```js
console.log(car.brand);
car.start();
```

---

# 3. What is a Class?

A **class** is a blueprint for creating objects.

```js
class User {
  // class definition
}
```

The class itself is not usually the individual object. Objects are created from the class.

```js
const user1 = new User();
const user2 = new User();
```

Each object is an **instance** of the class.

---

# 4. Constructor

The `constructor()` method runs automatically when a new object is created.

```js
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user = new User("Oscuro", 20);

console.log(user.name);
console.log(user.age);
```

### `this`

`this` refers to the current object instance when the constructor is called with `new`.

```js
this.name = name;
```

means the object's `name` property receives the constructor's `name` argument.

---

# 5. Class Methods

Methods define the behavior of objects created from a class.

```js
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const user = new User("Oscuro");

user.greet();
```

Methods are defined once on the class prototype rather than recreated separately for every instance.

---

# 6. Creating Multiple Objects

One class can create many independent objects.

```js
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const user1 = new User("Oscuro");
const user2 = new User("Alex");

user1.greet();
user2.greet();
```

Both objects follow the same structure but contain different data.

---

# 7. Class Properties

Properties can be initialized in the constructor.

```js
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
}

const student = new Student("Rahul", 85);
```

Modern JavaScript also supports class fields:

```js
class Student {
  college = "University of Delhi";

  constructor(name) {
    this.name = name;
  }
}
```

---

# 8. Encapsulation

**Encapsulation** means keeping data and the operations that work on that data together while controlling access to internal state.

JavaScript supports private class fields using `#`.

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();

account.deposit(1000);

console.log(account.getBalance());
```

Direct access is not allowed:

```js
// account.#balance; // SyntaxError
```

> `#privateField` provides true JavaScript private class fields.

---

# 9. Getters and Setters

Getters and setters control how properties are read and modified.

```js
class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value.trim();
  }
}

const user = new User("Oscuro");

console.log(user.name);

user.name = " Alex ";

console.log(user.name); // Alex
```

* `get` → controls reading
* `set` → controls assignment

---

# 10. Inheritance

**Inheritance** allows one class to reuse properties and methods from another class.

Use:

* `extends` → inherit from another class
* `super()` → call the parent constructor

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Bruno");

dog.speak();
dog.bark();
```

`Dog` inherits `name` and `speak()` from `Animal`.

---

# 11. `super()`

When a derived class has a constructor, `super()` must be called before using `this`.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const dog = new Dog("Bruno", "Labrador");
```

`super(name)` calls the parent class constructor.

---

# 12. Method Overriding

A child class can provide its own implementation of a parent method.

```js
class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}

const dog = new Dog();

dog.speak(); // Bark
```

The child method **overrides** the parent method.

---

# 13. Polymorphism

**Polymorphism** means the same method/interface can behave differently depending on the object.

```js
class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}

const animals = [new Dog(), new Cat()];

animals.forEach(animal => animal.speak());
```

Output:

```text
Bark
Meow
```

The same `speak()` call produces different behavior.

---

# 14. Static Methods

A `static` method belongs to the **class itself**, not to its instances.

```js
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(10, 20));
```

You cannot normally call it through an instance:

```js
const math = new MathUtil();

// math.add(10, 20); // Error
```

Use static methods for functionality that does not depend on a particular instance.

---

# 15. `instanceof`

`instanceof` checks whether an object is an instance of a particular class or constructor's prototype chain.

```js
class User {}

const user = new User();

console.log(user instanceof User); // true
```

With inheritance:

```js
class Animal {}
class Dog extends Animal {}

const dog = new Dog();

console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true
```

---

# 16. Prototype-Based Nature of JavaScript

JavaScript is fundamentally a **prototype-based language**.

Classes provide a cleaner syntax over JavaScript's existing prototype system.

```js
class User {
  greet() {
    console.log("Hello");
  }
}
```

Conceptually, `greet()` is available through `User.prototype`.

```js
console.log(User.prototype);
```

This is why JavaScript classes are often described as **syntactic sugar over prototypes**.

---

# 17. Four Main Principles of OOP

### 1. Encapsulation

Bundle data and behavior together and control access.

```js
class Account {
  #balance = 0;
}
```

### 2. Inheritance

Reuse functionality from another class.

```js
class Dog extends Animal {}
```

### 3. Polymorphism

Same interface/method can have different implementations.

```js
dog.speak();
cat.speak();
```

### 4. Abstraction

Expose essential functionality while hiding unnecessary implementation details.

For example:

```js
account.deposit(1000);
```

The user does not need to know the internal steps used to update the balance.

---

# 18. Class vs Object

| Class                      | Object                      |
| -------------------------- | --------------------------- |
| Blueprint                  | Instance                    |
| Defines structure/behavior | Contains actual data        |
| Created using `class`      | Usually created using `new` |
| Can create many objects    | Represents one instance     |
| Example: `class User`      | Example: `new User()`       |

---

# 19. Object vs Class Syntax

### Object

Best for a single/simple entity:

```js
const user = {
  name: "Oscuro",

  greet() {
    console.log("Hello");
  }
};
```

### Class

Useful when creating many objects with the same structure and behavior:

```js
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}
```

---

# 20. Complete Example

```js
class BankAccount {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Oscuro");

account.deposit(5000);
account.withdraw(1000);

console.log(account.getBalance()); // 4000
```

This example demonstrates:

* Class
* Constructor
* Object creation
* `this`
* Methods
* Private field
* Encapsulation
* Validation

---

# Important Points

* A **class** is a blueprint for creating objects.
* An **object** is an instance containing data and behavior.
* `constructor()` initializes an instance.
* `this` refers to the relevant object context.
* `extends` implements class inheritance.
* `super()` calls parent-class functionality.
* `#` creates private class fields.
* `static` creates class-level methods.
* JavaScript classes use the **prototype system internally**.
* OOP principles include **encapsulation, inheritance, polymorphism, and abstraction**.

---

# Interview Questions & Answers

## Q1. What is OOP?

OOP is a programming paradigm that organizes software around objects containing data and behavior.

## Q2. What is a class?

A class is a blueprint used to create objects with shared structure and behavior.

## Q3. What is an object?

An object is an instance containing properties and methods.

## Q4. What is a constructor?

A special class method that automatically runs when an object is created with `new`.

## Q5. What is `this`?

`this` refers to the object associated with the current method or constructor call, depending on how the function is invoked.

## Q6. What is inheritance?

Inheritance allows a class to reuse properties and methods from another class using `extends`.

## Q7. What is encapsulation?

Encapsulation combines data and behavior while controlling access to internal state.

## Q8. What is polymorphism?

Polymorphism allows the same method/interface to produce different behavior depending on the object.

## Q9. What is `super()`?

`super()` calls the parent class constructor or accesses parent class methods.

## Q10. What is a static method?

A method that belongs to the class itself rather than its instances.

```js
class User {
  static create() {
    return new User();
  }
}

const user = User.create();
```

## Q11. Are JavaScript classes truly class-based?

JavaScript is fundamentally prototype-based. The `class` syntax provides a cleaner abstraction over the prototype system.

## Q12. What is `instanceof`?

It checks whether an object exists in a constructor/class's prototype chain.

```js
user instanceof User;
```
