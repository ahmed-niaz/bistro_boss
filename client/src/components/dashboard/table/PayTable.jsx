import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const PayTable = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  console.log(user);
  const { data: txn = [] } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const res = await axiosSecure(`/payment/${user?.email}`);
      return res.data;
    },
  });

  console.log(txn);
  return (
    <div className="w-full mx-4 p-6 mb-24">
      {/* table */}
      <div className="w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-cinzel text-[#835D23] text-xl">
              <th>#</th>
              <th>Email</th>
              <th>Transaction_ID</th>
              <th>Total Price</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {txn.map((item, idx) => (
             
              <tr key={item._id}>
                <td>{idx + 1}</td>
                <td>{item.email}</td>
                <td>{item.transactionId}</td>
                <td>{item.price}</td>
                <td>{new Date(item.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>

          <tfoot className="font-cinzel text-[#835D23] text-xl">
            <tr>
              <th></th>
              <th> </th>
              <th>Total Payment: {txn.length}</th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default PayTable;
