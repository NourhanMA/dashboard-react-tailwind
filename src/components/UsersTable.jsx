import { useEffect, useState } from "react";
import Cards from "./Cards";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useGetUsers } from "../hooks/useGetUsers";

function UsersTable() {
  const users = useGetUsers();

  if (!users) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="mx-8 flex flex-col">
        <Cards />

        <div className="flex min-w-full mt-8 border-b border-gray-200 shadow rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead>
              <tr className="text-left">
                <th className="theader">Name</th>
                <th className="theader">Email</th>
                <th className="theader">Status</th>
                <th className="theader">Edit</th>
                <th className="theader">Delete</th>
              </tr>
            </thead>

            <tbody className="bg-white text-left">
              {users.length > 0 &&
                users.map((user, i) => (
                  <tr key={`user-${i}`}>
                    <td className="flex items-center px-6 py-4">
                      <Link
                        to={`/profile/${user.id}`}
                        className="flex items-center "
                      >
                        <img
                          className="w-10 h-10 rounded-full"
                          src={user.image}
                          alt="admin-dashbord-ui"
                        />

                        <p className="text-sm text-gray-500 font-medium ml-4 ">
                          {user.firstName} {user.lastName}
                        </p>
                      </Link>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-500">
                      {user.email}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`py-1 px-2 text-xs rounded-full font-semibold ${
                          user.age < 40
                            ? "bg-green-100 text-green-800 "
                            : "text-red-800 bg-red-100"
                        }`}
                      >
                        {user.age < 40 ? "Active" : "Inactive"}
                      </span>
                    </td>

                    <td className=" px-6 py-4">
                      <PencilSquareIcon className="w-6 h-6 text-blue-400" />
                    </td>

                    <td className=" px-6 py-4">
                      <TrashIcon className="w-6 h-6 text-red-400" />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UsersTable;
