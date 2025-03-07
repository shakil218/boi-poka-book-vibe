import React from "react";
import { RiGroupLine } from "react-icons/ri";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";

const TotalPage = ({ book }) => {
  const { bookName, author, image, rating, category, tags,yearOfPublishing,publisher,totalPages } = book;
  return (
    <div className="hero ">
      <div className="hero-content flex-row  min-w-full h-[277px] border border-gray-300 rounded-2xl">
        <div className="w-[230px] h-[229px] bg-gray-100 rounded-2xl">
          <img
            src={image}
            className="w-[230px] h-[250px] p-16 pt-10 max-w-sm"
          />
        </div>
        <div className="ml-5">
          <h1 className="text-2xl font-bold">{bookName}</h1>
          <h6 className="text-[16px] font-medium ">By : {author}</h6>
          <div className="flex gap-5 items-center ">
            <p className="font-medium">Tag</p>
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge font-medium bg-green-50 text-green-500 my-3"
              >
                # {tag}
              </div>
            ))}
            <p className="flex items-center gap-1">
              <IoLocationOutline></IoLocationOutline>Year of Publishing:{" "}
              {yearOfPublishing}
            </p>
          </div>
          <div className="flex gap-5">
            <p className="flex items-center gap-1">
              <RiGroupLine></RiGroupLine>Publisher: {publisher}
            </p>
            <p className="flex items-center gap-1">
              <HiOutlineDocumentChartBar></HiOutlineDocumentChartBar>Page{" "}
              {totalPages}
            </p>
          </div>
          <div className="border-t-1 border-dashed border-gray-300 my-3"></div>
          <div className="flex gap-5">
            <div className="badge badge-soft badge-info rounded-[30px]">
              Category: {category}
            </div>
            <div className="badge badge-soft badge-warning rounded-[30px]">
              Rating: {rating}
            </div>
            <button className="badge bg-[#23BE0A] text-white rounded-[30px]">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPage;
