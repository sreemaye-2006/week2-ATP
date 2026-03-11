//  1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.
class Book2
{
    title;
    year;
    author;
    available;
    pages;
constructor(title,year,author,available,pages)
{
    this.title=title;
    this.year=year;
    this.author=author;
    this.available=available;
    this.pages=pages;
}

//   2. Perform the following operations:
allBookDetails()
{
    return {
       title: this.title,
        year:this.year,
        author:this.author,
        available:this.available
    };
}

//       i. Display info of all books
//       ii. Borrow 2 books and show their availability status
borrow()
{
    return {
        title:this.title,
        available:this.available
    };
}
returnBook()
{
    return{
        title:this.title,
        available:this.available+1
    };
}
//       iii. Return 1 book and show updated status
//       iv. Count how many books are "long books" (more than 300 pages)
longBook()
{
    if(this.pages>300)
    {
        return this.title;
    }else{
        return "less then 300pages"
    }
}
//       v. List all available books
availableBook()
{
    if(this.available>1)
    {
        return this.title
    }else{
        return "not available"
    }
}
}
let b2=new Book2('happy year',1999,'jonson',1,250)
let b3=new Book2('stories',2001,'sudha murty',2,150)
let b4=new Book2('game of thrones',2011,'lily',2,350)
let b1=new Book2('harry potter',1989,'jk rowling',3,400)
let b5=new Book2('ignited minds',2015,'abdul kalam',1,300)
console.log(b1.allBookDetails())
console.log(b1.borrow())
console.log(b1.returnBook())
console.log(b1.longBook())
console.log(b1.availableBook())
console.log(b2.allBookDetails())
console.log(b2.borrow())
console.log(b2.returnBook())
console.log(b2.longBook())
console.log(b2.availableBook())
