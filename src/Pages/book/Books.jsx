import React from "react";
import bookCover from "../../assets/Book/book_cover.jpg";
import { Link } from "react-router";

const bookData = [
  {
    image: "https://example.com/images/the-great-gatsby.jpg",
    title: "The Great Gatsby",
    rating: 4.5,
    author: "F. Scott Fitzgerald",
    price: 12.99,
  },
  {
    image: "https://example.com/images/to-kill-a-mockingbird.jpg",
    title: "To Kill a Mockingbird",
    rating: 4.8,
    author: "Harper Lee",
    price: 14.49,
  },
  {
    image: "https://example.com/images/1984.jpg",
    title: "1984",
    rating: 4.7,
    author: "George Orwell",
    price: 10.99,
  },
  {
    image: "https://example.com/images/harry-potter.jpg",
    title: "Harry Potter and the Sorcerer's Stone",
    rating: 4.9,
    author: "J.K. Rowling",
    price: 15.99,
  },
  {
    image: "https://example.com/images/harry-potter.jpg",
    title: "Harry Potter and the Sorcerer's Stone",
    rating: 4.9,
    author: "J.K. Rowling",
    price: 15.99,
  },
];

export default function Books() {
  // forl slug
  function slugify(title) {
    return title
      .toLowerCase()
      .replace(/'/g, "") // remove apostrophes
      .replace(/\s+/g, "-") // replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, ""); // remove special characters
  }

 

  return (
    <div className=" w-11/12 mx-auto py-10">
      <div className="grid grid-cols-4 gap-5">
        {/* Book card */}
        {bookData.map((book,idx) => (
          <Link key={idx} to={`${slugify(book?.title)}`} className="" state={book}>
            <div className=" border rounded-md shadow-md hover:shadow-lg">
              <div className="text-center">
                <img
                  src={bookCover}
                  alt=""
                  className="mx-auto w-full h-80 rounded-md"
                />
              </div>
              <div className="p-3">
                <h5 className="text-xl font-semibold mb-2">{book?.title}</h5>
                <p>{book?.rating}</p>
                <p>Author: {book?.author}</p>
                <h3 className="text-2xl font-semibold my-1">${book?.price}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
