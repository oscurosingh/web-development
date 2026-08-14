import path from 'node:path';
// const filePath = path.join('data', 'users', 'profile.json');

// console.log(filePath); // Output: data/users/profile.json

const filePath = path.join('files', 'report.final.txt');

console.log(path.basename(filePath)); // report.final.txt
console.log(path.dirname(filePath));  // files
console.log(path.extname(filePath));  // .txt
console.log(path.parse(filePath));

