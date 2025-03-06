import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredReadList,
  addToStoredWishList,
} from "../../Utilities/addToDb";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };

  const handleWishBookList = (id) => {
    addToStoredWishList(id);
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-[573px] bg-gray-100 rounded-2xl">
          <img src={image} className="w-[450px] h-[600px] p-16 max-w-md" />
        </div>
        <div className="ml-14">
          <h1 className="text-4xl font-bold">{bookName}</h1>
          <h6 className="text-[16px] font-medium text-gray-500 my-3">
            By : {author}
          </h6>
          <div className="border-t-1 border-dashed border-gray-400 "></div>
          <h6 className="text-[16px] font-medium text-gray-500 my-3">
            {category}
          </h6>
          <div className="border-t-1 border-dashed border-gray-400 "></div>
          <p className="my-3">
            <span className="text-[16px] font-medium">Review : </span>
            {review}
          </p>
          <div className="flex gap-5 items-center mb-3">
            <p className="font-medium">Tag</p>
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge font-medium bg-green-50 text-green-500 my-3"
              >
                # {tag}
              </div>
            ))}
          </div>
          <div className="border-t-1 border-dashed border-gray-400"></div>
          <div>
            <table className="table-xs mb-3">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Number of Pages:</td>
                  <td className="text-[16px] font-semibold">{totalPages}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Publisher:</td>
                  <td className="text-[16px] font-semibold">{publisher}</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Year of Publishing:</td>
                  <td className="text-[16px] font-semibold">
                    {yearOfPublishing}
                  </td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>Rating:</td>
                  <td className="text-[16px] font-semibold">{rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="btn btn-outline border-gray-400 rounded-lg mr-5"
            >
              Read
            </button>
            <button
              onClick={() => handleWishBookList(bookId)}
              className="btn bg-[#50B1C9] text-white rounded-lg"
            >
              WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
