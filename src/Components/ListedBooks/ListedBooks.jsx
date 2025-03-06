import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../Utilities/addToDb";
import Book from "../Book/Book";
import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, [allBooks]);

  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));

    const wishBookList = allBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );

    setWishList(wishBookList);
  }, [allBooks]);

  return (
    <div>
      <h1 className="text-center bg-gray-100 p-5 my-5 text-2xl font-bold rounded-2xl">
        Books
      </h1>
      <div className="flex justify-center">
        <button className="btn bg-[#23BE0A] text-white rounded-lg ">
          Sort By <IoIosArrowDown></IoIosArrowDown>{" "}
        </button>
      </div>
      <div className="my-10">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <div className="flex flex-col gap-5 ">
              {readList.map((book) => (
                <Book key={book.bookId} book={book}></Book>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col gap-5 ">
              {wishList.map((book) => (
                <Book key={book.bookId} book={book}></Book>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
