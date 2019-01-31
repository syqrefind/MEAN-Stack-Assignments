console.log("Before:")
var library = [
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

console.log(library);
console.log("\nAfter:")


var newLibrary = library.map(function(obj){
   return {author: obj.author, libraryID: obj.libraryID, title: obj.title}; 
});

newLibrary.sort(function(a,b){
        return b.libraryID - a.libraryID;
});

console.log(newLibrary)
// swap
//let a = newLibrary[0].author;
//newLibrary[0].author = newLibrary[0].title;
//newLibrary[0].author = 

