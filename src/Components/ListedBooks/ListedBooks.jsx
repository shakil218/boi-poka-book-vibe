import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../Utilities/addToDb";
import ListedBook from "../ListedBook/ListedBook";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const allBooks = useLoaderData();
  const { rating, totalPages, yearOfPublishing } = allBooks;
  console.log(rating, totalPages, yearOfPublishing);

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

  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "Rating") {
      const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedReadList);
    } else if (sortType === "Number-of-pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedReadList);
    } else if (sortType === "Publisher-year") {
      const sortedReadList = [...readList].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setReadList(sortedReadList);
    }
  };

  return (
    <div>
      <h1 className="text-center bg-gray-100 p-5 my-5 text-2xl font-bold rounded-2xl">
        Books
      </h1>
      <div className="flex justify-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 text-white bg-[#23BE0A] rounded-lg"
          >
            {sort ? `${sort}` : `Sort By`}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-green-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("Rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleSort("Number-of-pages")}>
                Number of pages
              </a>
            </li>
            <li>
              <a onClick={() => handleSort("Publisher-year")}>Publisher year</a>
            </li>
          </ul>
        </div>
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
                <ListedBook key={book.bookId} book={book}></ListedBook>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col gap-5 ">
              {wishList.map((book) => (
                <ListedBook key={book.bookId} book={book}></ListedBook>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
