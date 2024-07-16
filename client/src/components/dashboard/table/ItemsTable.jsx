import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import Loader from "../../shared/Loader";

const ItemsTable = () => {
  const [menu, refetch, loading] = useMenu();
  const axiosSecure = useAxiosSecure();
  if (loading) return <Loader />;
  // delete item
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: ` ${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
// update item
  const handleUpdate = (item) => {
    console.log(item);
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
              <th>Image</th>
              <th>Price</th>
              <th>update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, idx) => (
              <tr key={item._id}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt=" " />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.price}</td>
                <td>
                  <Link
                    onClick={() => handleUpdate(item._id)}
                    className="btn glass bg-[#835D23] text-white hover:text-black"
                  >
                    <FaRegEdit size={24} />
                  </Link>
                </td>
                <th>
                  <Link
                    onClick={() => handleDelete(item._id)}
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
              <th>Total items: {menu.length}</th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ItemsTable;
