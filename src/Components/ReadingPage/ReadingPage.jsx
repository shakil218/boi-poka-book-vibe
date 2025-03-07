import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../Utilities/addToDb";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TotalPage from "../TotalPage/TotalPage";

const ReadingPage = () => {
  const [readList, setReadList] = useState([]);
  const [count, setCount] = useState(0);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    // setCount(handleCount);
    setReadList(readBookList);
  }, [allBooks]);

  useEffect(() => {
    const totalPages = readList.reduce((count, book) => parseInt(count) + parseInt(book.totalPages), 0);
    setCount(totalPages);
  }, [readList]);

  return (
    <div>
      <h1 className="text-center bg-gray-100 p-5 my-5 text-2xl font-bold rounded-2xl">
        Books
      </h1>
      <div className="my-10">
        <p className="text-2xl font-medium text-center">
          Total pages that you read : {count}
        </p>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
          </TabList>

          <TabPanel>
            <div className="flex flex-col gap-5 ">
              {readList.map((book) => (
                <TotalPage key={book.bookId} book={book}></TotalPage>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ReadingPage;
