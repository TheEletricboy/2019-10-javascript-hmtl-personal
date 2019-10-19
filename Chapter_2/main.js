//strings

let email = 'miguelvieira1997@hotmail.com';
console.log(email);
let title = 'Mr';
let author = 'Miguel';

//string concaentation

let firstName = 'Miguel';
let lastName = 'Vieira';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters

console.log(fullName[2]);

//string length
console.log(fullName.length);

//string methods 
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

//slicing 
let result1 = email.slice(0, 5); //slices from index 0 till 5: result= lvieira1997:hotmail.com
let result2 = email.substr(4, 10); //starts at index 4 and then goes up 10 indexes FROM 4 (so it would be from index 4 to 14)
let result3 = email.replace('m', 'w'); //replaces the first M with a W


//STRING CONCATENATION
let result4 = `This is a normal string with the email of: ${email} which will give me the email`;

//html template
let likes = 42;
let html = `
    <h2>${title}</h2>
    <p>by author: ${author}</p>
    <span>This blog has ${likes} likes</span>
`;


