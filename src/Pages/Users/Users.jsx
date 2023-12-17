import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { LuUploadCloud } from "react-icons/lu";
import UserTable from "../../Components/Table/UserTable";
import { useGetAllUsersQuery } from "../../feature/user/userApiSlice";
const Users = () => {
  const [page, setPage] = useState(1);
  const {
    data: users,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetAllUsersQuery({ page }, { refetchOnMountOrArgChange: true }) || {};

  let content = null;
  if (!isLoading && !isSuccess && !error && users) {
    console.log(users);
    content = (
      <>
        {" "}
        <UserTable data={users} />
      </>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between mt-10 mb-6 items-center">
        <h2 className="text-2xl font-semiBold">Users</h2>
        <div className="buttons flex items-center gap-4">
          <button className="text-gray-700 border border-gray-700 rounded-lg px-4 py-1 flex justify-center items-center gap-2">
            <LuUploadCloud />
            Import
          </button>
          <button className="bg-[#6941C6] text-white rounded-lg px-4 py-1 flex justify-center items-center gap-2">
            <FiPlus />
            Add User
          </button>
        </div>
      </div>
      <div className="mb-5">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden">{content}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
