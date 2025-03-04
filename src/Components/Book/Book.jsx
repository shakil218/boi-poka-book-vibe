import React from "react";
import { MdStarOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 shadow-lg p-6">
        <figure className="py-10 bg-[#F3F3F3] rounded-2xl">
          <img src={image} className="h-[166px]" alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex gap-5">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge font-medium bg-green-50 text-green-500 my-3"
              >
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
          </h2>
          <p>By : {author}</p>
          <div className="border-t-1 border-dashed border-gray-300 my-3"></div>
          <div className="card-actions justify-between">
            <div>{category}</div>
            <div className="flex items-center gap-3">
              {rating}
              <MdStarOutline />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
