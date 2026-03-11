//  Create a Book class with the following:
class Book{
    title;
    author;
    pages;
    isAvailable;
constructor(title,author,pages,isAvailable)
{
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isAvailable=isAvailable
}
//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)
 borrow()
{
    return this.title
}
returnBook()
{
    return this.title
}
 getInfo() {
    return {
        title: this.title,
        author: this.author,
        pages: this.pages,
        isAvailable: this.isAvailable
    };
}
 isLongBook()
{ 
   
    return true;
} 
}
let b1=new Book('harry potter','jk rowling',400,true)
console.log(b1.borrow());
console.log(b1.returnBook());
console.log(b1.getInfo());
console.log(b1.isLongBook());
//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise


