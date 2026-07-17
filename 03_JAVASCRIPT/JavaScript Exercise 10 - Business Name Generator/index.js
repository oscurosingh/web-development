/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub


you cant use arrays..
*/
let adjectives = {
    0: "Incredible",
    1: "Crazy",
    2: "Amazing",
    3: "Fire",
    4: "Super",
}
let shopname = {
    0: "Wears",
    1: "Engine",
    2: "Foods",
    3: "Garments",
    4: "Clothes",
}
let anotherword = {
    0: "LLC",
    1: "Bros",
    2: "Limited",
    3: "Hub",
    4: "Inc",
}
let max = 5;
let randomInt1 = Math.floor(Math.random() * max);
let randomInt2 = Math.floor(Math.random() * max);
let randomInt3 = Math.floor(Math.random() * max);


let businessname = adjectives[randomInt1] + " " + shopname[randomInt2] + " " + anotherword[randomInt3];
console.log("The name of your business is " + businessname);

