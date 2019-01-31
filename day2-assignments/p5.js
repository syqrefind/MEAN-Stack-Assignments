console.log("Before:")
var library = [
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

console.log(library);
console.log("\nAfter:")

// It's an Array of Objects
//newLibrary = [];
//newLibrary[0] = {author: library[1].title, libraryID:library[1].libraryID, title:library[1].author};
//newLibrary[1] = {author: library[2].author, libraryID:library[2].libraryID, title:library[2].title};
//newLibrary[2] = {author: library[0].title, libraryID:library[0].libraryID, title:library[0].author};
//console.log(newLibrary);

var newLibrary = library.map(function(obj)){
   return {author: obj.author, libraryID: obj.libraryID, title: obj.t   itle}; 
});

newLibrary.sort(function(a,b){
        return b.libraryID - a.libraryID;
});

// swap
let a = newLibrary[0].author;
newLibrary[0].author = newLibrary[0].title;
newLibrary[0].author = a;


