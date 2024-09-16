import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";

import toast from "react-hot-toast";
import { axiosSecure } from "../../../hooks/useAxiosSecure";

const CartTable = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  const handleDelete = (item) => {
    console.log(item);
    axiosSecure.delete(`/carts/${item}`).then((res) => {
        console.log(res);
      if (res.data.deletedCount > 0) {
        refetch();
        toast.success(`data is deleted`);
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
              <th>Menu</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={item._id}>
                <td>{idx + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
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
              <th>Total Order: {cart.length}</th>
              <th>Total Price: $ {totalPrice}</th>
              <th>
                {" "}
                <Link to='/dashboard/payment' disabled = {!cart.length} className="btn glass bg-[#835D23] text-white hover:text-black">
                  PAY
                </Link>
              </th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CartTable;
