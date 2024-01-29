//variable (const) people almacena un arreglo de nombres (name) y años (years)
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
//variable (const) comments almacena un arreglo de texto (text) y ids (id)
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  // Some and Every Checks
// Array.prototype.some() // is at least one thing in my array what I'm looking for.
//some tomara una función que chequeará cada elemento que tengamos
const isAdult = people.some(function(person) {
    const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year >= 19) {
        return true;
    }            
});
console.log(isAdult);

// Array.prototype.every() // is everyone 19?
    
const allAdults = people.every(function(person) {
    const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year >= 19) {
        return !true;
    }            
});
console.log(allAdults);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const comment = comments.find(function(comment){
    if (comment.id === 823423){
        return true;
    }
});
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const  index = comments.findIndex(comment => comment.id === 823423)
console.log(index)

comments.splice(index, 1);