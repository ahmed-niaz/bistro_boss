import { useQuery } from "@tanstack/react-query";
import { MdDeleteOutline, MdOutlineManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";
import useAxiosSecure from './../../hooks/useAxiosSecure';


const UserTable = () => {
 const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure(`/users`);
      return res.data;
    },
  });

  // handle delete
  const handleDelete = (user) => {
    console.log(user);
    axiosSecure.delete(`/users/${user}`).then((res) => {
      console.log(res);
      if (res.data.deletedCount > 0) {
        refetch();
        toast.success(`data is deleted`);
      }
    });
  };

  // handle user role
  const makeAdmin = (role) => {
    console.log(role);
    axiosSecure.patch(`/users/admin/${role}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch()
        toast.success(`${role.name} is admin now`);
      }
    });
  };
  return (
    <div className="w-full mx-4 p-6 mb-24">
      {/* table */}
      <div className="w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-cinzel text-[#835D23] text-xl">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <td>{idx + 1}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <Link
                      onClick={() => makeAdmin(user._id)}
                      className="btn glass bg-[#835D23] text-white hover:text-black"
                    >
                      <MdOutlineManageAccounts size={24} />
                    </Link>
                  )}
                </td>
                <th>
                  <Link
                    onClick={() => handleDelete(user?._id)}
                    className="btn glass bg-[#835D23] text-white hover:text-black"
                  >
                    <MdDeleteOutline size={24} />
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>

          <tfoot className="font-cinzel text-[#835D23] text-xl">
            <tr>
              <th></th>
              <th> </th>
              <th>Total Users: {users.length}</th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
