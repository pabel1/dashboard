import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { LuPen } from "react-icons/lu";
import { TbSquareRoundedMinus } from "react-icons/tb";

const UserTable = ({ data }) => {
  console.log(data);
  return (
    <table className=" w-full divide-y divide-gray-200 table-fixed">
      <thead className="bg-gray-100">
        <tr className="w-full">
          <th scope="" className="py-4 pl-4   ">
            <TbSquareRoundedMinus className=" text-2xl text-[#7F56D9] " />
          </th>
          <th
            scope=""
            className="py-3  text-base font-medium tracking-wider text-left text-gray-500 w-[35%]"
          >
            <span className=" flex items-center gap-1">
              User Info
              <AiOutlineArrowDown className=" text-lg" />
            </span>
          </th>
          <th
            scope=""
            className="py-3 text-base font-medium tracking-wider text-left text-gray-500 w-[35%]"
          >
            About
          </th>
          <th
            scope=""
            className="py-3   text-base font-medium tracking-wider text-left text-gray-500 w-[15%]"
          >
            Status
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
        {data?.data?.map((user, i) => (
          <tr key={i} className="">
            <td className="p-4 ">
              <div className="flex items-center">
                <input
                  id="checkbox-table-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-1" className="">
                  checkbox
                </label>
              </div>
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap w-[35%]">
              <div className="flex items-center gap-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={user?.avatar}
                  alt="profile"
                />
                <div className="text-gray-500">
                  <h2 className="text-gray-900 font-semiBold">
                    {user?.first_name + " " + user?.last_name}
                  </h2>
                  <p className="text-xs font-normal">{user?.email}</p>
                </div>
              </div>
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-500 w-[35%]">
              <p className="text-gray-900 font-normal">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-xs font-normal">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap w-[15%]">
              <span className="px-2 inline-flex text-xs leading-5 font-normal rounded-full bg-green-100 text-green-800">
                Random sticker level
              </span>
            </td>
            <td className="">
              <div className="flex gap-5 justify-center">
                <RiDeleteBinLine className="text-gray-600 cursor-pointer text-lg" />
                <LuPen className="text-gray-600 cursor-pointer text-lg" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        {/* <tr>
          <td
            colSpan={5}
            className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap w-[35%]"
          >
            <div className="flex items-center gap-2 justify-between">
              <button
                onClick={() => {
                  if (page > 1) {
                    setPage(page - 1);
                  }
                }}
                className={`font-normal border border-gray-200 px-3 py-1 rounded-lg ${
                  page === 1 && "opacity-50 cursor-not-allowed"
                }`}
              >
                Previous
              </button>
              <h2 className="font-normal">
                page {data?.page} of {data?.total_pages}
              </h2>
              <button
                onClick={() => {
                  if (page < data?.total_pages) {
                    setPage(page + 1);
                  }
                }}
                className={`font-normal border border-gray-200 px-3 py-1 rounded-lg ${
                  page === data?.total_pages && "opacity-50 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            </div>
          </td>
        </tr> */}
      </tfoot>
    </table>
  );
};

export default UserTable;
